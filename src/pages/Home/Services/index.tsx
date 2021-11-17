import CardHome from "../../../components/CardHome";
import { ServicesBox, ImageBox } from "./style";
import Clients from "../../../assets/clientes.svg";
import Appointment from "../../../assets/agenda.svg";
import DesktopImage from "./DesktopImage";
import Judge from "../../../assets/judge.svg";

const Services = () => (
  <ServicesBox>
    <ImageBox>
      <h2>Serviços</h2>
      <div className='desktopImage'>
        <DesktopImage />
      </div>
    </ImageBox>
    <div>
      <CardHome
        title="Clientes"
        image={Clients}
        description="Cadastre, edite e delete informações de seus clientes.
"
      />
      <CardHome
        title="Processos"
        image={Judge}
        description="Acompanhe seus processos, nunca mais perca nenhum prazo!

"
      />
      <CardHome
        title="Agenda"
        image={Appointment}
        isLast
        description="Mantenha-se organizado, centralize seus compromissos e demais informações.

"
      />
    </div>
  </ServicesBox>
);

export default Services;
