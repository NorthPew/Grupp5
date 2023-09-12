import { Component } from 'react'
import '../src/app.css'

class  App extends Component {
  state = {
    selectedFile: null,
    fileUploadedSuccess: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = () => {
    const formData = new FormData()
    formData.append(
    "demo file",
    this.state.selectedFile
    );

    // call api
    console.log('Detta är ett låtsas API POST REQUEST!: ', formData);
    // this.setState({selectedFile: null, fileUploadedSuccess: true})
  }

  // Kanske ta bort detta sen
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <p>Filnamn: {this.state.selectedFile.name}</p>
      )
    } else if (this.state.fileUploadedSuccess) {
      return (
        <p>Filen har laddats upp</p>
      )
    } else {
      return (
        <p>Ladda upp fil!</p>
      )
    }
}

  render() {
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
            this.fileData()
            // map function here
            //  <div class="image-box">
            // <a className="download-button" href={url} download target="_blank">Förstora bild och ladda ner</a>
            // <img src={url} width="200" height="125"></img>
            // </div>
        }
      </div>
    </div>
    )

  }
}

export default App
