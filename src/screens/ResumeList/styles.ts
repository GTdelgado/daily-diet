import styled, { css } from "styled-components/native";

type InDietProps = {
  inDiet: boolean;
}
  
export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-top: 30px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-bottom: 34px;
`;


export const GreaterText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-top: 16px;
`;

export const MediunText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 23px;
`;

export const SmallText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  text-align: center;
  padding: 8px 16px 16px 16px;
`;
export const Sequence = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    width: 100%;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
`

export const InDietContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InDiet = styled.View<InDietProps>`
    width: 48%;
    background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
    align-items: center;
    border-radius: 8px;
    justify-content: center;
`