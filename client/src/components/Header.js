import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

const Header = (props) => (
    <header>
        <Link to="/">Home</Link>
        {props.authenticated ? (
            <Fragment>
                <Link to="/chat">Chat</Link>
                <Link to="/signout">Signout</Link>
            </Fragment>
        ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin" style={{ marginLeft: '10px' }}>Sign In</Link>
            </div>
        )}
    </header>
);

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);