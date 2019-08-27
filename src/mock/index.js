import Mock from 'mockjs'
import Api from './user'
export default Mock.mock('/api/user/info','get',Api.userInfo)
Mock.mock('/api/user/login','post',Api.userLogin)
Mock.mock('/api/user/get-tree','post',Api.getUserTree)