import { Container } from "./styles";
import { Header } from "../../components/Header"
import { MenuMobile } from "../../components/MenuMobile";
import { useState } from "react";

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    
    <>
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
      <Container>
        <Header setMenuIsVisible={setMenuIsVisible}/>
      </Container>
    </>
  )
}