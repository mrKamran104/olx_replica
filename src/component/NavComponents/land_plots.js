import React, { Component } from 'react'
import MediaCard from '../../uiComponents/card';
import Fimage from '../../images/phone-app.webp'
import Fimage1 from '../../images/appstore.webp'
import Fimage2 from '../../images/playstore.webp'
import land_image from '../../images/land_image.webp'

export default class Land_Plots extends Component {

    fullDetails = (d) => {
        this.props.history.push('/fulldetails', { values: d });
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h2>Fresh Land_Plots Recommendations</h2>
                    <div className="row pt-2">
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 10,5000"} time={"Today"} location={"Karachi"} title="Land for Sale in Karachi" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 14,5000"} time={"4 days ago"} location={"Lahore"} title="Plot for Sale in Lahore" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 10,50000"} time={"2 days ago"} location={"Faislabaad"} title="Land for Sale in Faislabaad" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 15,5000"} time={"3 days ago"} location={"Jhang"} title="Plot for Sale in Jhang" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 10,5000"} time={"5 days ago"} location={"Karachi"} title="Land for Sale in Karachi" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 14,5000"} time={"1 days ago"} location={"Lahore"} title="Land for Sale in Lahore" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 10,50000"} time={"2 days ago"} location={"Faislabaad"} title="Plot for Sale in Faislabaad" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 mb-4">
                            <MediaCard homeFunc={this.fullDetails} img={land_image} price={"Rs: 15,5000"} time={"Today"} location={"Jhang"} title="Land for Sale in Jhang" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                        </div>
                    </div>
                </div>

                <button className="load-more fontb c333 anim">Load More</button>

                <div className="app-ribbon flex aic">
                    <div className="img" >
                        <img src={Fimage} className="bl" />
                    </div>

                    <div className="meta">
                        <h2 className="title fontb s30 color py-2 heading ">Try the OLX App</h2>
                        <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
                    </div>

                    <div className="links mt-4">
                        <h2 className="title fontb s20 color">Get your App today</h2>
                        <div className="flex as">
                            <a href="#" className="noul bl mr-3"><img src={Fimage1} /></a>
                            <a href="#" className="noul bl"><img src={Fimage2} /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}