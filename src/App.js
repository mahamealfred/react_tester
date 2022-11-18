
import './App.css';

function App() {
  let sum=1000000
  let ap='1 2 4 r'
  return (
    <div className="App">
      <h1>Hello from Alfred</h1>
      <p>{sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>{ap.replaceAll(/\s/g, '')}</p>
    </div>
  );
}

export default App;
