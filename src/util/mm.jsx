import axios from 'axios';

class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            if(param.type === 'get') {
                axios.get(param.url)
                    .then(res => {
                        if(0 === res.status) {
                            typeof resolve === 'function' && resolve(res.data.data, res.data.msg);
                        } else if (10 === res.status) {
                            this.doLogin();
                        } else {
                            typeof reject === 'function' && reject(res.data.msg || res.data.data);
                        }
                    })
                    .catch(err => {
                        typeof reject === 'function' && reject(res.data.msg || res.data.data);
                    })

            } else {
                axios.post(param.url, param.data)
                    .then(res => {
                        if(0 === res.status) {
                            typeof resolve === 'function' && resolve(res.data.data, res.data.msg);
                        } else if (10 === res.status) {
                            this.doLogin();
                        } else {
                            console.log(res)
                            typeof reject === 'function' && reject(res.data.msg || res.data.data);
                        }
                    })
                    .catch(err => {
                        typeof reject === 'function' && reject(res.data.msg || res.data.data);
                    })
            }
        }); 
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
            alert('Cannot put this type of data into local storage.');
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