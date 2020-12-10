import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //2-1.axios的请求拦截器
  // 全局  axios.interceptors
  // use(aaa =>   中aaa可以比自己命名 原本是config
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 拦截完要返回
    return config
  }, err => {
    console.log(err);
  });

  //2-2.axios的响应拦截器
  //  res结果
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  });

  // aa.interceptors.response;
  //3.发送真正的网络请求
  return instance(config)
}