const Router = require('koa-router');
const route = new Router();

// route/memos/index.js 파일 로드
const memos = require('./memos');

route.use('/memos', memos.routes());

module.exports = route;