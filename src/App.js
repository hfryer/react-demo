import logo from './logo.svg';
import './App.css';
import {HashRouter, Link, Route} from "react-router-dom";

function App() {
    return (
        <HashRouter basename='/'>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Here is my example react website stub.
                    </p>
                    <ul>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </header>
                <Route path="/about" component={About}/>
            </div>
        </HashRouter>
    );
}

const About = () => <div><h2>About</h2></div>

export default App;
