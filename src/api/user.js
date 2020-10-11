import request from '@/utils/request'
// import store from '@/store'
export const login = data => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data: data
  })
}
export const sendSms = mobile => {
  return request({
    url: `/app/v1_0/sms/codes/${mobile}`,
    method: 'GET',
    data: mobile
  })
}
export const getUserInfo = () => {
  return request({
    url: '/app/v1_0/user',
    method: 'GET'
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}
