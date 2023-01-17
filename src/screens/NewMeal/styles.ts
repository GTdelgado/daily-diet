import styled, { css } from "styled-components/native";


export const FormContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin-bottom: 12px;
`;

export const NewText = styled.Text`
${({ theme }) => css`
   font-family: ${theme.FONT_FAMILY.BOLD};
   font-size: ${theme.FONT_SIZE.LG}px;
   color: ${theme.COLORS.GRAY_700};
`};
  padding-top: 19px;
  padding-bottom: 24px;
`;

export const FormFieldText = styled.Text`
${({ theme }) => css`
   font-family: ${theme.FONT_FAMILY.BOLD};
   font-size: ${theme.FONT_SIZE.SM}px;
   color: ${theme.COLORS.GRAY_600};
`};
  padding-bottom: 4px;
  align-self: flex-start;
  `;

export const TimeSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
  `;

export const TimeLabel = styled.View`
  width: 49%;
  `