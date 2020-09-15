import express from 'express';
import passport from 'passport';
import { BASE_URL } from '../../utils/constants';

export const FACEBOOK_AUTH_ENDPOINT = 'api/auth/facebook';

const router = express.Router();

router.get('/', passport.authenticate('facebook'));

router.get(
  '/callback',
  passport.authenticate('facebook', {
    failureRedirect: `${BASE_URL}/${FACEBOOK_AUTH_ENDPOINT}`,
  }),
  function (req, res) {
    if (req.session) {
      req.session.user = req.user;
    }
    res.redirect(BASE_URL);
  },
);

export default router;
