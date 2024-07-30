import { useNavigate } from "react-router";
import { HeaderContainer, Option } from "./styles";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate('/');
    
    const element = document.getElementById(path);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  const headerOptions = [
    {
      title: "Projetos",
      path: "projects",
    },
    {
      title: "Experiência",
      path: "blog",
    },
    {
      title: "Contato",
      path: "contact",
    },
  ];

  return (
    <HeaderContainer>
      {headerOptions.map((option) => (
        <Option key={option.title} onClick={() => handleNavigation(option.path)}>
          {option.title}
        </Option>
      ))}
    </HeaderContainer>
  );
}
