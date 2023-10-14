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

  padding: 0 20rem;

  @media (max-width: 1024px) {
    padding: 0 12rem;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`

export const Name = styled.div`
  white-space: nowrap;
`

export const Link = styled.nav`
  > ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.8rem;
    flex-flow: row nowrap;
  }
  
  > ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: .5s ease-in-out;
  }

  > ul li span {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }

  ul li a:hover {
    color: #fff;
    transition: .5s ease-in-out;
  }

  @media (max-width: 768px) {
    > ul {
      display: none;
      flex-flow: column nowrap;
      background-color: #282C33;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 30rem;
      padding-left: 2rem;
      padding-top: 3.5rem;
      border-left: #2AA18B .1rem solid;
    }


  }
`;

export const Menu = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    border: none;
    background: none;
    > svg{
      color: ${({theme}) => theme.COLORS.GREEN_200};
      font-size: 3.5rem;
    }
  }
`;