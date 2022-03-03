import React from 'react';
import { Navigation } from '../components';

const About = (props) => {
    return (
        <React.Fragment>
            <div className='page'>
                <Navigation></Navigation>

                <main>
                    <p>Hi 👋.</p>
                    <p>
                        I’m a software developer. When I learn something new, I like to write about it. This helps me
                        remember how to do things in the future, and anyone else looking to learn.
                    </p>
                </main>
            </div>
        </React.Fragment>
    );
};

export default About;
