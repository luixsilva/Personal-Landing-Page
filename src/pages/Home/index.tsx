import * as S from "./index";
import Header from "../../components/Header/index.tsx";
import ImagePrincipal from "../../assets/WhatsApp Image 2024-10-27 at 13.58.16.jpeg";
import Circle from "../../components/Circle/index.tsx";

const HomeScreen = () => {
  return (
    <>
      <S.Container>
        <S.FixedHeader>
          <Header />
        </S.FixedHeader>
        <S.ContainerSection id="home">
          <S.ContainerText>
            <h1>I'M Luiz Silva</h1>
            <p>
              Desenvolvedor fullstack com uma paixão por criar soluções <br />
              eficientes e inovadoras.
            </p>
            <p>
              Tenho experiência em <strong> React</strong>,
              <strong> JavaScript</strong>,<strong> TypeScript </strong>e
              <strong> Java</strong>, com forte foco em construir interfaces
              dinâmicas e intuitivas para aplicações web e backend robusto.
              Sempre busco me atualizar com as melhores práticas de
              desenvolvimento e tecnologias emergentes, mantendo o usuário final
              como o centro das minhas soluções. Meu objetivo é contribuir para
              projetos que façam a diferença e que utilizem tecnologia para
              impactar positivamente a vida das pessoas. Fique à vontade para
              explorar meus projetos e entrar em contato!
            </p>
          </S.ContainerText>
          <Circle margin_rigth={55} color="#8F43EE" />
          <Circle margin_rigth={65} margin_top={2} color="#413543" />
          <S.ContainerImage>
            <S.Image src={ImagePrincipal} />
          </S.ContainerImage>
        </S.ContainerSection>
      </S.Container>
      <S.Container>
        <S.ContainerSection id="projects">
          <S.ContainerText>
            <h1>TESTE</h1>
          </S.ContainerText>
        </S.ContainerSection>
      </S.Container>
    </>
  );
};
export default HomeScreen;
