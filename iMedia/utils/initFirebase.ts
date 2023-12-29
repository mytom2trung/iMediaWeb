import { initializeApp, getApps } from 'firebase/app';
import { getRemoteConfig } from 'firebase/remote-config';

import defaultConfig from '@/iMedia/resources/data.json';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let remoteConfigVar;

if (typeof window !== 'undefined') {
  remoteConfigVar = getRemoteConfig(firebaseApp);
  remoteConfigVar.settings.minimumFetchIntervalMillis = 600000;
  remoteConfigVar.defaultConfig = {
    web_config: JSON.stringify(defaultConfig),
  };
}
export default firebaseApp;
export const remoteConfig = remoteConfigVar;
