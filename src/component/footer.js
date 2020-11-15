import React, { Component } from 'react';
import Fimage1 from '../images/appstore.webp'
import Fimage2 from '../images/playstore.webp'

class Footer extends Component {
    render() {
        return (
            <div className=" ">
                <div className="footer">
                    <div className="row py-3 mr-0 ml-3 ">

                        <div className="col">
                            <h2 className="title s16 fontb color">POPULAR CATEGORIES</h2>
                            <a className="noul noulh font s14 color">Cars</a><br />
                            <a className="noul noulh font s14 color">Flets for rent</a><br />
                            <a className="noul noulh font s14 color">Jobs</a><br />
                            <a className="noul noulh font s14 color">Mobile Phones</a>
                        </div>

                        <div className="col">
                            <h2 className="title s16 fontb color">TRENDING SEACHES</h2>
                            <a className="noul noulh font s14 color">Bikes</a><br />
                            <a className="noul noulh font s14 color">Watches</a><br />
                            <a className="noul noulh font s14 color">Books</a><br />
                            <a className="noul noulh font s14 color">Dogs</a>
                        </div>

                        <div className="col">
                            <h2 className="title s16 fontb color">ABOUT US</h2>
                            <a className="noul noulh font s14 color">About OLX Group</a><br />
                            <a className="noul noulh font s14 color">OLX Blog</a><br />
                            <a className="noul noulh font s14 color">Contact Us</a><br />
                            <a className="noul noulh font s14 color">OLX for Businesses</a>
                        </div>

                        <div className="col">
                            <h2 className="title s16 fontb color">OLX</h2>
                            <a className="noul noulh font s14 color">Help</a><br />
                            <a className="noul noulh font s14 color">Sitemap</a><br />
                            <a className="noul noulh font s14 color">Legal &amp; Privacy information</a>
                        </div>

                        <div className="col">
                            <ul style={{ listStyle: 'none' }} className="d-inline-flex pl-0">
                                <li className="mr-2"><i className="fa fa-facebook rounded-circle icon" /></li>
                                <li className="mr-2"><i className="fa fa-twitter  rounded-circle icon" /></li>
                                <li className="mr-2"><i className="fa fa-telegram  rounded-circle icon" /></li>
                                <li className="mr-2"><i className="fa fa-instagram  rounded-circle icon" /></li><br />
                            </ul>
                            <div className="d-inline-flex">
                                <img src={Fimage1} className="mr-2" width="85px" />
                                <img src={Fimage2} className="mr-2" width="85px" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerb" >
                    <div className="ml-3 mr-0 row py-3">
                        <section className="col-8 font s14 " >Other Countries India - South Africa - Indonesia</section>
                        <section className="col-4 font s14 " >Free Classifieds in Pakistan. © 2006-2020 OLX</section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;