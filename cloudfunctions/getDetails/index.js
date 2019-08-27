// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const http = require('request-promise');
// 云函数入口函数
exports.main = async (event, context) => {

  return http(`http://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
    .then(function (res) {
      // Process html...
      console.log(res)
      return res;
    })
    .catch(function (err) {
      // Crawling failed...
      console.error(err)
    });
}