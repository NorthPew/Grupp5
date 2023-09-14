import { Component, useEffect, useState } from 'react'
import { API_URL } from './constants'


import './app.css'

import AWS from 'aws-sdk';

AWS.config.update({ 
  accessKeyId: "AKIAQHMIJWQQFB6F7EZC", 
  secretAccessKey: "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", 
  region: 'eu-north-1', 
  bucket: 's3buckergrupp5'
  }); 

const s3 = new AWS.S3();



function App() {
  const [selectedImage, setSelectedImage] = useState(null);;
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages()
  }, []);


  console.log(images);

  function onFileChange(event) {
   setSelectedImage(event.target.files[0])
  }
  
  async function onFileUpload() {
    const url = `${API_URL}`
  
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({key: `${selectedImage.name}`})
     })
  
     .then((res) => res.json())
     .then((res) => {
      console.log(res);
      fetch(res.URL, {
        method: 'PUT',
        mode: 'cors',
        body: selectedImage
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
     })
     .catch((err) => console.log(err))
  }
  
  function getImages() {
    getImages = () => {
      const params = {
        Bucket: 's3buckergrupp5',
      };
  
      s3.listObjectsV2(params, (err, data) => {
        if (err) {
          console.error('Fel vid hämtning av bilder:', err);
        } else {
  
          const imageList = data.Contents.map((obj) => obj.Key);
          return setImages(imageList);
        }
      });
    };
  }


  // Render
    return (
      <div className="center-box">
      <header className="header-container">
          <input type="file" onChange={onFileChange} accept='image/*' />
          <button onClick={onFileUpload}>Ladda upp</button>

        <h1>Bildvisare</h1>
      </header>
  
      <div className="image-container">
      <ul>
          {images.map((image, index) => (
            <li key={index}><img src={`http://s3buckergrupp5.s3-website.eu-north-1.amazonaws.com/${image}`}></img></li>
          ))}
      </ul>
      </div>
    </div>
    )
}

export default App
