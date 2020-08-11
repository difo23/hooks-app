import React from 'react';
import Login from './Login';
import Board from './Board';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';


const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/board" component={Board}/>

            </Switch>
            
            </div>

        </Router>
    );
};

export default AppRouter;