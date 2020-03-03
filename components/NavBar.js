import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">150 jaar Sente</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/kermis">Kermis</Nav.Link>
                <Nav.Link href="/parochie">Parochie</Nav.Link>
                <Nav.Link href="/wandeling">Wandeling</Nav.Link>
                <Nav.Link href="/vlag">Vlag</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;