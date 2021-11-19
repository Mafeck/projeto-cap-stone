import Header from "../../components/Header";
import { TitleBox, AboutUsBox } from "./style";
import Services from "./Services";
import Developers from "./Developers";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <TitleBox>
        <div className="content">
          <h1>Planejamento jurídico empresarial</h1>
          <span id="nossosServiços">
            O planejamento jurídico empresarial é a elaboração de um plano de
            implantação da empresa
          </span>
        </div>
      </TitleBox>
      <Services/>
      <AboutUsBox>
        <div className="content">
          <h1>Quem somos?</h1>
          <p>
          Somos os melhores no nosso segmento, e é tudo graças aos relacionamentos incríveis que formamos com nossos clientes. Ao contrário dos nossos 
          concorrentes, somos dedicados ao desenvolvimento de uma conexão pessoal com cada um dos nossos clientes. Para isso, prestamos serviços de qualidade e 
          estamos à disposição 24 horas por dia, 7 dias por semana. Entre em contato conosco quando estiver pronto para saber mais. Teremos o prazer de conhecê-lo!
          </p>
        </div>
      </AboutUsBox>
      <Developers />
      <Footer />
    </div>
  );
};

export default Home;
