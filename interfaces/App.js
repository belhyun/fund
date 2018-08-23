import React from 'react';
import LoginPage from './view/login/LoginPage';
import HomePage from './view/home/HomePage';
import { Container, Row, Col } from 'reactstrap';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers/history';
import 'bootstrap';
import appConstants from "./constants/appConstants";

let APP_TOKEN = appConstants.KAKAO_APP_TOKEN;


class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
        });
    }
    componentDidMount() {
        Kakao.init(APP_TOKEN);
    }
    render() {
        return (
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                    </div>
                </Router>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
