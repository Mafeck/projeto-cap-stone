import CardHome from "../../../components/CardHome";
import { ServicesBox } from "./style";
import Clients from "../../../assets/clientes.svg";
import Appointment from "../../../assets/agenda.svg";
// import Process from "../../../assets/processos.svg";

const Services = () => (
  <ServicesBox>
    <h2>Serviços</h2>
    <CardHome
      title="Clientes"
      image={Clients}
      description="Cadastre, edite e delete informações de seus clientes.
"
    />
    <CardHome
      title="Processos"
      // to do: mudar imagem
      image={Clients}
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
  </ServicesBox>
);

export default Services;
