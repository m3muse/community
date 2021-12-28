import express from 'express';
import {
  communityController,
  getWriteArticleController,
  postWriteArticleController,
  getArticleController,
} from '../controllers/communityController';
import { loginOnly, logoutOnly } from '../middleware/middleware.js';

export const communityRouter = express.Router();

communityRouter.get('/community', communityController);
communityRouter.get('/writeArticle', loginOnly, getWriteArticleController);
communityRouter.post('/writeArticle', loginOnly, postWriteArticleController);
communityRouter.get('/article/:id', getArticleController);
