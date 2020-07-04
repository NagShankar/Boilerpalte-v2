import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "./../actions/auth";

//this is Header component with header HTML tag
export const Header = ({ startLogout }) => (
<header className="header">
   <div className="content-container">
        <div className="header__content">
            <Link to="/dashboard" className="header__title"><h1>Boilerplate</h1> </Link>
            <button className="button-link-modify" onClick={startLogout}>Log Out</button>
         </div>
    </div>
</header>
);

export default connect(undefined,{ startLogout })(Header); 

