import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://localhost:8443/`,
  accept: 'application/ld+json',
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDk5NjQ2OTgsImV4cCI6MTYwOTk2ODI5OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImxkQGdtYWlsLmNvbSJ9.c1XJNovEdmhT5AwP3a5AiBw0Dg1cfbgJhFBbEibfQ8eSz5FslE3u6j1JsRhfwZWL8arEYN1mBmaRL6Of1v7YgXpd1Hrs2IfBcART3gTwg6Q569RElU7Tb3X9iM1lxK1dXWUdm0aTW4WGO_dnfbwF45f4zkROHUY2J6N1AhHNCuO4Y6DekcESkHVySM5Ta_Q2pz7inakcao1_R2d58rTjvljoRooo9pADGYyXeRXKzc-pP6ZyAwxeUKCYDQuLUL3FSJbeABZEYSSsrWiApznOZPlLFQNd_1hK2squBJ-ShaODQjI8HL0KSwq1JPreVdwoNRYZlOt0vSyG2l46ZFW-1sjvobXTiR6ox1cZKj5FC8sssDzBlkjuZ54-gYMuH-AWniX59gCuuhHs3cqjsxhTHGmiuii4eWpNcqK_aShFdj_PXAJNkTuMQgIpUd0gvffqhM-H-1Hg0_q231cwOeGPJCfrwcObXHzZBfHwxuiDI1Fyc7EfAQDU5DMSrihG4gMosCKYDO0N68ThtA5XSVXlNHuV0nBvlfYk9EG3Xphb5oim9-QHCg7dNa_Ylr8F2dvCYVGSQ_6Fw5JDdx1aHwgHgOEHVzhv04Y3F6jpDXw63gZFgdRWdeCz24exoN6T0loABRsLPFxu8xd4OjGLSL1OgtB8g5y_doitIOL1ckR7Ajk'
  }
})