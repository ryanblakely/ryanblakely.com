import React from 'react';
import { Link } from 'react-router-dom';
// import { Header, NewsletterSignup, Footer, BottomNav } from '../components';

const About = (props) => {
    return (
        <React.Fragment>
            <div className='Page'>
                <header>
                    <Link to='/'>R</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                </header>

                <main>
                    <div>
                        <p>Hi 👋.</p>
                        <p>
                            I’m a software developer. When I learn something new, I like to write about it. This helps
                            me remember how to do things in the future, and anyone else looking to learn.
                        </p>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default About;
