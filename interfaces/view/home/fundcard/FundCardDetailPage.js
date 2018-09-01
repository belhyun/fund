import React from "react";

import Product_Details from "../css/detail/Product-Details.css";
import NavBarPage from "../navbar/NavBarPage";
import { HorizontalBar } from 'react-chartjs-2';


const data = {
    labels: ['기부금액'],
    datasets: [
        {
            label: '기부현황',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65],
            responsive: true
        }
    ]
};

export default class FundCardDetailPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
    }

    componentDidMount(){

    }

    render() {
        return (
                <div>
                    <NavBarPage/>
                    <div className="container">
                        <div className="jumbotron" style={{marginTop: 15, overflow: 'hidden'}}>
                            <div>
                                <h1>기부타이틀기부타이틀기부타이틀기부타이틀기부타이틀기부타이틀</h1>
                                <p>상세설명상세설명상세설명상세설명상세설명상세설명</p>
                            </div>
                            <div>
                                <HorizontalBar data={data} width={600} height={100} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12"><img className="img-thumbnail img-fluid center-block" src="/assets/images/yonsei.jpg" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6"><img className="img-thumbnail img-fluid center-block" src="/assets/images/yonsei.jpg" /></div>
                                    <div className="col-6 col-sm-6 col-md-6"><img className="img-thumbnail img-fluid center-block" src="/assets/images/yonsei.jpg" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6"><img className="img-thumbnail img-fluid center-block" src="/assets/images/yonsei.jpg" /></div>
                                    <div className="col-6 col-sm-6 col-md-6"><img className="img-thumbnail img-fluid center-block" src="/assets/images/yonsei.jpg" /></div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div style={{marginBottom: 20}}>
                                    <h1>저소득층 학생 기부하기</h1>
                                    <p>연세대학교의 창립정신과 역사에는 ‘도전과 창조’, ‘나눔과 배려’, ‘소통과 공감’, ‘섬김과 존경’의 연세 DNA가 뿌리박혀 있습니다. 그렇기에 연세대학교는 늘 ‘미래를 향해 나아가는 꿈’, ‘다른 꿈’을 꿉니다.</p>
                                    <h2 className="text-center text-success"><i className="fa fa-dollar" /></h2><button className="btn btn-danger btn-lg center-block" type="button"><i className="fa fa-cart-plus" /> 기부하기</button>
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
                                                                        <p><a href="#">Sara Doe:</a> This guy has been going 100+ MPH on side streets. <br />
                                                                            <small className="text-muted">August 6, 2016 @ 10:35am </small></p>
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
                                                                        <p><a href="#">Brennan Prill:</a> This guy has been going 100+ MPH on side streets. <br />
                                                                            <small className="text-muted">August 6, 2016 @ 10:35am </small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul><button className="btn btn-light" type="button" style={{}}>Add Comment</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}