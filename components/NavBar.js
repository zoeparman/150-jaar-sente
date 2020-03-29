import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => (
    <Navbar bg={"light"} expand="lg">
        <Navbar.Brand href="/">
            <img
                src="/resources/logo.svg"
                width="57"
                height="30"
                className="d-inline-block align-top"
                alt="150 Jaar Sente"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/wandeling">Knooppuntenwandeling</Nav.Link>
                <Nav.Link href="/kermis">Sente Kermis</Nav.Link>
                <NavDropdown id={"basic-nav-dropdown"} title={"De Parochie"}>
                    <NavDropdown.Item href={"/parochie"}>150 Jaar Parochie Sente</NavDropdown.Item>
                    <NavDropdown.Item href={"/parochie#programma"}>Jaarprogramma</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/vlag">Bevlag je huizen!</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;

/*
        <style jsx global>{`
        .navbar,
.navbar-default {
    background-image: none !important;
background-color: rgba(255,255,255,.7);
}
`}</style>
 */