import React from 'react'
import Ingreso from './app/components/session/Ingreso'
import AppChat from './app/components/chat/AppChat'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chat">About</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Ingreso}/>
            <Route path="/chat" component={AppChat}/>
        </div>
    </Router>
)
export default BasicExample