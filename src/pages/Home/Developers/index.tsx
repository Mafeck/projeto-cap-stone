import Developer from "../../../components/Developer";
import { DevelopersBox } from "./style";
import Felipe from "../../../assets/felipe.png";
import Fernanda from "../../../assets/fernanda.png";
import Maria from "../../../assets/maria.png";
import Marcus from "../../../assets/marcus.png";
import Patrick from "../../../assets/patrick.png";

const Developers = () => (
  <DevelopersBox>
    <Developer name="Felipe Matheus" image={Felipe} />
    <Developer name="Fernanda Baia" image={Fernanda} />
    <Developer name="Maria Ferrari" image={Maria} />
    <Developer name="Marcus Castro" image={Marcus} />
    <Developer name="Patrick Arruda" image={Patrick} />
  </DevelopersBox>
);

export default Developers;
