import React from 'react'
import ROUTES, {RenderRoutes} from "../../routes/routes";
import Header from "./Header";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <RenderRoutes routes={ROUTES}/>
        </React.Fragment>
    );
}

export default App;
