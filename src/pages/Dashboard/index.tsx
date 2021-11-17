import HeaderDashBoard from "../../components/HeaderDashBoard";
import CardDashboard from "../../components/CardDashboard";
import imageRegisterClient from "../../assets/undraw_tweetstorm_re_n0rs 1.svg";
import { DashboardStyled } from "./style";
import imageListOfClient from "../../assets/Group 153.svg";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <HeaderDashBoard />
      <div className="cards">
        <CardDashboard
          route="/dashboard/register"
          title="Cadastrar Cliente"
          description="Cadastre 
                dados de seus clientes, de forma rápida e de qualquer 
                lugar."
          image={imageRegisterClient}
          background="var(--color-secondary-strong)"
          backgroundBall="var(--color-secondary)"
        />
        <CardDashboard
          route="/dashboard/people"
          title="Listar Clientes"
          description="Pode 
                ser editada com a remoção ou adição de outros usuários específicos."
          image={imageListOfClient}
          background="var(--black)"
          backgroundBall="var(--color-primary)"
        />
      </div>
      <Footer />
    </DashboardStyled>
  );
};

export default Dashboard;
