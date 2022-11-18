
function App() {
  let sum=1000000
  let ap='1 2 4 r'
  return (
    <div className="App">
      <h1>Hello </h1>
     <p>{ap.replaceAll(/\s/g, '')}</p>
     <p>{sum.toLocaleString()}</p>
    </div>
  );
}

export default App;
