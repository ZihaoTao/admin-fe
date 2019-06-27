import React from 'react';
import { Link } from 'react-router-dom';
import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx'

const _mm = new Mutil();
const _user = new User();

class NavTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: _mm.getStorage('userInfo').username || ''
        }
    }
    onLogout() {
        _user.logout().then(res => {
            _mm.removeStorage('userInfo');
            window.location.href = '/';
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>Pomegranate</b></Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            {
                                this.state.username 
                                ? <span>Welcome,{this.state.username}</span> 
                                : <span>Welcome</span>
                            }
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => {this.onLogout()}}>
                                    <span>Log in / Log out</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;