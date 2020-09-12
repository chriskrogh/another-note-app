import express from 'express';
import passport from 'passport';

export const FACEBOOK_AUTH_ENDPOINT = '/api/auth/facebook';

const router = express.Router();

router.get('/', passport.authenticate('facebook'));

router.get(
  '/callback',
  passport.authenticate('facebook', {
    failureRedirect: FACEBOOK_AUTH_ENDPOINT,
  }),
  function (req, res) {
    if (req.session) {
      req.session.user = req.user;
    }
    res.redirect('/');
  },
);

export default router;
