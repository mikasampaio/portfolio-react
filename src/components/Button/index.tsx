import { KnowMore } from "./styles";

interface ButtonProps {
  label: string;
  link?: string;
  onClick?: () => void;
}

export default function Button({ label, link, onClick }: ButtonProps) {
  return (
    <KnowMore onClick={onClick} href={link}>
      {label}
    </KnowMore>
  );
}
