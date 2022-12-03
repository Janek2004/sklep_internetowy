import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const AppbarUser = () => {

    return (
        <Nav>
            <NavDropdown title="Jan Kowalski" id="user-dropdown" align="end">
                <NavDropdown.Item href="/koszyk">Koszyk</NavDropdown.Item>
                <NavDropdown.Item href="/konto">Moje konto</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ustawienia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Wyloguj</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )

}

export default AppbarUser;