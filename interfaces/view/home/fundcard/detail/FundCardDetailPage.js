import React from "react";

import NavBarPage from "../../navbar/NavBarPage";
import FundHorizontalBarPage from "./FundHorizontalBarPage";

import connect from "react-redux/es/connect/connect";
import loginActions from '../../../../actions/login/loginActions';
import fundCardActions from '../../../../actions/fundCard/fundCardActions';
import ui from 'redux-ui';
import fundCardServices from "../../../../services/fundCard/fundCardServices";
import Render from 'react-x-render';
import FundCardPhotosPage from './FundCardPhotosPage';
import FundCardCommentPage from "./FundCardCommentPage";


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

    componentWillReceiveProps() {
        console.log("+++++componentWillReceiveProps+++++");
        console.log(this.props.authentication);
    }

    getFundCardForUI(fundCard) {

        return fundCardServices.getFundCardForUI(fundCard);

    }

    render() {
        const fundCard = this.getFundCardForUI(this.props.fundCard.fundCard);
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
                                <FundCardCommentPage/>
                            </div>
                            <div className="col-md-7">
                                <FundCardPhotosPage/>
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