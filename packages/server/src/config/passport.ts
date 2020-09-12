import type { PassportStatic, Profile } from 'passport';

import { Strategy as FacebookStrategy } from 'passport-facebook';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { FACEBOOK_AUTH_ENDPOINT } from '../routers/auth/facebook';
import { GOOGLE_AUTH_ENDPOINT } from '../routers/auth/google';
import UserModel, { User } from '../models/User';

const handleLogin = async (
  profile: Profile,
  cb: (error: Error | null, user?: User) => void,
): Promise<void> => {
  try {
    const firstName = profile.displayName.split(' ')[0];
    const lastName = profile.displayName.split(' ')[1];
    const email = profile.emails?.[0].value;

    if (!firstName || !lastName || !email) {
      throw new Error('Invalid user data on profile');
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      cb(null, existingUser);
    } else {
      cb(
        null,
        await UserModel.create({
          firstName,
          lastName,
          email,
        }),
      );
    }
  } catch (error) {
    cb(error);
  }
};

const configure = (passport: PassportStatic): void => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID || 'clientId',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'clientSecret',
        callbackURL: `${FACEBOOK_AUTH_ENDPOINT}/callback`,
        profileFields: ['displayName', 'email'],
      },
      async function (_accessToken, _refreshToken, profile, cb) {
        handleLogin(profile, cb);
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
      async function (_accessToken, _refreshToken, profile, cb) {
        handleLogin(profile, cb);
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
