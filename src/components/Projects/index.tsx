import { useEffect, useState } from "react";
import { apiReadme } from "../../services/api";
import { Project } from "../../types/Project";
import {
  Card,
  CardContent,
  Container,
  ContainerCard,
  Text,
  Image,
} from "./styles";
import ReactLoading from "react-loading";
import { displayImage } from "../../utils/displayImage";
import Button from "../Button";
import { Repository } from "../../contexts/Repository";

export default function Projects() {
  const [formattedProjects, setFormattedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const { projects } = Repository();

  const extractDescription = (readmeContent: string) => {
    const descriptionMatch = readmeContent.match(/# Descrição([\s\S]*?)(#|$)/);
    if (descriptionMatch) {
      return descriptionMatch[1].trim();
    }
    return "Descrição não encontrada.";
  };

  const getReadmes = async (repository: string) => {
    try {
      setLoading(true);
      const response = await apiReadme.get(`/${repository}/readme`);
      const description = extractDescription(response.data);

      return description;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const formattedProject = await Promise.all(
        projects.map(async (project) => {
          try {
            setLoading(true);
            const readme = (await getReadmes(project.name)) as string;

            return {
              ...project,
              id: project.id,
              url: project.url,
              name: project.name,
              title: project.description,
              description: readme,
            };
          } catch (err) {
            console.log(err);
            return {
              ...project,
              id: project.id,
              url: project.url,
              name: project.name,
              title: project.description,
              description: "Descrição não encontrada.",
            };
          } finally {
            setLoading(false);
          }
        })
      );

      setFormattedProjects(formattedProject);
    };

    fetchData();
  }, [projects]);

  return (
    <Container id="projects">
      <Text>Projetos</Text>

      <ContainerCard>
        {!loading ? (
          formattedProjects.length &&
          formattedProjects.map((project) => {
            return (
              <Card key={project.id}>
                <Image src={displayImage(project.name)} alt="" />

                <CardContent>
                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div>
                    <Button
                      label="Repositório"
                      link={project.html_url}
                    ></Button>
                    {project.homepage && (
                      <Button label="Site" link={project.homepage} />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <ReactLoading type="bubbles" color={"#21243d"} width={60} />
        )}
      </ContainerCard>
    </Container>
  );
}
