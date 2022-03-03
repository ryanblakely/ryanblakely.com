import React from 'react';
import { Link } from 'react-router-dom';
// import { Header, NewsletterSignup, Footer, BottomNav } from '../components';

const Projects = (props) => {
    return (
        <React.Fragment>
            <div className='Page'>
                <header>
                    <Link to='/'>R</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                </header>

                <main>
                    <div className='projects'>
                        <div className='project'>
                            <img
                                src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646268121/k2v3dbpcmsvm0gn9t2rk.png'
                                alt=''
                            />
                            <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                                <h2>Magfinder</h2>
                            </a>

                            <p>React, Python</p>
                        </div>
                        <div className='project'>
                            <img
                                src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646268121/k2v3dbpcmsvm0gn9t2rk.png'
                                alt=''
                            />
                            <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                                <h2>Watch Face</h2>
                            </a>

                            <p>Monkey C</p>
                        </div>
                        <div className='project'>
                            <img
                                src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646268121/k2v3dbpcmsvm0gn9t2rk.png'
                                alt=''
                            />
                            <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                                <h2>VR Eye Training</h2>
                            </a>

                            <p>C</p>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Projects;
