import axios from 'axios';

class MUtil {
    request(param='') {
        return axios.get(param.url)
             .then(res => {
                if(0 === res.status) {
                    typeof resolve === 'function' && resolve(res.data, res.msg);
                } else if (10 === res.status) {
                    this.doLogin();
                } else {
                    typeof reject === 'function' && reject(res.msg || res.data);
                }
             })
             .catch(err => {
                typeof reject === 'function' && reject(err.statusText);
             })
    }
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
    successTips(msg) {
        alert(msg || 'Success.');
    }
    errorTips(errMsg) {
        alert(errMsg || 'Something is wrong.');
    }
    setStorage(name, data) {
        let dataType = typeof data;
        if(dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        }
        else if(['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(name, data);
        } else {
            alert('Network error.');
        }
    }
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        } else {
            return '';
        }
    }
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil;