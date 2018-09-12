import React from "react";
import StackGrid from "react-stack-grid";

import ui from 'redux-ui';
import connect from "react-redux/es/connect/connect";
import fundCardActions from "../../../actions/fundCard/fundCardActions";
import Render from 'react-x-render';
import moment from 'moment';

@connect(state => ({
    fundCard: state.fundCard
}))

export default class FundCardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fundCards: []
        }
        const _this = this;
        fundCardActions.getFundCards(this.state).then(function(func) {
            func(_this.props.dispatch);
        });
    }

    componentDidMount() {
    }

    getMonthOrDay(type, endedAtStr) {

        const endedAt = moment(endedAtStr).locale("ko");

        if (_.isEqual(type, "D")) {
            return endedAt.date();
        }
        return endedAt.format("MMMM");

    }


    getFundCards() {
        const fundCards = this.props.fundCard.fundCards;
        return (
            <StackGrid columnWidth={250}>
                {fundCards.map((fundCard) =>
                    <div style={{top: 20}}>
                        <figure className="snip1527">
                            <div className="image">
                                {fundCard.photoDtos.map((image) =>
                                    <Render if={image.main}>
                                        <img src={image.imageUrl} alt="pr-sample23" />
                                    </Render>

                                )}
                            </div>
                            <figcaption>

                                <div className="date"><span className="day">{this.getMonthOrDay('M', fundCard.endedAt)}</span><span className="month">{this.getMonthOrDay('D', fundCard.endedAt)}</span></div>
                                <h3>{fundCard.title}</h3>
                                <p>
                                    {fundCard.contents}
                                </p>
                            </figcaption>
                            <a href="/fundCardDetail/1" />
                        </figure>
                    </div>
                )};
            </StackGrid>
        );
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                {this.getFundCards()}
            </div>
        );
    }
}