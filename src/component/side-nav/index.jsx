import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavSide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/home">
                                <span>HOME</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <span>Product</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">Product Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu">Category Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/order">
                                <span>Order</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">Order Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <span>User</span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">User Management</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default NavSide;