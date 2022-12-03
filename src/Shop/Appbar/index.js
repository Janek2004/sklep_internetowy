import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AppbarLinks from './AppbarLinks'
import './Appbar.css';

function Appbar() {
    return (
        <Navbar bg="light" expand="lg" className='appbar-bg'>
            <Container fluid>
                <Navbar.Brand href="#home" className='fw-semibold'>Sklep z butami</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <AppbarLinks />
            </Container>
        </Navbar>
    );
}

export default Appbar;