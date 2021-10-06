import React from 'react'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Index from './Screen';
import Preview from './Screen/Preview'


export default function Routes() {
    return (
        <HashRouter>
            <div>
            <Route exact path="/" component={Index} />
            <Route path="/preview" component={Preview} />
            </div>
        </HashRouter>
    )
}
