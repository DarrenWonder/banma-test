/*global Promise*/
import Mock from 'mockjs';

export default {
  getAllProducts() {
    return new Promise(function(resolve, reject) {
      let data = Mock.mock({
        'data|80-100': [
          {
            'id|+1': 1,
            'title|3-10': /[奥特曼]/,
            'price|1-1000.2': 1,
            'inventory|10-50': 1
          }
        ],
        'error_code|0': 1
      });
      setTimeout(() => {
        if (data['error_code'] === 0) {
          resolve(data);
        } else {
          reject('获取产品信息失败');
        }
      }, Math.random() * 1000);
    });
  }
};
