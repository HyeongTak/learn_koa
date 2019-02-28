const Router = require('koa-router');
const route = new Router();

route.get('/', (ctx) => {
    ctx.body = '경로 설정 확인';
});

module.exports = route;