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
          <span>
            O planejamento jurídico empresarial é a elaboração de um plano de
            implantação da empresa
          </span>
        </div>
      </TitleBox>
      <Services/>
      <AboutUsBox>
        <div className="content">
          <h1 id="quemSomos">Quem somos?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </AboutUsBox>
      <Developers />
      <Footer />
    </div>
  );
};

export default Home;
