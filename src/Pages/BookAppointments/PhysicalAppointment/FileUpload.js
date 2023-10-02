import React, { useRef, useState } from "react";
import axios, { CancelToken, isCancel } from "axios";
import { AiFillFileText, AiOutlineCheck ,AiFillDelete} from "react-icons/ai";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState("");
  const [uplodedFiles, setUplodedFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);


  const uploadFile = async (e) => {
    console.log(fileInputRef.files);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    
    const fileName =
      file.name.length > 12
        ? `${file.name.slice(0, 13)}... .${file.name.split(".")[1]}`
        : file.name;
        fileInputRef.current.value = null;

    const formData = new FormData();
    formData.append("file", file);
    setFiles((prevState) => [...prevState, { name: fileName, loading: 0 }]);
    setShowProgress(true);
    setUploading(true);
    const source = CancelToken.source();
    setCancelTokenSource(source)

    axios
      .post("https://file.io/", formData, {
        onUploadProgress: ({ loaded, total }) => {
            if (isCancel(source.token)) {
                setShowProgress(false);
                setUploading(false);
                setFiles([]);
            fileInputRef.current.value = null;
                return;
            }
            setFiles((prevState) => {
                if (prevState.length === 0) {
                    return prevState;
                }
            const newFiles = [...prevState];
            
            newFiles[newFiles?.length - 1].loading = Math.floor(
              (loaded / total) * 100
            );
            return newFiles;
          });
          fileInputRef.current.value = null;
          if (loaded == total) {
            const filesize =
              total < 1024
                ? `${total} kb`
                : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;

            setUplodedFiles([
              ...uplodedFiles,
              { name: fileName, size: filesize },
            ]);
           
            setShowProgress(false);
            setUploading(false);
            setFiles([]);
            fileInputRef.current.value = null;
          }
        },
        cancelToken: source.token,
      })
      .catch(error=>{
        setShowProgress(false);
        setUploading(false);
        setFiles([]);
        console.log(error);
      });
  };



const deleteUploadFile = (name) => {
    const filteredFiles = uplodedFiles.filter((file) => file.name !== name);
    setUplodedFiles(filteredFiles);
    fileInputRef.current.value = null;
  };
  const deleteFile = (name) => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("File upload cancelled");
    }
    fileInputRef.current.value = null;
    const filteredFiles = files.filter((file) => file.name !== name);
    setFiles(filteredFiles);
  };
  return (
    <div>
      <div className="w-full mt-2 text-sm text-light-gray">
        <label
          onChange={uploadFile}
          className={`${uploading?"bg-light-gray border-2 w-full border-light-gray pl-2 flex justify-between items-center text-green":"border-2 w-full border-light-gray pl-2 flex justify-between items-center"} rounded-md`}
        >
         {uploading?"uploading..." :"Choose file..."}
          <input  
          disabled ={uploading}
          ref={fileInputRef}
            className="opacity-0"
            type="file"
            // accept="image/png, image/jpeg, .pdf, .docx, image/jpg,"
          />
          <span className="bg-light-gray p-2 text-gray">browse</span>
        </label>
      </div>
      <div>
      <div className="mt-2 space-y-5 w-8/12 ">
          {uplodedFiles?.map((file,i) => (
            <div key={i} className="flex items-center gap-5 bg-light-brown px-2 py-1 rounded-md">
              <AiFillFileText className="text-2xl" />
              <div className="flex justify-between items-center w-full">
              <div className="text-sm">
                <p>{file.name}</p>
                <p className="text-xs">{file.size}</p>
              </div>
             <div className="flex items-center gap-5">
             <AiOutlineCheck className=""/>
              {!uploading && <AiFillDelete onClick={()=>deleteUploadFile(file.name)} className="text-red cursor-pointer"/>}
             </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-5 w-8/12 ">
          {files?.map((file,i) => (
            <div key={i} className="bg-light-brown p-2 rounded-md">
              <div className="flex items-center gap-5 ">
                <AiFillFileText className="text-2xl" />
                <div className="flex justify-between items-center w-full">
                <div className="text-sm">
                  <p>{file.name} - uploading...</p>
                   <div className="w-full h-2 rounded-lg bg-white progressBar"><div
                      className="h-full w-full rounded-lg bg-green "
                      style={ { width: `${file?.loading}%` }}
                    ></div></div>
                    
                </div>
                <p>{file?.loading}%</p>
                <AiFillDelete onClick={()=>deleteFile(file.name)} className="text-red cursor-pointer"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default FileUpload;
