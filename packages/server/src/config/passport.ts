import type { PassportStatic } from 'passport';

import { Strategy as FacebookStrategy } from 'passport-facebook';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

const configure = (passport: PassportStatic): void => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: '',
        clientSecret: '',
        callbackURL: '',
      },
      function (_accessToken, _refreshToken, profile, cb) {
        return cb(null, profile);
      },
    ),
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: '',
        clientSecret: '',
        callbackURL: '',
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
