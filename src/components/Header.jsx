import { Container, Image } from "react-bootstrap"
import logo from "../assets/react.svg"


const Header = () => {
  return (
    <Container >
        <Image src={logo} width="250px"></Image>
    </Container>
  )
}

export default Header
