import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import User from 'service/user-service.jsx'
import Mutil from 'util/mm.jsx';

const _mm = new Mutil();
const _user = new User();

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            parentCategoryId: this.props.match.params.categoryId || 0
        };
    }
    componentDidMount() {
        this.loadCategoryList();
    }
    loadCategoryList() {
        _user.getUserList(this.state.parentCategoryId).then(res => {
            this.setState(res, () => {
                this.setState({
                    firstLoading: false
                });
            })
        }, errMsg => {
            this.setState({
                list:[]
            });
            _mm.errorTips(errMsg);
        })
    }
    render() {
        let listBody = this.state.list.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.username}</td>
                    <td>{category.email}</td>
                </tr>
            );
        });
        let listError = (
            <tr>
                <td colSpan="5" className="text-center">
                    {this.state.firstLoading ? 'Loading ...' : 'Cannot find the result.'}</td>
            </tr>
        );
        let tableBody = this.state.list.length > 0 ? listBody : listError;
        return (
            <div id="page-wrapper">
                <PageTitle title="Category List"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Create Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableBody}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => {this.onPageNumChange(pageNum)}}/>
            </div> 
            
        );
    }
}

export default CategoryList;