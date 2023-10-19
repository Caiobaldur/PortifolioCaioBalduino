import { Container } from "./styles";
import  {Header}  from "../../components/Header"

export function Home() {
  

  return (
    <Container>
        <Header/>
        <div className="introducao">
            <img src="../src/assets/profilepic.svg" alt="Imagem de Caio" />
            <div>
              <h1>Desenvolvedor<br></br>Front-End</h1>
              <p>Localizado em Igarapava-SP 🚩</p>
            </div>
        </div>
      </Container>
  
  )
}