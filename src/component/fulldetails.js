import React, { Component } from 'react'
import Carousal from '../uiComponents/carousal';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export default class FullDetails extends Component {
    render() {

        return (
            <div className="my-5">
                <div className="row py-5 mx-0 px-5">
                    <div className="col-8 ">

                        <div className=" ">
                            <Paper variant="outlined" className="px-3 py-3">
                                <Carousal img={this.props.location.state.values.img} />
                            </Paper>
                        </div>

                        <div className="mt-2">
                            <Paper variant="outlined" className="px-3 py-3">
                                <div className="mb-4">
                                    <h4>Details</h4>
                                    <p>{this.props.location.state.values.title}</p>
                                </div>
                                <Divider variant="middle" />
                                <div className="mt-4">
                                    <h4>Description</h4>
                                    <p>{this.props.location.state.values.desc}</p></div>
                            </Paper>
                        </div>
                    </div>
                    <div className="col-4">
                        <Paper variant="outlined" className="px-3 py-3">
                            <h2>{this.props.location.state.values.price}</h2>
                            <p>{this.props.location.state.values.title}</p>
                            <div className="d-flex space_between">
                                <small className="text-left">{this.props.location.state.values.location}</small>
                                <small className="text-right">{this.props.location.state.values.time}</small>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}