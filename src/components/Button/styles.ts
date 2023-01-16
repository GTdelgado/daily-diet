import styled, { css } from "styled-components/native";
import { Plus } from 'phosphor-react-native'
export type ButtonStyleProps = {
  isPressed?: boolean;
}

export const Container = styled.Pressable<ButtonStyleProps>`
  width: 100%;
  background-color: ${({ theme, isPressed }) => isPressed ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE
}))`
  margin-right: 15px;
`;