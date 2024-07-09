// app/components/ImageDownloader.js
'use client';

import { useState } from 'react';

export default function ImageDownloader() {
  const [filename, setFilename] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (event) => {
    setFilename(event.target.value);
  };

  const handleDownload = async () => {
    if (!filename) return;

    const response = await fetch(`/api/download?filename=${filename}`);

    if (response.ok) {
      const data = await response.json();
      setImageUrl(data.url);
    } else {
      console.error('Failed to download image');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={filename}
        onChange={handleInputChange}
        placeholder="Enter filename"
      />
      <button onClick={handleDownload}>Download</button>
      {imageUrl && (
        <div>
          <h3>Downloaded Image:</h3>
          <img src={imageUrl} alt="Downloaded" />
        </div>
      )}
    </div>
  );
}
