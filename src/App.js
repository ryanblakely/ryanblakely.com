import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './components';
import { posts } from './posts/database';
import './App.css';

function App() {
    useEffect(() => {}, []);

    const formatDate = (d) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date(`${d}T00:00:00`);
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className='page'>
            <Navigation></Navigation>

            <header>
                <h1>How To.</h1>
                <p>By Ryan Blakely</p>
                <menu>
                    <li>
                        <a href='https://github.com/ryanblakely' target='_blank' rel='noreferrer'>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.youtube.com/channel/UCvN7iUxLLybOnfzNvEHEU4w'
                            target='_blank'
                            rel='noreferrer'
                        >
                            YouTube
                        </a>
                    </li>
                </menu>
            </header>

            {posts &&
                posts.map((post, index) => (
                    <article key={index}>
                        <Link to={`/${post.url}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <small>{formatDate(post.date)}</small>
                        <p>{post.description}</p>
                    </article>
                ))}
        </div>
    );
}

export default App;
