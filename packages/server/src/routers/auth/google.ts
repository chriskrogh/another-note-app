import express from 'express';
import passport from 'passport';
import { BASE_URL } from '../../utils/constants';

export const GOOGLE_AUTH_ENDPOINT = 'api/auth/google';

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/callback',
  passport.authenticate('google', {
    failureRedirect: `${BASE_URL}/${GOOGLE_AUTH_ENDPOINT}`,
  }),
  function (req, res) {
    if (req.session) {
      req.session.user = req.user;
    }
    res.redirect(BASE_URL);
  },
);

export default router;
