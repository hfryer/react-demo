import './App.css';

import React from 'react'
import ROUTES, {RenderRoutes} from "../../routes/routes";
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand as={Link} to={'/'}>Harry's Demo Website</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Item>
                         <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/projects'}>Projects</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <RenderRoutes routes={ROUTES}/>
        </div>
    );
}

export default App;
