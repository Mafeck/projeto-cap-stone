import { Global } from "./style/global";
import RegisterClient from "./pages/RegisterClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Global />
      <RegisterClient/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router />
    </div>
  );
}

export default App;
