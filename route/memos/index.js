const Router = require('koa-router');
const memos = new Router();

// CRUD Test Method
const memoTest = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params
  };
};

// Routes Setting
memos.get('/', memoTest);
memos.get('/:id', memoTest);
memos.post('/',memoTest);

memos.put('/:id', memoTest);
memos.patch('/:id', memoTest);
memos.delete('/:id', memoTest);


module.exports = memos;