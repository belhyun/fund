import React from "react";

export default class NavBarPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <nav className="navbar navbar-light navbar-expand-md custom-header">
                    <div className="container-fluid"><a className="navbar-brand" href="#"><img className="img-fluid" src="/assets/images/KD-White.png" width="auto" height="auto" style={{width: 43, margin: '-26px', marginRight: '-27px', marginTop: '-32px', marginLeft: '-33px', marginBottom: '-31px'}} /><span style={{marginLeft: 27, fontFamily: '"News Cycle", sans-serif', color: 'rgb(253,250,254)'}}>Key-Druide </span></a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav links">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Overview </a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Surveys </a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#"> Reports</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link custom-navbar" href="#"> Roles<span className="badge badge-pill badge-primary">new</span></a></li>
                            </ul>
                            <ul className="nav navbar-nav ml-auto">
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"> <img src="/assets/images/avatar.jpg" className="dropdown-image" /></a>
                                    <div className="dropdown-menu dropdown-menu-right" role="menu"><a className="dropdown-item" role="presentation" href="/login">Login</a><a className="dropdown-item" role="presentation" href="#">Payments </a><a className="dropdown-item" role="presentation" href="#">Logout </a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}