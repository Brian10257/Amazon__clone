import React from 'react';
import './Header.css';
import amazon_logo from './img/amazon.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();
    const login = () =>{
        if (user){
            auth.signOut()
        }
    }
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img className="header__logo" src={amazon_logo} alt="AMAZON_LOGO"/>
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 Links */}
            <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__OptionLineOne">Hello {user?.email}</span>
                        <span className="header__OptionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__OptionLineOne">Returns</span>
                    <span className="header__OptionLineTwo">& Order</span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__OptionLineOne">Your</span>
                    <span className="header__OptionLineTwo">Prime</span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to="/checkout" className="header__link">
                <div className="header__OptionBasket">
                    {/* Shopping Basket Icon */}
                    <ShoppingBasketIcon/>
                    {/* Number of items in the Basket */}
                        <span className="header__OptionLineTwo header__BasketCount">{basket?.length}</span>
                </div>
            </Link>
            </div>
            {/* Basket icon with number */}
        </nav>
    )
};

export default Header;
