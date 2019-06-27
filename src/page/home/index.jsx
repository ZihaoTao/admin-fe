import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import './index.scss';
import Statistic from 'service/statistic-service.jsx'
import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx'

const _mm = new Mutil();
const _statistic = new Statistic();
const _user = new User();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: '_',
            productCount: '_',
            orderCount: '_'
        };
    }
    componentDidMount() {
        this.loadCount();
    }
    loadCount() {
        _statistic.getHomeCount().then(res => {
            this.setState(res);
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Home" />
                <div className="col-md-4">
                    <Link to="/user" className="color-box brown">
                        <p className="count">{this.state.userCount}</p>
                        <p className="desc">
                            <i className="fa fa-user-o"></i>
                            <span>User Number</span>
                        </p>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/product" className="color-box green">
                        <p className="count">{this.state.productCount}</p>
                        <p className="desc">
                            <i className="fa fa-list"></i>
                            <span>Product Number</span>
                        </p>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/order" className="color-box blue">
                        <p className="count">{this.state.orderCount}</p>
                        <p className="desc">
                            <i className="fa fa-check-square-o"></i>
                            <span>Order Number</span>
                        </p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;