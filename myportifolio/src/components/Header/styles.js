import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  height: 6.5rem;
  width: 100%;
  border-bottom: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN_200};
  font-family: var(--h-font);
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30rem;
`

export const Name = styled.div`
  display: flex;
`

export const Link = styled.div`
  > ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.6rem;
  }

`;
