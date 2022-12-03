import { Link } from "react-router-dom"

const AppbarLink = ({ to, text }) => (
    <Link to={to || '/'} className='nav-link nav-underline position-relative'>{text || 'Menu'}</Link>
)

export default AppbarLink;