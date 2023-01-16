import styled from "styled-components/native"

export const Contaier = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`

export const UserPhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`