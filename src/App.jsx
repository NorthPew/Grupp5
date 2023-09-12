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
        <div class="image-box">
          <a className="download-button" href="https://kalleanka.se/wp-content/uploads/Figurer-Kalle-Anka.jpg" download target="_blank">Förstora bild och ladda ner</a>
          <img src="https://kalleanka.se/wp-content/uploads/Figurer-Kalle-Anka.jpg" width="200" height="125"></img>
        </div>
        <div class="image-box">
          <a className="download-button" href="https://kalleanka.se/wp-content/uploads/Figurer-Kalle-Anka.jpg" download target="_blank">Förstora bild och ladda ner</a>
          <img src="https://kalleanka.se/wp-content/uploads/Figurer-Kalle-Anka.jpg" width="200" height="125"></img>
        </div>
        <div class="image-box">
          <a className="download-button" href="https://kalleanka.se/wp-content/uploads/Figurer-Kalle-Anka.jpg" download target="_blank">Förstora bild och ladda ner</a>
          <img src="https://kalleanka.se/wp-content/uploads/Figurer-Kalle-Anka.jpg" width="200" height="125"></img>
        </div>
      </div>
    </div>
  )
}

export default App
