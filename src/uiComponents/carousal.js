import React, { Component } from 'react'

export default class Carousal extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls " className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active black">
                            <img className="centerr" src={this.props.img} width="90%" height="350px" alt="First slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev"  role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next"  role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}