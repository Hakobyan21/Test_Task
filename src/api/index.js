import express from 'express';

import auth from './auth.api';
import test from './text1.api';

const app = express();
app.use('/auth', auth);
app.use('/test', test);
export default app;
