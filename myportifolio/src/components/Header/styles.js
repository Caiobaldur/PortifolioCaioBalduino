import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  height: 6.5rem;
  width: 100%;
  border-bottom: .1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.GREEN_200};
`;