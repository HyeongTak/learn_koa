const Koa = require('Koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const route = require('./route');

const port = 3000;

router.use('/route', route.routes());

app.use(bodyParser());

// 라우터 사용 선언
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Koa Server on ${port}port`);
});