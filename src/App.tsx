import { Global } from "./style/global";
import CardDashboard from "./components/CardDashboard";

function App() {
  return (
    <div className="App">
      <CardDashboard
        title="rfewrewrwe"
        description="gfwewf"
        image="fefsdf"
        background="red"
        backgroundBall="blue"
      />
      <Global />
    </div>
  );
}

export default App;
