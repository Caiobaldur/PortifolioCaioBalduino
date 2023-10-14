import { useEffect } from "react";
import { Container } from "./styles";
import { IoClose } from "react-icons/io5"


export function MenuMobile({menuIsVisible, setMenuIsVisible}) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <nav>
       <a href=""><span>#</span>Home</a>
       <a href=""><span>#</span>Projetos</a>
       <a href=""><span>#</span>Sobre</a>
       <a href=""><span>#</span>Contato</a>
      </nav>
    </Container>

  );
}