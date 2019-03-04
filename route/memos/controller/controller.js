const memos = [
  {
    id: 1,
    title: '제목',
    author: '작성자',
    body: '내용'
  }
];

let memoNum = 1;

exports.list = (ctx) => {
  ctx.body = memos;
}

exports.read = (ctx) => {
  const { id } = ctx.params;
  const memo = memos.find(memo => memo.id.toString() === id);

  if (!memo) {
    ctx.status = 404;
    ctx.body = { message: '메모가 없습니다.' };
    return ;
  }

  ctx.body = memo;
}

exports.write = (ctx) => {
  const { title, author, body } = ctx.request.body;

  memoNum += 1;

  const memo = { id: memoNum, title, author, body };
  memos.push(memo);

  ctx.body = memo;
}

exports.update = (ctx) => {
  const { id } = ctx.params;
  const order = memos.findIndex(memo => memo.id.toString() === id);

  if (order === -1) {
    ctx.status = 404;
    ctx.body = { message: '메모가 없습니다' };
    return ;
  }

  memos[order] = { id, ...ctx.request.body };

  ctx.body = memos[order];
};

exports.modify = (ctx) => {
  const { id } = ctx.params;
  const order = memos.findIndex(memo => memo.id.toString() === id);

  if (order === -1) {
    ctx.status = 404;
    ctx.body = { message: '메모가 없습니다' };
    return;
  }

  memos[order] = {
    ...memos[order],
    ...ctx.request.body
  };

  ctx.body = memos[order];
}

exports.remove = (ctx) => {
  const { id } = ctx.params;
  const order = memos.findIndex(memo => memo.id.toString() === id);

  if (order === -1) {
    ctx.status = 404;
    ctx.body = { message: '메모가 없습니다' };
    return;
  }

  memos.splice(order, 1);
  ctx.status = 204;
}