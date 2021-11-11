import Input from "./components/Input";
import { Global } from "./style/global";

function App() {
  return (
    <div className="App">
      <Global />
      <Input placeholder={'Name'} />
    </div>
  );
}

export default App;
