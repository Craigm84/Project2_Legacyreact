import { BrowserRouter as Router, Routes, Route, Link, useMatch, useResolvedPath } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import './Routing.css';
import Navbar from '../components/Navbar';

export default function Routing() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img className="site_logo" src="https://pbs.twimg.com/media/ERfup7wWsAArWMk?format=jpg&name=small" />
                ENCOM INTERNATIONAL
            </Link>
            <ul>
                <Link to='/Login'>

                    <div className="header_option">
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to='/Cart/get'>

                    <div className="header_option">
                        <span className="header_optionLineTwo">Baskets</span>
                    </div>
                </Link>

                <CustomerLink to="/CartPage">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </CustomerLink>
                <CustomerLink to="/ItemsPage">Items</CustomerLink>
                <Navbar />
            </ul>
        </nav>
    )
}

function CustomerLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return (

        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>

    )
}
