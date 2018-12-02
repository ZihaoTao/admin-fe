import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Something is wrong."/>
                <div className="row">
                    <div className="col-md-12">
                        <span>Cannot find this page.</span>
                        <Link to="/">Go back.</Link>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ErrorPage;