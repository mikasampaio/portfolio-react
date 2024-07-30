import {
  Card,
  Container,
  ContainerCard,
  CreatedAt,
  Description,
  Text,
  Title,
} from "./styles";

export default function Blog() {
  const publication = [
    {
      title: "Desenvolvedora Front-end",
      createdAt: "Nov 2023 a atual",
      about: "SharkDev",
      description:
        "Experiência com desenvolvimento em React, TypeScript, Next.js, Tailwind e integração com API's. Além disso, contém participação ativamente em reuniões para garantir o alinhamento contínuo com os objetivos da equipe.",
    },
    {
      title: "Desenvolvedora Front-end",
      createdAt: "Jun 2023 a Nov 2023",
      about: "Redgtech Automação",
      description:
        "Experiência no desenvolvimento Front-end utilizando HTML, CSS, JavaScript e React. Além disso, contém conhecimentos com Docker e docker-compose",
    },
  ];

  return (
    <Container id="blog">
      <Text>Experiência</Text>
      <ContainerCard>
        {publication.length &&
          publication.map((post, index) => (
            <Card key={index}>
              <Title>{post.title}</Title>

              <CreatedAt>
                <span>{post.createdAt}</span>
                <span>{post.about}</span>
              </CreatedAt>

              <Description>{post.description}</Description>
            </Card>
          ))}
      </ContainerCard>
    </Container>
  );
}
