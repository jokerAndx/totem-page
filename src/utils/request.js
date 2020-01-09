import axios from 'axios'
//请求拦截器
axios.interceptors.request.use((config) => {
    //console.log('请求前：'+JSON.stringify(config));
    return config;
    },
    (error) => {
    console.log('请求错误:'+JSON.stringify(error))
    return Promise.reject(error);
})
//响应拦截器
axios.interceptors.response.use((res) => {
    //console.log('响应数据:'+JSON.stringify(res))
    return res;
},(error) => {
    console.log('响应错误:'+JSON.stringify(error))
    return Promise.reject(error);
})

export const getRequest = (url) => {
    return axios({
       method: "get",
       url: url,
       headers: {
           "Content-Type": "application/json;charset=UTF-8"
       }
    });
}

export const postRequest = (url, params) => {
    return axios({
        method: "post",
        url: url,
        data: params,
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    });
}

export const putRequest = (url, params) => {
    return axios({
        method: "put",
        url: url,
        data: params,
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    });
}

export const deleteRequest = (url) => {
    return axios({
        method: "delete",
        url: url,
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    });
}
