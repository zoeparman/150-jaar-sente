import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
    <Navbar  expand="lg">
        <Navbar.Brand href="/">
            <img
                src="resources/logo.svg"
                width="57"
                height="30"
                className="d-inline-block align-top"
                alt="150 Jaar Sente"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/kermis">Kermis</Nav.Link>
                <Nav.Link href="/parochie">Parochie</Nav.Link>
                <Nav.Link href="/wandeling">Wandeling</Nav.Link>
                <Nav.Link href="/vlag">Vlag</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <style jsx global>{`
        .navbar,
.navbar-default {
    background-image: none !important; /* override background image gradient w/ flat color */
    background-color: rgba(255,255,255,.7);
}
        `}</style>
    </Navbar>
);

export default NavBar;