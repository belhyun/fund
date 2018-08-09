import React from 'react';
import Login from './login/Login';
import { Container, Row, Col } from 'reactstrap';

export default class App extends React.Component {
    render() {
        return (
                <Container>
                    <Login></Login>
                </Container>
        );
    }
}
