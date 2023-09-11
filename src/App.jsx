function App() {

  return (
    <>
      <button>Ladda upp</button>
      <select>
        <option>Sortera</option>
        <option>A - Ö</option>
        <option>Ö - A</option>
        <option>Stigande filstorlek</option>
        <option>Fallande filstorlek</option>
      </select>
      <div style={{width: "500px", height: "500px", backgroundColor: "gray" }}>
      <button>Ladda ner</button>
        </div>
    </>
  )
}

export default App
