import Mutil from 'util/mm.jsx';
const _mm = new Mutil();

class User { 
    login(loginInfo) {
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        }); 
    }
    checkLoginInfo(loginInfo) {
        let username = (loginInfo.username).trim(),
            password = (loginInfo.password).trim();
        if(typeof username != 'string' || username.length === 0) {
            return {
                status: false,
                msg: 'Please input your username.'
            }
        }

        if(typeof password != 'string' || password.length === 0) {
            return {
                status: false,
                msg: 'Please input your password.'
            }
        }

        return {
            status: true,
            msg: 'Verification success.'
        }

    }
    logout() {
        return _mm.request({
            type: 'post',
            url: '/user/logout.do'
        }); 
    }
    getUserList(pageNum) {
        return _mm.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                pageNum: pageNum
            }
        }); 
    }
    
}

export default User;