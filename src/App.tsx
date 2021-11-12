import Router from "./routes";
import { Global } from "./style/global";

function App() {

  // const handleClick = () => {
  //   localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pYUBnbWFpbC5jb20iLCJpYXQiOjE2MzY3NTEzOTcsImV4cCI6MTYzNjc1NDk5Nywic3ViIjoiMyJ9.1dUt2UlVzEUE8pN3N8sXCENq-iusojNofCN12Xk2nnI')
  // }
  return (
    <div className="App">
      <Global />
      <Router />
      {/* <button onClick={handleClick}>Clique</button> */}
    </div>
  );
}

export default App;
