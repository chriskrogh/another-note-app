import express from 'express';
import FacebookRouter from './facebook';
import GoogleRouter from './google';
import '../../middleware/auth';

const router = express.Router();

router.use('/facebook', FacebookRouter);
router.use('/google', GoogleRouter);

export default router;
