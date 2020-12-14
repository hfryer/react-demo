import About from "../componants/about";
import Projects from "../componants/projects";
import Home from "../componants/home";
import {Route, Switch} from 'react-router-dom';
import React, { ComponentType} from 'react';

interface InternalRouteType {
    path: string
    component: ComponentType
}

interface InternalRouteProps{
    routes: InternalRouteType[]
}

const ROUTES: Array<InternalRouteType> =
    [
        {path: '/about', component: About},
        {path:'/projects', component: Projects},
        {path: '/', component: Home}
    ]

export const RenderRoutes: React.FC<InternalRouteProps> = ({routes}: InternalRouteProps)=> {
    return <Switch>
            {routes.map((route, index)=>{
                return <Route path={route.path} component={route.component}/>
            })}
        </Switch>
}

export default ROUTES