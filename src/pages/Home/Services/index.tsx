import CardHome from "../../../components/CardHome";
import { ServicesBox, Content, BoxWidth } from "./style";
import Clients from "../../../assets/clientes.svg";
import Appointment from "../../../assets/agenda.svg";
import DesktopImage from "./DesktopImage";
// import Process from "../../../assets/processos.svg";

const isDesktop = window.innerWidth > 769;

const Services = () => (
  <ServicesBox>
    <div style={{ marginRight: "15vw" }}>
      <h2>Serviços</h2>
      {isDesktop && <DesktopImage />}
    </div>
    <div>
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
    </div>
  </ServicesBox>
);

// const Services = () => (
//   <ServicesBox>
//     <BoxWidth>
//       <h2>Serviços</h2>
//       <Content>
//         {isDesktop && <DesktopImage />}
//         <div>
//           <CardHome
//             title="Clientes"
//             image={Clients}
//             description="Cadastre, edite e delete informações de seus clientes.
// "
//           />
//           <CardHome
//             title="Processos"
//             // to do: mudar imagem
//             image={Clients}
//             description="Acompanhe seus processos, nunca mais perca nenhum prazo!

// "
//           />
//           <CardHome
//             title="Agenda"
//             image={Appointment}
//             isLast
//             description="Mantenha-se organizado, centralize seus compromissos e demais informações.

// "
//           />
//         </div>
//       </Content>
//     </BoxWidth>
//   </ServicesBox>
// );

export default Services;
