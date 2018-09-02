import React from 'react';
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
    persist:true,
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

