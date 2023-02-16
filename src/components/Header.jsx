import { Container, Image } from "react-bootstrap"
import logo from "../assets/react.svg"


const Header = () => {
  return (
    <Container>
        <Image src={logo}></Image>
    </Container>
  )
}

export default Header
