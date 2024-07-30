import Button from "../Button";
import { Container, Description, Title } from "./styles";
import CV from "./CV.pdf";

export default function Presentation() {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV_MIKAELI_FRONT_END";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Title>
        Olá, eu sou Mikaeli <br /> Desenvolvedora Front-end
      </Title>

      <Description>
        Iniciei minha trajetória profissional no agronegócio, mas ao longo do
        tempo, descobri minha paixão pela programação, o que me levou a fazer
        uma transição de carreira. Tenho uma formação técnica em Agropecuária,
        mas agora estou focada em me tornar uma Desenvolvedora Full Stack.
        Atualmente, já trabalho como desenvolvedora de software e tenho
        experiência em tecnologias como React.JS, Node.JS, JavaScript,
        TypeScript, Next.js, PostgreSQL, MongoDB, Docker, Linux, HTML, CSS e
        controle de versão Git. Estou empolgada para continuar aprendendo e
        aprimorando minhas habilidades de programação. Mal posso esperar para
        compartilhar meus projetos e contribuir para projetos futuros.
      </Description>

      <Button label="Saber mais" onClick={downloadPdf} />
    </Container>
  );
}
