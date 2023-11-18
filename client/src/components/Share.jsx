import React, { useState } from 'react';
import axios from 'axios';

function Share() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      const response = await axios.post('http://localhost:4000/upload', formData);

      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Share Your Design Here</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleFileUpload}>Upload Photo</button>
    </div>
  );
}

export default Share;