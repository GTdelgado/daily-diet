import { PressableProps } from "react-native";
import { Container, Icon, Title } from "./styles";
import { useState } from "react";

type Props = PressableProps & {
  title: string;
  withIcon?: boolean;
}

export function Button({ title, withIcon = false, ...rest }: Props) {
  const [pressed, setPressed] = useState(false);

  function handlePressOut() {
    setPressed(false);
  }

  function handlePress() {
    setPressed(true);
  }

  return (
    <Container
      onPressIn={handlePress}
      onPressOut={handlePressOut}
      isPressed={pressed}
      {...rest}
    >
      {withIcon ? <Icon /> : null}
      <Title>
        {title}
      </Title>
    </Container>
  );
};