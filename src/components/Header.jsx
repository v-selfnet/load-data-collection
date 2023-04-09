import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contextapi">Context API</Link>
            <Link to="/loader">Loader</Link>
            <Link to="/useeffect">Use Effect</Link>
            <Link to="/axios">Axios</Link>
        </nav>
    );
};

export default Header;