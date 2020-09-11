import express from 'express';
import passport from 'passport';

export const GOOGLE_AUTH_ENDPOINT = '/api/auth/google';

const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: GOOGLE_AUTH_ENDPOINT }),
  function (req, res) {
    res.send(req.user);
  },
);

export default router;
