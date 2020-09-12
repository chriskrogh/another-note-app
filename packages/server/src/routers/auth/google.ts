import express from 'express';
import passport from 'passport';

export const GOOGLE_AUTH_ENDPOINT = '/api/auth/google';

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: GOOGLE_AUTH_ENDPOINT }),
  function (req, res) {
    if (req.session) {
      req.session.user = req.user;
    }
    res.redirect('/');
  },
);

export default router;
