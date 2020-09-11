import type { PassportStatic } from 'passport';

import { Strategy as FacebookStrategy } from 'passport-facebook';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { FACEBOOK_AUTH_ENDPOINT } from '../routers/auth/facebook';
import { GOOGLE_AUTH_ENDPOINT } from '../routers/auth/google';

const configure = (passport: PassportStatic): void => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID || 'clientId',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'clientSecret',
        callbackURL: `${FACEBOOK_AUTH_ENDPOINT}/callback`,
      },
      function (_accessToken, _refreshToken, profile, cb) {
        return cb(null, profile);
      },
    ),
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || 'clientId',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'clientSecret',
        callbackURL: `${GOOGLE_AUTH_ENDPOINT}/callback`,
      },
      function (_accessToken, _refreshToken, profile, cb) {
        return cb(null, profile);
      },
    ),
  );

  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });
};

export default configure;
