import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const item = await User.findByPk(id);
  console.log(new Date().toLocaleString(), `GET /users/${id}`, item);
  res.send(item);
});

export const UserRouter: Router = router;
