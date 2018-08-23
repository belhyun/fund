import React from "react";
import connect from "react-redux/es/connect/connect";
import loginActions from '../../../actions/login/loginActions';
let log = console.log;
class NavBarPage extends React.Component {
    constructor(props) {
        super(props);

        log(this.props);
        this.logout= this.logout.bind(this);
    }

    logout() {
        loginActions.logout().call(null, this.props.dispatch);
    }

    render() {
        return (
                <nav className="navbar navbar-light navbar-expand-md custom-header">
                    <div className="container-fluid"><a className="navbar-brand" href="#"><span style={{fontFamily: '"News Cycle", sans-serif', color: 'rgb(253,250,254)'}}>연세대학교 소액기부</span></a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav links">
                                {/*<li className="nav-item" role="presentation"><a className="nav-link" href="#">기부스토리</a></li>*/}
                                {/*<li className="nav-item" role="presentation"><a className="nav-link" href="#">Surveys </a></li>*/}
                                {/*<li className="nav-item" role="presentation"><a className="nav-link" href="#"> Reports</a></li>*/}
                                {/*<li className="nav-item" role="presentation"><a className="nav-link custom-navbar" href="#"> Roles<span className="badge badge-pill badge-primary">new</span></a></li>*/}
                            </ul>
                            <ul className="nav navbar-nav ml-auto">
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"> <img src="/assets/images/avatar.jpg" className="dropdown-image" /></a>
                                    <div className="dropdown-menu dropdown-menu-right" role="menu"><a className="dropdown-item" role="presentation" href="/login">Login</a>{/*<a className="dropdown-item" role="presentation" href="#">Payments </a>*/}<a className="dropdown-item" role="presentation" href="#" onClick={this.logout}>Logout</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

function mapStateToProps(state) {
    return state.authentication;
}
const connectedNavBarPage = connect(mapStateToProps)(NavBarPage);
export default connectedNavBarPage;