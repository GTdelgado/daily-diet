import { Container, Hour, InDiet, Title } from "./styles";

type Props = {
  hour: string;
  title: string;
  isInDiet: boolean;
}

export function Card({ hour, isInDiet, title }: Props) {
  return (
    <Container>

      <Hour>{hour}</Hour>
      <Title>{title}</Title>
      <InDiet inDiet={isInDiet}/>
    </Container>
  );
}