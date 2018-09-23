import React from "react";

import NavBarPage from "../navbar/NavBarPage";
import FundHorizontalBarPage from "./FundHorizontalBarPage";
import connect from "react-redux/es/connect/connect";
import loginActions from '../../../actions/login/loginActions';
import fundCardActions from '../../../actions/fundCard/fundCardActions';
import ui from 'redux-ui';
import fundCardServices from "../../../services/fundCard/fundCardServices";
import Render from 'react-x-render';

@connect(state => ({
    authentication: state.authentication,
    fundCard: state.fundCard
}))
@ui({
    persist: true
})
export default class FundCardDetailPage extends React.Component {

    constructor(props) {
        super(props);
        const _this = this;
        __.all(
            function(dispatcher) {
                loginActions.preLogin(_this.state)(dispatcher);
            },
            function(dispatcher) {
                fundCardActions.getFundCard(_this.props.match.params.id).then(func => {
                    func(dispatcher);
                });
            }
        )(this.props.dispatch);
    }

    componentWillMount(){
    }

    componentDidMount(){

    }

    getFundCardForUI(fundCard) {

        return fundCardServices.getFundCardForUI(fundCard);

    }

    render() {
        const fundCard = this.getFundCardForUI(this.props.fundCard.fundCard);
        console.log(fundCard);
        return (
            <Render unless={_.isUndefined(fundCard)}>
                <div>
                    <NavBarPage/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5">
                                <div style={{marginBottom: 20}}>
                                    <h1>{fundCard.title}</h1>
                                    <p>
                                        {fundCard.contents}
                                    </p>
                                    <h2 className="text-center text-success"><i className="fa fa-dollar" /></h2><button className="btn btn-primary btn-lg center-block" type="button"><i className="fa fa-cart-plus" /> 기부하기</button>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="mb-0">댓글</h6>
                                    </div>
                                    <div className="card-body" style={{height: 233}}>
                                        <ul className="list-group">
                                            <li className="list-group-item" style={{marginBottom: 6}}>
                                                <div className="media">
                                                    <div />
                                                    <div className="media-body">
                                                        <div className="media" style={{overflow: 'visible'}}>
                                                            <div><img src="/assets/images/avatar.jpg" className="mr-3" style={{width: 25, height: 25}} /></div>
                                                            <div className="media-body" style={{overflow: 'visible'}}>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <p><a href="#">이종현:</a> 멋집니다. <br />
                                                                            <small className="text-muted">2018년 8월 31일 10:33:33</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item" style={{marginBottom: 6}}>
                                                <div className="media">
                                                    <div />
                                                    <div className="media-body">
                                                        <div className="media" style={{overflow: 'visible'}}>
                                                            <div><img src="/assets/images/avatar.jpg" className="mr-3" style={{width: 25, height: 25}} /></div>
                                                            <div className="media-body" style={{overflow: 'visible'}}>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <p><a href="#">이종현:</a> 멋집니다. <br />
                                                                            <small className="text-muted">2018년 8월 31일 10:33:33</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul><button className="btn btn-primary" type="button" style={{}}>댓글 남기기</button></div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    {fundCard.photoDtos.map((image) =>
                                        <Render if={image.main}>
                                            <div className="col-md-auto"><img className="img-thumbnail img-fluid center-block" src={image.imageUrl} /></div>
                                        </Render>

                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-md-auto">
                                        <div id="" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                {fundCard.photoDtos.map((image, index) =>
                                                    <Render unless={image.main}>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={image.imageUrl} alt="First slide" />
                                                        </div>
                                                    </Render>

                                                )}
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <FundHorizontalBarPage/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Render>
        );
    }
}