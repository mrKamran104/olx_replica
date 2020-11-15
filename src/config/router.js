import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from '../component/home'
import Mobile_Phones from '../component/NavComponents/mobile_phones'

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home}/>
                <Route exact path='/mobile_phones' component={Mobile_Phones}/>
            </Router>
        )
    }
}
