import styled, { css } from "styled-components/native";

export type CardStyleProps = {
  inDiet?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 49px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;


export const Hour = styled.Text`
   ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.XS}px;
      color: ${theme.COLORS.GRAY_700};
   `};
   margin: 16.5px 12px;
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_600};
      border-left-width: 1px;
      border-left-color: ${theme.COLORS.GRAY_400};
      padding: 0px 12px;
   `};
`;

export const InDiet = styled.View<CardStyleProps>`
  ${({ theme, inDiet = false }) => css`
      height: 14px;
      width: 14px;
      border-radius: 7px;
      margin: 17.5px;
      background-color: ${inDiet ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};
   `};
`;