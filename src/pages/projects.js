import React from 'react';
import { Navigation } from '../components';
import '../styles/projects.css';

const Projects = (props) => {
    return (
        <React.Fragment>
            <div className='page'>
                <Navigation></Navigation>
                <div className='projects'>
                    <section>
                        <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                            <img
                                src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646268121/k2v3dbpcmsvm0gn9t2rk.png'
                                alt=''
                            />
                        </a>
                        <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                            Magfinder
                        </a>
                    </section>
                    <section>
                        <a href='https://nft-portfolio.netlify.app' target='_blank' rel='noreferrer'>
                            <img
                                src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646855269/qhheww5ix4cywykgqgqo.svg'
                                alt=''
                            />
                        </a>
                        <a href='https://nft-portfolio.netlify.app' target='_blank' rel='noreferrer'>
                            NFT Wallet Tracker
                        </a>
                    </section>
                    <section>
                        <a href='https://www.youtube.com/watch?v=9qJFNoTSZfY' target='_blank' rel='noreferrer'>
                            <img
                                src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646862254/qdllerjnb9h8wok7ouju.svg'
                                alt=''
                            />
                        </a>
                        <a href='https://www.youtube.com/watch?v=9qJFNoTSZfY' target='_blank' rel='noreferrer'>
                            VR Eye Exercises
                        </a>
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
