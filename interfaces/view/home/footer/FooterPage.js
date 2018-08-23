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
                            <h3><a href="#">BellaB<span></span></a></h3>
                            <p className="links"><a href="#">Home</a><strong> · </strong><a href="#">Blog</a><strong> · </strong><a href="#">Pricing</a><strong> · </strong><a href="#">About</a><strong> · </strong><a href="#">Faq</a><strong> · </strong><a href="#">Contact</a></p>
                            <p className="company-name">BellaB © 2018 </p>
                        </div>
                        <div className="col-sm-6 col-md-4 footer-contacts">
                            <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                                <p><span className="new-line-span">연세로50 학술정보원 행정정보팀 이종현</span> 한국, 서울</p>
                            </div>
                            <div><i className="fa fa-phone footer-contacts-icon" />
                                <p className="footer-center-info email text-left"> 02-2123-4938</p>
                            </div>
                            <div><i className="fa fa-envelope footer-contacts-icon" />
                                <p> <a href="#" target="_blank">belhyun@yonsei.ac.kr</a></p>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-md-4 footer-about">
                            <h4>BellaB이란</h4>
                            <p> 1인 프리랜서 웹개발자입니다. </p>
                            {/*<div className="social-links social-icons"><a href="#"><i className="fa fa-facebook" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-linkedin" /></a><a href="#"><i className="fa fa-github" /></a></div>*/}
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}