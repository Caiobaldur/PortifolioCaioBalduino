import { Container, Name, Link, Menu } from "./styles";
import {RiMenu3Fill} from "react-icons/ri"

export function Header({ setMenuIsVisible }) {

  return (
    <Container>
        
          <Name>
            <h1>Caio Balduino Rafachino</h1>
          </Name>
            <Link>
              <ul>
                <li><a href=""><span>#</span>Home</a></li>
                <li><a href=""><span>#</span>Projetos</a></li>
                <li><a href=""><span>#</span>Sobre</a></li>
                <li><a href=""><span>#</span>Contato</a></li>
              </ul>
            </Link>
            <Menu>
              <RiMenu3Fill size={25} onClick={() => setMenuIsVisible(true)}/>
            </Menu>
            
    </Container>

    
  );
}

