const Koa = require('Koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = "hello, world!";
});

app.listen(3000);