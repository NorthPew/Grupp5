import { Component } from 'react'
import { API_URL } from './constants'
import AWS from 'aws-sdk';
import './app.css'

AWS.config.update({ 
  accessKeyId: '', 
  secretAccessKey: '', 
  region: 'eu-north-1', 
  }); 


const s3 = new AWS.S3();

class App extends Component {

  // States
  state = {
    selectedFile: null,
    images: []
  }

  // Upload part

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = async () => {
    const url = `${API_URL}`

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({key: `${this.state.selectedFile.name}`})
   })

   .then((res) => res.json())
   .then((res) => {
    console.log(res);
    fetch(res.URL, {
      method: 'PUT',
      mode: 'cors',
      body: this.state.selectedFile
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
   })
   .catch((err) => console.log(err))
  }

  getImages() {
    const params = {
      Bucket: 's3buckergrupp5'
    }

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.error('Fel vid hämtning av bilder:', err);
      } else {

        const imageList = data.Contents.map((obj) => obj.Key);
        this.setState({images: [imageList]});
      }
    });

  }


  // Render
  render() {
    return (
      <div className="center-box">
      <header className="header-container">
          <input type="file" onChange={this.onFileChange} accept='image/*' />
          <button onClick={this.onFileUpload}>Ladda upp</button>

        <h1>Bildvisare</h1>
      </header>
  
      <div className="image-container">
        {
          this.state.images.map(item => {
            <div key={item} class="image-box">
              <a className="download-button" href={item} download target="_blank">Förstora bild och ladda ner</a>
              <img src={item} width="200" height="125"></img>
             </div>
          })
        }
      </div>
    </div>
    )

  }
}

export default App
