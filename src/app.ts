import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes';
import userRouter from './routes/user';
import playerRouter from './routes/player';
import nodesInfoRouter from './routes/nodesinfo';
import levelInfoRouter from './routes/levelinfo';
import rankRouter from './routes/rank';
import versionRouter from './routes/version';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'), {
  setHeaders: function (res, path) {
    if (path.indexOf("sw.js") !== -1 || path.indexOf("manifest.json") != -1 || path.indexOf("index.html") != -1) {
      res.setHeader("Cache-Control", "no-cache");
    }
  }
}), cors());
app.use(express.static(path.join(__dirname, '../public/sw.js'), {
  etag: false
}), cors());

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/players', playerRouter);
app.use('/nodesInfo', nodesInfoRouter);
app.use('/levelInfo', levelInfoRouter);
app.use('/ranks', rankRouter);
app.use('/version', versionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
