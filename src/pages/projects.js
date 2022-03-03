import React from 'react';
import { Navigation } from '../components';

const Projects = (props) => {
    return (
        <React.Fragment>
            <div className='Page'>
                <Navigation></Navigation>

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
                        src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646277636/yzxaaewatswqrzhot4qk.png'
                        alt=''
                    />
                    <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                        <h2>VR Eye Training</h2>
                    </a>

                    <p>C</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
