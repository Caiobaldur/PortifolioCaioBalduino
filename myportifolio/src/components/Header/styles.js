import styled from "styled-components"



export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  border-bottom: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN_200};
  font-family: var(--h-font);
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 20rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  
`;

export const Name = styled.div`
  font-size: 1.3rem;
`;

export const Link = styled.nav`
  > nav {
    display: flex;
    gap: .5rem;
    list-style: none;
    font-size: 2rem;
    justify-content: center;
  }
  
  > nav li a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: .5s ease-in-out;
    padding: 1rem 1.2rem;
    display: block;
  }

  > nav li span {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }

  > nav li a:hover {
    color: #fff;
    transition: .5s ease-in-out;
  }




`;
