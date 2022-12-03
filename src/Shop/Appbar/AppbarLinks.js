import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AppbarLink from './AppbarLink';
import AppbarSearch from './AppbarSearch';
import AppbarUser from './AppbarUser';

const AppbarLinks = () => {
    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <AppbarLink to='/' text='Nowe' />
                <AppbarLink to='/' text='Promocje' />
                <AppbarLink to='/' text='Produkty' />
                <AppbarSearch />
            </Nav>
            <AppbarUser />
        </Navbar.Collapse>
    )
}

export default AppbarLinks;