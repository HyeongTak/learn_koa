const Router = require('koa-router');
const memosController = require('./controller/controller');

const memos = new Router();

memos.get('/', memosController.list);
memos.get('/:id', memosController.read);
memos.post('/', memosController.write);
memos.put('/:id', memosController.update);
memos.patch('/:id', memosController.modify);
memos.delete('/:id', memosController.remove);

module.exports = memos;