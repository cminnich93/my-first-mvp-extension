import React, { useState } from 'react';
import axios from 'axios';

function Share() {
  const [selectedFile, setSelectedFile] = useState( {
    image: "",
    name: "",
    description: "",
    designer: "",
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleNameChange = (event) => {
    setSelectedFile((state) => ( {...selectedFile, name: event.target.value} ))
  }

  const handleDescriptionChange = (event) => {
    setSelectedFile((state) => ( {...selectedFile, description: event.target.value} ))
  }

  const handleDesignerChange = (event) => {
    setSelectedFile((state) => ( {...selectedFile, designer: event.target.value} ))
  }
  return (
    <div>
      
      <form>
        <div className="form-fields">
        <h2 style={{ fontSize: '2rem', padding: '2rem', fontWeight: '500' }}>Upload Design</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleFileUpload}>Upload Photo</button><br />
          <label htmlFor="tField">Design Name</label><br />
          <input
              id = "tField"
              name="title"
              value={selectedFile.name}
              onChange={(e) => handleNameChange(e)}
            />
            {/* onChange={(handleInputChange} */}
          </div>
          <div className="form-fields span-2-cols">
            <label htmlFor="dField">Description</label><br />
            <textarea
                id = "dField"
                name="description"
                value={selectedFile.description}
                onChange={(e) => handleDescriptionChange(e)}
              />
          </div>
          <div className="form-fields">
            <label htmlFor="dField">Designer</label><br />
            <textarea
                id = "dField"
                name="designer"
                value={selectedFile.designer}
                onChange={(e) => handleDesignerChange(e)}
              />
          </div>
          <div className="span-2-cols s-btn-container">
              <button>Submit</button>
          </div>

      </form>

    </div>
  );
}

export default Share;
