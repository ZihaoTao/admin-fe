import React from 'react';
import './index.scss';
import User from 'service/user-service.jsx'
import Mutil from 'util/mm.jsx';

const _mm = new Mutil();
const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/home'
        }
    }
    componentWillMount() {
        document.title = 'Login - Pomegranate Admin'
    }
    onInputChange(e) {
        let inputName = e.target.name;
        let inputValue= e.target.value;
        this.setState( {
            [inputName]: inputValue
        })
    }
    onInputKeyUp(e) {
        if(e.keyCode === 13) {
            this.onSubmit();
        }
    }
    onSubmit() {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        };
        let checkResult = _user.checkLoginInfo(loginInfo);
        if(checkResult.status) {
            _user.login(loginInfo)
                .then((res) => {
                    _mm.setStorage('userInfo', res);
                    this.props.history.push(this.state.redirect)
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            })
        } else {
            _mm.errorTips(checkResult.msg);
        }
        
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">
                        <p>Log in -- Pomegranate Management System</p>
                    </div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Username"
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder="Password"
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" 
                                onClick={e => {this.onSubmit()}}>
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;