import React from 'react';
import {Bar} from 'react-chartjs-2';
import connect from "react-redux/es/connect/connect";
import fundCardBarServices from "../../../../services/fundCard/fundCardBarServices";

@connect(state => ({
    fundCard: state.fundCard
}))
export default class FundHorizontalBarPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    getBarData(fundCard) {

        return fundCardBarServices.getBarData(fundCard);

    }

    render() {
        const barData = this.getBarData(this.props.fundCard.fundCard);
        return (
            <div>
                <h2>기부참여현황</h2>
                <Bar
                    data={barData.data}
                    options={barData.options}
                    plugins={barData.plugins}
                />
            </div>
        )
    }
}
