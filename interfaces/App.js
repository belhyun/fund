import React from 'react';
import Login from './login/Login';
import Home from './home/Home';
import { Container, Row, Col } from 'reactstrap';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers/history';


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
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
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
