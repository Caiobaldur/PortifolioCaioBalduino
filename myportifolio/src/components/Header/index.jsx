// import { useState } from "react";
import { Container, Name, Link } from "./styles";
// import { FaBars, FaX } from 'react-icons/fa6'


export function Header (){
    

  return (
    <Container>
        
          <Name>
            <h1>Caio Balduino Rafachino</h1>
          </Name>
            <Link>
              <nav>
                <li><a href=""><span>#</span>Home</a></li>
                <li><a href=""><span>#</span>Projetos</a></li>
                <li><a href=""><span>#</span>Sobre</a></li>
                <li><a href=""><span>#</span>Contato</a></li>
              </nav>
            </Link>
            
            
    </Container>

    
  );
}