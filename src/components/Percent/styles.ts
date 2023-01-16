import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

type Props = {
  percentage: number;
}

export const Container = styled.Pressable<Props>`
    flex-direction: column;
    margin-top: 33px;
    margin-bottom: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, percentage }) => percentage < 50 ? theme.COLORS.RED_100 : theme.COLORS.GREEN_100};
    border-radius: 4px;
    padding: 20px 16px;
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const ExpandIcon = styled(ArrowUpRight).attrs<Props>(({ theme, percentage }) => ({
  size: 24,
  color: percentage < 50 ? theme.COLORS.RED_500 : theme.COLORS.GREEN_500,
}))<Props>`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 8px;
`;