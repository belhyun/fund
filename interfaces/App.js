import React from 'react';
import LoginPage from './view/login/LoginPage';
import HomePage from './view/home/HomePage';
import { Container, Row, Col } from 'reactstrap';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers/history';
import $ from "jquery";
import 'bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {

        });
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
