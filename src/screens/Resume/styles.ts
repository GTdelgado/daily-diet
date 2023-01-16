import { ArrowLeft } from 'phosphor-react-native';
import { Icon } from './../../components/Button/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


type Props = {
    percentage: number;
}

type InDietProps = {
  inDiet: boolean;
}
  

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, percentage }) => percentage < 50 ? theme.COLORS.RED_100 : theme.COLORS.GREEN_100};
    align-items: center;
`
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

export const ExpandIcon = styled(ArrowLeft).attrs<Props>(({ theme, percentage }) => ({
  size: 24,
  color: percentage < 50 ? theme.COLORS.RED_500 : theme.COLORS.GREEN_500,
}))<Props>`
  position: absolute;
  top: 40px;
  left: 0px;
  margin: 8px;
`;

export const ResumeContainer = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    align-items: center;
    padding: 33px 24px;
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