import React from "react";

import NavBarPage from "../navbar/NavBarPage";
import FundHorizontalBarPage from "./FundHorizontalBarPage";
import connect from "react-redux/es/connect/connect";
import loginActions from '../../../actions/login/loginActions';
import fundCardActions from '../../../actions/fundCard/fundCardActions';
import ui from 'redux-ui';
import fundCardServices from "../../../services/fundCard/fundCardServices";

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

        fundCardServices.getFundCardForUI(fundCard);

    }

    render() {
        const fundCard = this.getFundCardForUI(this.props.fundCard.fundCard);
        return (
                <div>
                    <NavBarPage/>
                    <div className="container">
                        <div className="jumbotron" style={{marginTop: 15, overflow: 'hidden'}}>
                            <div>
                                <h1>저소득층 학생 기부하기</h1>
                                <p>한국 사회에서 아주 일상적인 취미생활이 된 '영화 보기'. 그런데 2017년 흥행 10순위 한국영화 중 '이름이 있는 여성 둘 이상이 모여 남성이 아닌 다른 주제로 이야기를 나누는' 장면이 한 번이라도 나온 영화는 단 2편이라는 사실. 알고 계셨나요?</p>
                            </div>
                            <div>
                                <FundHorizontalBarPage/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12"><img className="img-thumbnail img-fluid center-block" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6"><img className="img-thumbnail img-fluid center-block" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg" /></div>
                                    <div className="col-6 col-sm-6 col-md-6"><img className="img-thumbnail img-fluid center-block" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg" /></div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div style={{marginBottom: 20}}>
                                    <h1>저소득층 학생 기부하기</h1>
                                    <p>
                                        한국 사회에서 아주 일상적인 취미생활이 된 '영화 보기'.
                                        그런데 2017년 흥행 10순위 한국영화 중 '이름이 있는 여성 둘 이상이 모여 남성이 아닌 다른 주제로 이야기를 나누는' 장면이 한 번이라도 나온 영화는 단 2편이라는 사실. 알고 계셨나요?
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
                        </div>
                    </div>
                </div>
        );
    }
}