import axios from 'axios'

/**
 * 创建vue实例
 */
const service = axios.create({
  baseURL: '', // 及地址
  timeout: 5000 // 超时时间
})

/**
 * 请求拦截器
 */
service.interceptors.request.use((config) => {
  // 请求成功
  return config
}, (error) => {
  // 请求失败
  return Promise.reject(error)
})

/**
 * 响应栏拦截器
 */
service.interceptors.request.use((response) => {
  // 响应成功
  return response
}, (error) => {
  // 响应失败
  return Promise.reject(error)
})

/**
 * 统一传参
 */
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
