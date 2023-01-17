import { useNavigation } from "@react-navigation/native";
import { Container, GoBackIcon, GoBackPressable, ResumeContainer } from "./styles";

type Props = {
  children: React.ReactNode,
  percentage?: number,
}

function Layout({ children, percentage }:Props) {
  return (
    <Container percentage={percentage}>
      {children}
    </Container>
  );
};

function GoBackButton({percentage}:Omit<Props, 'children'>) {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('home');
  }
  return (
    <GoBackPressable onPress={handleGoBack}>
      <GoBackIcon percentage={percentage} />
    </GoBackPressable>
  )

}

function Resume({children}: Omit<Props, 'percentage'>) {
  return (
    <ResumeContainer>
      {children}
    </ResumeContainer>
  )
}


export { Layout, Resume, GoBackButton }
