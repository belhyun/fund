import React from "react";
import connect from "react-redux/es/connect/connect";
import moment from "moment";
import util from '../../../../helpers/util';
import ui from 'redux-ui';
import FundModal from '../../../modal/FundModal';
import fundModalActions from '../../../../actions/fundModal/fundModalActions';

@connect(state => ({
    fundCard: state.fundCard,
    authentication : state.authentication
}))

export default class FundCardCommentPage extends React.Component {

    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
        this.state = {
            modal : true,
            title : '댓글남기기',
            contents : '내용'
        }
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
                <div className="card">
                    <div className="card-header">
                        <h6 className="mb-0">댓글</h6>
                    </div>
                    <div className="card-body" style={{height: 233}}>
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
                        <button className="btn btn-primary" type="button" style={{}} onClick={this.addComment}>댓글 남기기</button>
                    </div>
                </div>
            </div>
        )
    }
}