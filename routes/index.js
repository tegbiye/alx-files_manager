import express from 'express';
import AppController from '../controllers/AppController';

const router = express.Router();

const routeController = (app) => {
  app.use('/', router);

  // App Controller
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });
};

export default routeController;
