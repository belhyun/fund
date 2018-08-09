import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

export default class Login extends React.Component {
    render() {
        return (
                <div className="d-flex flex-column justify-content-center" id="login-box">
                    <div className="login-box-header">
                        <h4 style={{
                            color: "rgb(139,139,139)",
                            marginBottom:"0px",
                            fontWeight:"400",
                            fontSize:"27px"
                        }}>로그인</h4>
                    </div>
                    <div className="login-box-content">
                        <div>
                            <a className="d-flex flex-row align-items-center social-login-link" href="#">
                                <i style={{
                                    marginLeft:"0px",
                                    paddingRight:"20px",
                                    paddingLeft:"22px",
                                    width:"223px",
                                    margin:"0 auto"}}
                                   className="kakao-login"></i>
                            </a>
                        </div>
                    </div>
                </div>
        );
    }
}