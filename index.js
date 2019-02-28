const Koa = require('Koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const port = 3000;

// 라우터 세팅
router.get('/', (ctx)=> {
    ctx.body = '홈 라우터';
});

router.get('/help/:number?', (ctx) => {
    // 파라미터 뒤에 '?'를 붙히면 있거나 없거나의 조건부
    // 라우트에서 받은 number를 객체 형태의 'number' 변수에 삽입
    const { number } = ctx.params;
  
    // 파라미터가 존재하면 'number번째 도움말', 없을 시 '도움말 라우터'
    ctx.body = number ? `${number}번째 도움말` : '도움말 라우터';
});

router.get('/qna', (ctx) => {
    // 라우트에서 받은 쿼리(?num=06)를 'num' 객체에 삽입
    const { num } = ctx.query;
  
    // 쿼리가 존재하면 '질문글 num번', 없을 시 '질문이 없습니다'
    ctx.body = num ? `질문글 ${num}번` : '질문이 없습니다.';
});  

// 라우터 사용 선언
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Koa Server on ${port}port`);
});