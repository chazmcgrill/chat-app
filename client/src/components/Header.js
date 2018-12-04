import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const Header = () => (
    <header>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/signout">Signout</Link>
    </header>
);

export default Header;