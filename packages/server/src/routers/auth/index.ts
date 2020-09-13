import express from 'express';
import FacebookRouter from './facebook';
import GoogleRouter from './google';

const devUser = {
  _id: '5f5c4ca6bebdc26c2416fae1',
  firstName: 'Christopher',
  lastName: 'Krogh',
  email: 'christopherm11@hotmail.com',
};

const router = express.Router();

router.use('/facebook', FacebookRouter);
router.use('/google', GoogleRouter);

router.get('/', (req, res) => {
  const user = req.session?.user;
  if (process.env.NODE_ENV !== 'production') {
    res.send(devUser);
  } else if (user) {
    res.send(user);
  } else {
    res.sendStatus(401);
  }
});

export default router;
