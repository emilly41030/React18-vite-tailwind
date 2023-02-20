import request from '@/utils/request.js';

export const getResourceList = () =>
  request({
    url: '/getResourceList',
    method: 'get'
  });