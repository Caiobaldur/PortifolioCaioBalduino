import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--h-font);

  background: rgb(60,64,71);
  background: linear-gradient(90deg, rgba(60,64,71,0.8715861344537815) 0%, rgba(68,76,89,0.8015581232492998) 36%, rgba(42,161,139,1) 100%);

  opacity: ${({isVisible}) => isVisible ? 1 : 0};
  pointer-events: none;
  transition: .5s;
  
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    
  }
  
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }
  
  nav a span {
    color: ${({theme}) => theme.COLORS.GREEN_200};
  }

  ${({ isVisible  }) => isVisible && css`
  pointer-events: auto;
  transform: translateY(0rem);
  
  > nav {
    transform: scale(1);
  }

  `};


  `;