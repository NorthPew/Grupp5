import { Component } from 'react'
import { API_URL } from './constants'

import './app.css'

class App extends Component {

  // States
  state = {
    selectedFile: null,
    fileUploadedSuccess: false,
    //data: null
  }

  // Upload part

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = async () => {
    const formData = new FormData()
    formData.append(
    "demo file",
    this.state.selectedFile
    );

  // Få en säker URL från server
  const { url } = await fetch(`${API_URL}/s3Url`).then(res => res.json())
  console.log(url);


    // Posta bilden direkt till S3 bucketen
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: this.state.selectedFile
    })


    const imageURL = url.split('?')[0]
    console.log(imageURL);

    // Posta en request till servern för att spara annan data

  }


  // Render
  render() {
    return (
      <div className="center-box">
      <header className="header-container">
        <form onSubmit={this.onFileUpload}>
          <input type="file" onChange={this.onFileChange} accept='image/*' />
          <button type="submit">Ladda upp</button>
        </form>

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
          //data.map(item => {
          //  <div key={item} class="image-box">
          //    <a className="download-button" href={item} download target="_blank">Förstora bild och ladda ner</a>
          //    <img src={item} width="200" height="125"></img>
          //   </div>
          //})
        }
      </div>
    </div>
    )

  }
}

export default App
