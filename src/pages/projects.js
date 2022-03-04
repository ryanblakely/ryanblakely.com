import React from 'react';
import { Navigation } from '../components';
import '../styles/projects.css';

const Projects = (props) => {
    return (
        <React.Fragment>
            <div className='page'>
                <Navigation></Navigation>
                <div className='projects'>
                    {/* <section>
                        <img
                            src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646321851/szbx8ulg3ehhabdkh5yu.png'
                            alt=''
                        />
                        <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                            Basix Watch Face
                        </a>
                    </section> */}
                    <section>
                        <img
                            src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646268121/k2v3dbpcmsvm0gn9t2rk.png'
                            alt=''
                        />
                        <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                            Magfinder
                        </a>
                    </section>
                    {/* <section>
                        <img
                            src='https://res.cloudinary.com/dccqw6mij/image/upload/v1646277636/yzxaaewatswqrzhot4qk.png'
                            alt=''
                        />
                        <a href='https://www.magfinder.com' target='_blank' rel='noreferrer'>
                            VR Eye Training
                        </a>
                    </section> */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
