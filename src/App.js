import React, {memo, useEffect} from "react";
import {useLocation, useRoutes} from "react-router-dom";
import routes from "./router";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import useScrollTop from "@/hooks/useScrollTop";

const App = memo(() => {
    useScrollTop()
    return (
        <div className="App">
           <AppHeader/>
            <div className='page'>
                {useRoutes(routes)}
            </div>
           <AppFooter/>

        </div>
    );
})


export default App;
