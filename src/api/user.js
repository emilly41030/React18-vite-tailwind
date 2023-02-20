import request from '@/utils/request.js';
export const login = async (data) =>
  request({
    url: '/login',
    method: 'post',
    data
});

export const logout = () =>
  request({
    url: '/logout',
    method: 'post'
});