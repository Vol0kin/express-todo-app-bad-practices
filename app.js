import express from 'express';
import bodyParser from 'body-parser';

import taskRouter from './src/routes/task.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/task', taskRouter);

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(8000, () => console.log(`Example app running!`));
