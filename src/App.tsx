import Router from "./routes";
import { Global } from "./style/global";

function App() {

  const handleClick = () => {
    localStorage.setItem("@token:haki", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pYUBnbWFpbC5jb20iLCJpYXQiOjE2MzY5MTE1MTgsImV4cCI6MTYzNjkxNTExOCwic3ViIjoiMyJ9.p1W00wTlXgPtoh5wc_OVN4FFt47jrqGXvJ6v83w90Gc')
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
