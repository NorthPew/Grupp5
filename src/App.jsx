import { Component } from 'react'
import axios from 'axios'
import { API_URL } from './constants'


import '../src/app.css'



class  App extends Component {

  // States
  state = {
    selectedFile: null,
    fileUploadedSuccess: false,
    data: null
  }

  // Upload part
  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = () => {
    const formData = new FormData()
    formData.append(
    "demo file",
    this.state.selectedFile
    );
  }

// Get images

  getImage = () => {
    axios.get(`${API_URL}GetFromS3 `)
    .then(response => {
      this.setState({data: response.data})
      .catch(error => {
        console.error(error);
      })
    })
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return (<p>Loading images</p>)
    }

    return (
      <div className="center-box">
      <header className="header-container">
        <input type="file" onChange={this.onFileChange} />
        <button onClick={this.onFileUpload}>Ladda upp</button>
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
          data.map(item => {
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
