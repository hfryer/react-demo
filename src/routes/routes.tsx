import About from "../componants/about";
import Projects from "../componants/projects";
import Home from "../componants/home";
import {Route, Switch} from 'react-router-dom';
import React, { ComponentType} from 'react';

interface InternalRouteType {
    path: string
    key: string
    component: ComponentType
}

interface InternalRouteProps{
    routes: InternalRouteType[]
}

const ROUTES: Array<InternalRouteType> =
    [
        {path: '/about',key: 'about', component: About},
        {path:'/projects', key:'projects', component: Projects},
        {path: '/', key:'home', component: Home}
    ]

export const RenderRoutes: React.FC<InternalRouteProps> = ({routes}: InternalRouteProps)=> {
    return <Switch>
            {routes.map((route, index)=>{
                return <Route path={route.path} component={route.component} key={route.key}/>
            })}
        </Switch>
}

export default ROUTES