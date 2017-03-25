import * as firebase from 'firebase'; // See https://github.com/angular/angularfire2/issues/529
import { AuthProviders, AuthMethods } from 'angularfire2';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBhQjwqLt79lo-A7-eAb_AsgfCv7HhZpFQ",
    authDomain: "pgmeet-ba4f4.firebaseapp.com",
    databaseURL: "https://pgmeet-ba4f4.firebaseio.com",
    storageBucket: "pgmeet-ba4f4.appspot.com",
    messagingSenderId: "329232370055"
};

export const FIREBASE_AUTH_CONFIG = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
};

export class Config {
  public static FIREBASE_CONFIG = FIREBASE_CONFIG;
  public static FIREBASE_AUTH_CONFIG = FIREBASE_AUTH_CONFIG;
}
