'use client';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';

function Uploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [URL, setURL] = useState('');
  
  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64File = reader.result.split(',')[1];
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({
            filename: file.name,
            image: base64File,
            type: file.type,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        if (data.status === 'success') {
          setUploading(false);
          setURL(data.url);
          console.log(URL);
        }
      } catch (error) {
        console.log('error in uploading file');
        setUploading(false);
      }
    };
  };

  const selectFileHandler = (e) => {
    setFile(e.target.files[0]);
  };
  if (uploading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <label>plz select your file</label>
      <input type="file" onChange={selectFileHandler} />
      <input type="text" name="img" value={URL} onChange={() => setURL(URL)} hidden />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default Uploader;
