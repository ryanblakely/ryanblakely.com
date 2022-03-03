import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className='Page'>
            <header>
                <Link to='/'>R</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
            </header>

            <div>
                <h1>How to.</h1>
                <p>By Ryan Blakely</p>
                <div className='flex'>
                    <a href=''>GitHub</a>
                    <a href=''>YouTube</a>
                </div>
            </div>

            <main>
                <div className='post'>
                    <Link to='/'>
                        <h2>Getting Started With Monkey C and VSCode</h2>
                    </Link>
                    <span className='date'>March 1, 2022</span>
                    <p>
                        Ready to build your own watchface for your Garmin watch? The first step is to set up your
                        development environment. This involves setting up the Garmin SDK and pairing it with VSCode.
                        I’ll walk you through each step aso you can start building your own Garmin apps.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
