import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';

class Home extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Home" />
                <div className="col-md-12">
                    body
                </div>
            </div>
        );
    }
}

export default Home;