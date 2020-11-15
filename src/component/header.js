import React, { Component } from 'react';
import logo from '../images/olxlogo.png'
import Login from './login';
import { connect } from 'react-redux'
import { facebook_login } from '../store/action'
import { firebase_logout } from '../store/action'
import { email_signup } from '../store/action'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Mobile_Phones from './NavComponents/mobile_phones'
import Cars from './NavComponents/cars'
import MotorCycles from './NavComponents/motorcycles'
import Houses from './NavComponents/houses'
import Tv_Video_Audio from './NavComponents/tv_video_audio'
import Tablets from './NavComponents/tablets'
import Land_Plots from './NavComponents/land_plots'
import Home from './home'
import FullDetails from './fulldetails';


class Header extends Component {

    constructor() {
        super();
        this.state = {
            login_show: false,
            data: {
                email: '',
                pass: ''
            }

        }
    }

    // set_value = (e) => {
    //     this.setState({
    //         data:{
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    handleModalShowHide = () => {
        this.setState({ login_show: false })
        console.log("handle")
    }
    saveChanges = (d) => {
        email_signup(d)
        console.log("changes saved", d.email, d.pass)
        this.setState({
            login_show: false,
            data: {
                email: d.email,
                pass: d.pass
            }
        })
    }

    render() {

        const nav = [
            { ID: 1, label: "Mobile Phones", route: "mobile_phones" },
            { ID: 2, label: "Cars", route: "cars" },
            { ID: 3, label: "Motorcycles", route: "motorcycles" },
            { ID: 4, label: "Houses", route: "houses" },
            { ID: 5, label: "TV-Video-Audio", route: "tv-video-audio" },
            { ID: 6, label: "Tablets", route: "tablets" },
            { ID: 7, label: "Land & Plots", route: "land-plots" },

        ]
        console.log("runn", this.props)
        return (
            <Router>
                <div className="">
                    {this.props.islogin ? '' : this.state.login_show ? <Login handle={this.handleModalShowHide} save={this.saveChanges} fb_login={() => { this.props.facebook_login() }} /> : ''}

                    <div className="header fixed aic">
                        <div className="flex aic py-2">
                            <div className="mr-3">
                                <Link to="/"> <img src={logo} width="45" alt="olx-logo" /></Link>
                            </div>

                            <div className="location rel flex aic hide2">
                                <div className="fa fa-search ico s24" />
                                <input className="label s15 font" placeholder="Your location" value="Pakistan"></input>
                                <button className="fa fa-chevron-down arro s24"></button>
                            </div>
                            <div className="search flex aic ml-4">
                                <input type="text" placeholder="Find Cars, Mobile Phone and more..." className="query font s15 hide " />
                                <button className="fa fa-search go s24 cfff"></button>
                            </div>
                            <div className="actions flex aic">
                                {this.props.islogin ? <a className="fontb s16 noulh noul color b pr-3 maxcontent" onClick={() => { this.props.firebase_logout() }}>Log out</a> : <a className="fontb s16 noulh noul color b pr-3 maxcontent" onClick={() => { this.setState({ login_show: !this.state.login_show }) }}>Log in</a>}
                                <button className="sell flex aic color" onClick={() => { this.setState({ login_show: !this.state.login_show }) }} >
                                    <div className="fa fa-plus ico s20" />
                                    <h2 className="s15 fontb b pt-1 pl-2">Sell</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="  hnav fixed flex aic ">
                        <button className="view-cates flex  color">
                            <h2 className="s18 fontb maxcontent">All Categories</h2>
                            <button className="fa fa-chevron-down arrow s20 "></button>
                        </button>
                        {
                            nav.map((v, i) => {
                                return (
                                    <Link to={v.route} className="noul noulh color font s15 bl wrapcontent" key={i} >{v.label}</Link>
                                )
                            })
                        }
                    </div>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/mobile_phones' component={Mobile_Phones} />
                        <Route exact path='/cars' component={Cars} />
                        <Route exact path='/motorcycles' component={MotorCycles} />
                        <Route exact path='/houses' component={Houses} />
                        <Route exact path='/tv-video-audio' component={Tv_Video_Audio} />
                        <Route exact path='/tablets' component={Tablets} />
                        <Route exact path='/land-plots' component={Land_Plots} />
                        <Route exact path='/fulldetails' component={FullDetails} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    name: state.user_name,
    islogin: state.islogin
})

const mapDispatchToProp = (dispatch) => ({
    facebook_login: () => dispatch(facebook_login()),
    firebase_logout: () => dispatch(firebase_logout()),
    email_signup: (data) => dispatch(email_signup(data))
})


export default connect(mapStateToProps, mapDispatchToProp)(Header);