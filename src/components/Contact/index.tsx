import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Container, ContainerList, List } from "./styles";

export default function Contact() {
  const contactList = [
    {
      title: "Email",
      value: "mikaasampaio6@gmail.com",
      icon: <MdEmail fontSize={45} />,
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/mikaeli-pereira/",
      icon: <FaLinkedin />,
    },
    {
      title: "GitHub",
      value: "https://github.com/mikasampaio",
      icon: <FaGithub />,
    },
  ];
  
  return (
    <Container id="contact">
      <ContainerList>
        {contactList.map((contact) => (
          <List key={contact.title}>
            {contact.title === "Email" ? (
              <a href={`mailto:${contact.value}`}>{contact.icon}</a>
            ) : (
              <a href={contact.value}>{contact.icon}</a>
            )}
          </List>
        ))}
      </ContainerList>
      Copyright ©2030 All rights reserved
    </Container>
  );
}
