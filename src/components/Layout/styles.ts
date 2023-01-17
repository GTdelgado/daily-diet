import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


type Props = {
  percentage?: number;
}


export const Container = styled(SafeAreaView) <Props>`
    flex: 1;
    background-color: ${({ theme, percentage }) => percentage ?
    (percentage < 50 ? theme.COLORS.RED_100 : theme.COLORS.GREEN_100) : theme.COLORS.GRAY_200};
    align-items: center;
`

export const GoBackPressable = styled.Pressable`
  position: absolute;
  top: 40px;
  left: 0px;
  margin: 8px;
`;

export const GoBackIcon = styled(ArrowLeft).attrs<Props>(({ theme, percentage }) => ({
  size: 24,
  color: percentage ? (percentage < 50 ? theme.COLORS.RED_500 : theme.COLORS.GREEN_500) : theme.COLORS.GRAY_600,
})) <Props>`
`;

export const ResumeContainer = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    align-items: center;
    padding: 33px 24px;
`;