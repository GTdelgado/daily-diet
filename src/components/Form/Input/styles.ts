import styled, { css } from "styled-components/native";

type InputStyleProps = {
    isActive?: boolean;
}

export const Container = styled.TextInput<InputStyleProps>`
    flex: 1;
    width: 100%;
    min-height: 48px;
    ${({ theme, isActive = false }) => css`
        border: 2px;
        border-color: ${isActive ? theme.COLORS.GRAY_500:theme.COLORS.GRAY_200};
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR}
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    border-radius: 6px;
    padding: 14px;
`