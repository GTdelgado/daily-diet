import { useNavigation } from "@react-navigation/native";
import { Container, Description, Percentage, ExpandIcon } from "./styles";

type Props = {
  percentage: number;
};

export function Percent({ percentage }: Props) {
  const {navigate} = useNavigation();
  function handleOnPress() {
    navigate("resume");
  };
  return (
    <Container percentage={percentage} onPress={handleOnPress}>
      <Percentage>{percentage}%</Percentage>
      <Description>das refeições dentro da dieta</Description>
      <ExpandIcon percentage={percentage}/>
    </Container>
  );
}