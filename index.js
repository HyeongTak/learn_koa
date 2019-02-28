const Koa = require('Koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const port = 3000;

// 라우터 세팅
router.get('/', (ctx)=> {
    ctx.body = '홈 라우터';
});

router.get('/help', (ctx) => {
    ctx.body = '도움말 라우터';
});

// 라우터 사용 선언
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Koa Server on ${port}port`);
});