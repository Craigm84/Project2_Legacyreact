import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';



function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        // <div className="header">
        <div>
            {/* <img className="header_logo" src="https://pbs.twimg.com/media/ERfup7wWsAArWMk?format=jpg&name=small" /> */}

            {/* <div className="header_search">
                <input className="header_searchInput" type="text"></input>
                <SearchIcon className="header_searchIcon" />

            </div>
            <div className="header_nav">

                <Link to='/Login'>

                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>

                <Link to="/CartPage">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>


            </div> */}

        </div>
    )
}

export default Header
