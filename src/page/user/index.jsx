import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import Pagination from 'util/pagination/index.jsx';
import User from 'service/user-service.jsx'
import TableList    from 'util/table-list/index.jsx';
import Mutil from 'util/mm.jsx';

const _mm = new Mutil();
const _user = new User();

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            firstLoading: true
        };
    }
    componentDidMount() {
        this.loadUserList();
    }
    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
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
    onPageNumChange(pageNum) {
        this,setState({
            pageNum: pageNum
        }, () => {
            this.loadUserList();
        });
    }
    render() {
        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.createTime}</td>
                </tr>
            );
        });
        
        return (
            <div id="page-wrapper">
                <PageTitle title="User List"/>
                <TableList tableHeads={['ID', 'Username', 'Email', 'Phone', 'Create Time']}>
                    {listBody}
                </TableList>
                <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => {this.onPageNumChange(pageNum)}}/>
            </div> 
            
        );
    }
}

export default UserList;