import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import search from '../../icons/search.svg';

const AppbarSearch = () => {
    return (
        <InputGroup className="ms-5 align-items-center">
            <div className="search">
                <Form.Control className="search-input" type='text' placeholder="Wyszukaj" aria-describedby="basic-addon2" />
            </div>
            <Button variant="" id="button-addon2" className="search-btn">
                <img src='./static/media/search.d25cce2a58de2c524ca94a3a853c6239.svg' className='search-img' />
            </Button>
        </InputGroup>
    )
}

export default AppbarSearch;