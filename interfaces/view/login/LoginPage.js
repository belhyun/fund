import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LoginPage.css';
import _ from 'underscore';
import { connect } from 'react-redux';
import loginActions from '../../actions/login/loginActions';
import appConstants from '../../constants/appConstants';
import cooker from '../../helpers/cooker';

let log = console.log;
let APP_TOKEN = appConstants.KAKAO_APP_TOKEN;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accessToken: "",
            refreshToken: "",
            tokenType: "",
            submitted: false
        };
        this.loginWithKakao = this.loginWithKakao.bind(this);
    }
    componentDidMount() {
        Kakao.init(APP_TOKEN);
    }
    loginWithKakao() {
        let success = function(authObj) {
            let pickAuthObj = _.compose(_.head, _.values, _.partial(_.pick, authObj, _));
            this.setState({
                accessToken: pickAuthObj('access_token'),
                refreshToken: pickAuthObj('refresh_token'),
                tokenType: pickAuthObj('token_type'),
                expiresIn: pickAuthObj('expires_in'),
                refreshTokenExpiresIn: pickAuthObj("refresh_token_expires_in"),
                scope: pickAuthObj("scope"),
                stateToken: pickAuthObj("stateToken"),
                submitted: true
            });
            const { dispatch } = this.props;
            loginActions.login(this.state).call(null, dispatch);
        }.bind(this);
        Kakao.Auth.login({
            success: success,
            fail: function(err) {
                alert(JSON.stringify(err));
            }
        });
    }
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
                                <i onClick={this.loginWithKakao} style={{
                                    marginLeft:"0px",
                                    paddingRight:"20px",
                                    paddingLeft:"22px",
                                    width:"223px",
                                    margin:"0 auto"}}
                                   className="kakao-login"></i>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center login-box-seperator-container">
                        <div className="login-box-seperator"></div>
                        <div className="login-box-seperator-text">
                            <p style={{
                                marginBottom:"0px",
                                paddingLeft:"10px",
                                paddingRight:"10px",
                                fontWeight:"400"}}>또는</p>
                        </div>
                        <div className="login-box-seperator"></div>
                    </div>
                    <div className="email-login" style={{backgroundColor: '#ffffff'}}><input type="email" required placeholder="이메일" minLength={6} className="email-imput form-control" style={{marginTop: 10}} /><input type="password" required placeholder="비밀번호" minLength={6} className="password-input form-control" style={{marginTop: 10}} /></div>
                    <div>
                        <div className="submit-row" style={{marginBottom: 8, paddingTop: 0}}><button className="btn btn-primary btn-block box-shadow" type="submit" id="submit-id-submit">로그인</button>
                            <div className="d-flex justify-content-between">
                                <div className="form-check form-check-inline" id="form-check-rememberMe"><input className="form-check-input" type="checkbox" name="check" id="formCheck-1" htmlFor="remember" style={{cursor: 'pointer'}} /><label className="form-check-label" htmlFor="formCheck-1"><span className="label-text">기억하기</span></label></div><a href="#" id="forgot-password-link">비밀번호를 잊으셨습니까?</a></div>
                        </div>
                        <div id="login-box-footer" style={{padding: '10px 20px', paddingBottom: 23, paddingTop: 18}}>
                            <p style={{marginBottom: 0}}>계정이 없습니까?<a href="#" id="register-link">회원가입!</a></p>
                        </div>
                    </div>

                </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export default connectedLoginPage;
