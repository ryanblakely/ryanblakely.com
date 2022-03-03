import React from 'react';
import { Link } from 'react-router-dom';
// import { Header, NewsletterSignup, Footer, BottomNav } from '../components';

const Navigation = (props) => {
    return (
        <nav>
            <Link to='/'>R</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Navigation;
