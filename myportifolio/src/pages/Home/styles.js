import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #282C33;
  color: #fff;
  font-family: var(--h-font);

  .introducao {
    max-width: 120rem;
    display: grid;
    margin: 0 auto;
    padding: 10rem ;
    grid-template-columns: 1fr 2fr;
    gap: 10rem;
    align-items: center;
  }

  .introducao img{
    max-width: 100%;
  }

  .introducao h1{
    font-size: 8rem;
    line-height: 8rem;
    margin-bottom: 3rem;
    position: relative;
  }

  .introducao h1::before{
    content: '';
    display: block;
    width: 13rem;
    height: 10rem;
    background: url("../src/assets/detalhe.svg") no-repeat center;
    position: absolute;
    top: -10px;
    left: -40px;
    z-index: -1;
  }

  @media (max-width:1024px){
    .introducao h1{
      font-size: 5rem;
      line-height: 5rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width:800px){
    .introducao {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .introducao h1{
      font-size: 3rem;
      line-height: 3rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width:425px){
    .introducao {
      grid-template-columns: 1fr;
    }

    .introducao img {
      display: none;
    }

  }

`;