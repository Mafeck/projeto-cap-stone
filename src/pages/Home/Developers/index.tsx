import DeveloperCard from "../../../components/DeveloperCard";
import { DevelopersBox } from "./style";
import felipe from "../../../assets/felipe.png";
import fernanda from "../../../assets/fernanda.png";
import maria from "../../../assets/maria.png";
import marcus from "../../../assets/marcus.png";
import patrick from "../../../assets/patrick.png";

const links = {
  felipe: "https://www.linkedin.com/in/felipe-matheus-33b4711aa/",
  fernanda: "https://www.linkedin.com/in/maria-baia/",
  maria:
    "https://www.linkedin.com/in/maria-aparecida-guedes-ferrari-1b4a16163/",
  marcus: "https://www.linkedin.com/in/patrickgsda/",
  patrick: "https://www.linkedin.com/in/patrickgsda/",
};

const Developers = () => (
  <DevelopersBox>
    <DeveloperCard name="Felipe Matheus" image={felipe} link={links.felipe} />
    <DeveloperCard
      name="Fernanda Baia"
      image={fernanda}
      link={links.fernanda}
    />
    <DeveloperCard name="Maria Ferrari" image={maria} link={links.maria} />
    <DeveloperCard name="Marcus Castro" image={marcus} link={links.marcus} />
    <DeveloperCard name="Patrick Arruda" image={patrick} link={links.patrick} />
  </DevelopersBox>
);

export default Developers;
