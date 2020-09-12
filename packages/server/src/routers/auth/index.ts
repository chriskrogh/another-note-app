import express from 'express';
import FacebookRouter from './facebook';
import GoogleRouter from './google';

const router = express.Router();

router.use('/facebook', FacebookRouter);
router.use('/google', GoogleRouter);

router.get('/', (req, res) => {
  const user = req.session?.user;
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(400);
  }
});

export default router;
