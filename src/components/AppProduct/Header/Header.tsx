import { Container, Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar className="bg-body-tertiary border">
            <Container>
                <Navbar.Brand href="#home">Carga de productos</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
