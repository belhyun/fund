import React from "react";

export default class FooterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <footer>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 footer-navigation">
                            <h3><a href="#">Company<span>logo </span></a></h3>
                            <p className="links"><a href="#">Home</a><strong> · </strong><a href="#">Blog</a><strong> · </strong><a href="#">Pricing</a><strong> · </strong><a href="#">About</a><strong> · </strong><a href="#">Faq</a><strong> · </strong><a href="#">Contact</a></p>
                            <p className="company-name">Company Name © 2015 </p>
                        </div>
                        <div className="col-sm-6 col-md-4 footer-contacts">
                            <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                                <p><span className="new-line-span">21 Revolution Street</span> Paris, France</p>
                            </div>
                            <div><i className="fa fa-phone footer-contacts-icon" />
                                <p className="footer-center-info email text-left"> +1 555 123456</p>
                            </div>
                            <div><i className="fa fa-envelope footer-contacts-icon" />
                                <p> <a href="#" target="_blank">support@company.com</a></p>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-md-4 footer-about">
                            <h4>About the company</h4>
                            <p> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. </p>
                            <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-linkedin" /></a><a href="#"><i className="fa fa-github" /></a></div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}