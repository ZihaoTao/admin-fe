/*
* @Author: Zihao Tao
* @Date:   2018-11-26 23:10:54
* @Last Modified by:   Zihao Tao
* @Last Modified time: 2018-11-26 23:52:09
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/product" component={Home}/>
                        <Route path="/product-category" component={Home}/>
                    </Switch>
                </Layout>
            </Router>           
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
