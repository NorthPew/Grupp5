import '../src/app.css'

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
            // map function here
                <div class="image-box">
                  <a className="download-button" href={url} download target="_blank">Förstora bild och ladda ner</a>
                  <img src={url} width="200" height="125"></img>
                </div>
        }
      </div>
    </div>
  )
}

export default App
