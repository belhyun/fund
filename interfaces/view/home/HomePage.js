import React from 'react';
import DarkFooter from './css/Dark-Footer.css';
import DarkFooter1 from './css/Dark-Footer-1.css';
import DarkFooter2 from './css/Dark-Footer-2.css';
import DarkFooter3 from './css/Dark-Footer-3.css';
import DarkFooter4 from './css/Dark-Footer-4.css';
import DarkFooter5 from './css/Dark-Footer-5.css';
import KDHeader from './css/KD_Header.css';
import KDHeader1 from './css/KD_Header-1.css';
import KDHeader2 from './css/KD_Header-2.css';
import MusaPanelTable from './css/MUSA_panel-table.css';
import MusaPanelTable1 from './css/MUSA_panel-table-1.css';
import NewsCard from './css/News-Cards.css';
import PrettyFooter from './css/Pretty-Footer.css';
import Styles from './css/styles.css';
import NavBarPage from './navbar/NavBarPage';
import FundCardPage from './fundcard/FundCardPage';
import FooterPage from './footer/FooterPage';
import FundModal from '../modal/fundModal';
import connect from "react-redux/es/connect/connect";
import loginActions from '../../actions/login/loginActions';
import ui from 'redux-ui';
import PropTypes from 'prop-types';

let log = console.log;

@ui({
    state: {
        isProfileImageSet: false,
        test: "테스트"
    },
    reducer: (state, action) => {
        switch (action.type) {
            case 'UI_CHANGE_TEST':
                return state.set("test", action.vars);
        }
        return state;
    }
})
@connect(state => ({
    authentication: state.authentication
}))
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: "",
            expiresIn: "",
            refreshToken: "",
            tokenType: "",
            submitted: false
        };
        loginActions.preLogin(this.state)(this.props.dispatch);
        // let vars = "테스트2";
        // this.props.dispatch({
        //     type: "UI_CHANGE_TEST", vars
        // });
    }

    render() {
        return (
                <div>
                    <NavBarPage/>
                    <FundCardPage></FundCardPage>
                    <FooterPage></FooterPage>
                    <FundModal></FundModal>
                </div>
        );
    }
}
HomePage.propTypes = {
    authentication: PropTypes.object
}

export default HomePage;

