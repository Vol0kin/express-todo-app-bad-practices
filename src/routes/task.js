import { Router } from 'express';

const taskRouter = Router();

const todoItems = [];
todoItems.push({ index: 1, value: 'learn react', done: false });
todoItems.push({ index: 2, value: 'Go shopping', done: true });
todoItems.push({ index: 3, value: 'buy flowers', done: true });
let index = 5;

taskRouter.get('/', (_, res) => res.json({ data: todoItems, status: 'success' }));

taskRouter.post('/', (req, res) => {
  index += 1;
  todoItems.push({
    index,
    value: req.body.value,
    done: false,
  });
  return res.json({ data: todoItems, status: 'success' });
});

taskRouter.delete('/:id', (req, res) => {
  const todoItems = todoItems.filter((d) => d.index !== +req.params.id);
  return res.json({ data: todoItems, status: 'success' });
});

taskRouter.patch('/:id', (req, res) => {
  todoItems.filter((d) => d.index === +req.params.id)[0].done = req.body.done;
  return res.json({ data: todoItems, status: 'success' });
});

export default taskRouter;
