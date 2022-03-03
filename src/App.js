import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './components';
import { posts } from './posts';
import './App.css';

function App() {
    useEffect(() => {}, []);

    const formatDate = (d) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date(`${d}T00:00:00`);
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className='Page'>
            <Navigation></Navigation>

            <header>
                <h1>How to.</h1>
                <p>By Ryan Blakely</p>
                <menu>
                    <li>
                        <a href='https://github.com/b1akely' target='_blank' rel='noreferrer'>
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

            <main>
                {posts &&
                    posts.map((post) => (
                        <article>
                            <Link to={`/${post.url}`}>
                                <h2>{post.title}</h2>
                            </Link>
                            <small>{formatDate(post.date)}</small>
                            <p>{post.description}</p>
                        </article>
                    ))}
            </main>
        </div>
    );
}

export default App;
