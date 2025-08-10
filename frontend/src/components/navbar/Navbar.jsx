import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../assets/dropdown_logo_menu.png';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'> 
            <div className="nav_logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p> 
                <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
                    <li onClick={() => setMenu("men")}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu === "men" ? <hr /> : null}</li>
                    <li onClick={() => setMenu('women')}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu === "women" ? <hr /> : null}</li>
                    <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
                    <li onClick={() => setMenu('profile')}><Link style={{ textDecoration: 'none' }} to='/profile'>Profile</Link>{menu === "profile" ? <hr /> : null}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
