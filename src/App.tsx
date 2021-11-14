import Router from "./routes";
import { Global } from "./style/global";

function App() {

  const handleClick = () => {
    localStorage.setItem("@token:haki", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pYUBnbWFpbC5jb20iLCJpYXQiOjE2MzY5MDc4ODcsImV4cCI6MTYzNjkxMTQ4Nywic3ViIjoiMyJ9.rTKqrEtOJEMBn4vHOBIdbvS6KFHAZL9RXk1bAZFwsv0')
  }
  return (
    <div className="App">
      <Global />
      <Router />
      <button onClick={handleClick}>Clique</button>
    </div>
  );
}

export default App;
