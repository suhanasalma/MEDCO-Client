import React, { useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState('');
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
      formData.append('file', files);

      const response = await fetch('https://file.io/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFileUrl(data.link);
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('File upload error', error);
    } finally {
      setUploading(false);
    }
  };

  const uploadFile = async (e)=>{
    const file = e.target.files[0]
    if (!file) {
        return;
    }
    const fileName = file.name.length>12 ? `${file.name.slice(0,13)}... .${file.name.split('.')[1]}`:file.name;
    console.log('file',file.name);
    console.log('fileName',fileName);

    const formData = new FormData()
    formData.append('file',file)
    setFiles(prevState=>[...prevState, {name:fileName,loading:0}])
    setShowProgress(true);

      axios.post('https://file.io/',formData,{
        onUploadProgress:({loaded,total})=>{
            setFiles(prevState=>{
                const newFiles = [...prevState];
                newFiles[newFiles.length-1].loading = Math.floor((loaded/total)*100)
                return newFiles
            })
            if(loaded==total){
                const filesize = total<1024 ? `${total} kb`:`${(loaded/(1024*1024)).toFixed(2)} MB`
                setUplodedFiles([...uplodedFiles,{name:fileName,size:filesize}])
                setFiles([])
                setShowProgress(false)
            }
        }
      }).catch(console.error)

  }

  return (
    <div>
      <input type="file" onChange={uploadFile} />
      <button onClick={handleUpload} disabled={uploading}>
        Upload
      </button>
      {uploading && <p>Uploading...</p>}
      {fileUrl && (
        <div>
          <p>File uploaded successfully! You can download it here:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
