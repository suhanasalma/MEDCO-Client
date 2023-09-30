import React, { useState } from "react";
import axios from "axios";
import { AiFillFileText, AiOutlineCheck } from "react-icons/ai";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState("");
  const [uplodedFiles, setUplodedFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!files) {
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", files);

      const response = await fetch("https://file.io/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFileUrl(data.link);
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("File upload error", error);
    } finally {
      setUploading(false);
    }
  };

  console.log("uplodedFiles", uplodedFiles);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const fileName =
      file.name.length > 12
        ? `${file.name.slice(0, 6)}... .${file.name.split(".")[1]}`
        : file.name;
    // console.log('file',file.name);
    // console.log('fileName',fileName);

    const formData = new FormData();
    formData.append("file", file);
    setFiles((prevState) => [...prevState, { name: fileName, loading: 0 }]);
    setShowProgress(true);
    setUploading(true);

    axios
      .post("https://file.io/", formData, {
        onUploadProgress: ({ loaded, total }) => {
          setFiles((prevState) => {
            const newFiles = [...prevState];
            newFiles[newFiles.length - 1].loading = Math.floor(
              (loaded / total) * 100
            );
            console.log("new files", newFiles[newFiles.length - 1].loading);
            return newFiles;
          });
          if (loaded == total) {
            const filesize =
              total < 1024
                ? `${total} kb`
                : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            setUplodedFiles([
              ...uplodedFiles,
              { name: fileName, size: filesize },
            ]);
            setFiles([]);
            setShowProgress(false);
            setUploading(false);
          }
        },
      })
      .catch(console.error);
  };

  console.log("files", files);

  return (
    <div>
      <div className="w-full mt-2 text-sm text-light-gray">
        <label
          onChange={uploadFile}
          className="border-2 w-full border-light-gray pl-2 flex justify-between items-center"
        >
          Choose file...
          <input
            className="opacity-0"
            type="file"
            // accept="image/png, image/jpeg, .pdf, .docx, image/jpg,"
          />
          <span className="bg-light-gray p-2 text-gray">browse</span>
        </label>
      </div>
      <div>
        <div className="mt-2 space-y-5 w-8/12 ">
          {files.map((file) => (
            <div className="bg-light-brown p-2 rounded-md">
              <div className="flex items-center gap-5 ">
                <AiFillFileText className="text-2xl" />
                <div className="flex justify-between items-center w-full">
                <div className="text-sm">
                  <p>{file.name} - uploading...</p>
                    <div className="w-full h-2 rounded-lg bg-white progressBar"><div
                      className="h-full w-full rounded-lg bg-green "
                      style={{ width: `${file.loading}%` }}
                    ></div></div>
                    
                </div>
                <p>{file.loading}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-5 w-8/12 ">
          {uplodedFiles.map((file) => (
            <div className="flex items-center gap-5 bg-light-brown px-2 py-1 rounded-md">
              <AiFillFileText className="text-2xl" />
              <div className="flex justify-between items-center w-full">
              <div className="text-sm">
                <p>{file.name}</p>
                <p className="text-xs">{file.size}</p>
              </div>
              <AiOutlineCheck />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
