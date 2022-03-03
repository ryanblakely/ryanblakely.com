import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { posts } from './posts';

function App() {
    useEffect(() => {}, []);

    const formatDate = (d) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        // let date = new Date(String(d));
        let date = new Date(`${d}T00:00:00`);

        console.log(date);
        // return date;
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className='Page'>
            <header>
                <Link to='/'>R</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
            </header>

            <div className='intro'>
                <h1>How to.</h1>
                <p>By Ryan Blakely</p>
                <div className='flex'>
                    <a href='https://github.com/b1akely'>GitHub</a>
                    <a href='https://www.youtube.com/channel/UCvN7iUxLLybOnfzNvEHEU4w'>YouTube</a>
                </div>
            </div>

            <main>
                {posts &&
                    posts.map((post) => (
                        <div className='post'>
                            <Link to={`/${post.url}`}>
                                <h2>{post.title}</h2>
                            </Link>
                            <span className='date'>{formatDate(post.date)}</span>
                            <p>{post.description}</p>
                        </div>
                    ))}
            </main>
        </div>
    );
}

export default App;
