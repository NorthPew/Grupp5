import '../src/app.css'

import { bucketParams, s3 } from '../config';


function App() {
  return (
    <div className="center-box">
      <header className="header-container">
        <button className="btn-loading">Ladda upp</button>
        <h1>Bildvisare</h1>
        <select className='sort-item'>
          <option>Sortera</option>
          <option>A - Ö</option>
          <option>Ö - A</option>
          <option>Stigande filstorlek</option>
          <option>Fallande filstorlek</option>
        </select>
      </header>

      <div className="image-container">
          {
            s3.listObjects(bucketParams, function (err, data) { 
          if (err) {
            console.log("Error: ", err);
          } else {
            console.log("Success", data);
            for (let i = 0; data.Contents.length; i++) {
              let urlParams = {Bucket: bucketParams.Bucket, Key: data.Contents[i].Key}
              s3.getSignedUrl('getObject', urlParams, function (err, url) {
                <div class="image-box">
                  <a className="download-button" href={url} download target="_blank">Förstora bild och ladda ner</a>
                <img src={url} width="200" height="125"></img>
              </div>
              })
            }
          }
        })
        }
      </div>
    </div>
  )
}

export default App
