import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

function Header () {
    return(
        <AppBar color='default' position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow:1}}>
                        Harry's Demo Website
                    </Typography>
                    <Button color='inherit' component={RouterLink} to='/'>Home</Button>
                    <Button color='inherit' component={RouterLink} to='/about'>About</Button>
                    <Button color='inherit' component={RouterLink} to='/projects'>Projects</Button>
                    <Button color='inherit' href={'https://github.com/hfryer/react-demo'}>Github</Button>
                </Toolbar>
            </AppBar>
    );
}

export default Header