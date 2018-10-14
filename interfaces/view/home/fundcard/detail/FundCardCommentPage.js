import React from "react";
import connect from "react-redux/es/connect/connect";
import moment from "moment";
import util from '../../../../helpers/util';
import ui from 'redux-ui';
import FundModal from '../../../modal/FundModal';
import fundModalActions from '../../../../actions/fundModal/fundModalActions';
import fundCardServices from "../../../../services/fundCard/fundCardServices";
import fundCardActions from "../../../../actions/fundCard/fundCardActions";

@connect(state => ({
    fundCard: state.fundCard,
    authentication : state.authentication
}))

export default class FundCardCommentPage extends React.Component {

    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
        this.okCallback = this.okCallback.bind(this);
        this.state = {
            modal : true,
            title : '댓글남기기',
            contents : '내용',
            okCallback: this.okCallback
        }
    }

    okCallback(commentValue) {

        const _this = this;

        if (_.isUndefined(this.props.authentication)) {
            return;
        }

        fundCardServices.addComment(
            this.props.fundCard.fundCard.fundCardId,
            this.props.authentication.authObj.fundUserId,
            commentValue)
            .then(v => {
                fundModalActions.close({
                    modal: false
                })(_this.props.dispatch);
                fundCardActions.getFundCard(_this.props.fundCard.fundCard.fundCardId).then(func => {
                    func(_this.props.dispatch);
                });
            });
    }


    addComment() {

        fundModalActions.open(this.state)(this.props.dispatch);

    }

    render() {
        const fundCard = this.props.fundCard.fundCard;
        if (_.isUndefined(fundCard)) {
            return (
                <div></div>
            )
        }
        return (
        <div>
            <FundModal></FundModal>
                <div className="">
                    <div className="card-body" style={{height: 233, padding:"0.25rem"}}>
                        <ul className="list-group">
                            {fundCard.commentDtos.map((comment) =>
                                <li className="list-group-item" style={{marginBottom: 6}}>
                                    <div className="media">
                                        <div />
                                        <div className="media-body">
                                            <div className="media" style={{overflow: 'visible'}}>
                                                <div><img src={comment.thumbnailImage} className="mr-3" style={{width: 25, height: 25}} /></div>
                                                <div className="media-body" style={{overflow: 'visible'}}>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p><a href="#">{comment.nickName}:</a> {comment.contents} <br />
                                                                <small className="text-muted">{util.strToMomentObj(comment)('createdAt').format('lll')}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div>
                            <button className="btn btn-primary btn-lg" type="button" style={{marginTop:"20px"}} onClick={this.addComment}>댓글 남기기</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}