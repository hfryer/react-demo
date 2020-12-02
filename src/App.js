import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/projects'>
                <Projects/>
            </Route>
            <Route path='/'>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Here is my example react website stub.
                        </p>
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                        </ul>
                    </header>
                </div>
            </Route>
        </Switch>
    );
}

const About = () => <div><h2>About</h2></div>
const Projects = () => <div><h2>Projects</h2></div>

export default App;
