import 'dotenv/config';

export default {
  name: 'SUEP',
  icon: './assets/suep_icon.png',
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.1.6',
  orientation: 'portrait',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },
  userInterfaceStyle: 'automatic',
  assetBundlePatterns: ['**/*'],
  updates: {
    fallbackToCacheTimeout: 10000,
  },
  android: {
    package: 'com.tpot.suepapp',
    versionCode: 15,
    permissions: [],
    adaptiveIcon: {
      foregroundImage: './assets/suep_icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  plugins: ['sentry-expo'],
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: process.env.SENTRY_ORGANIZATION,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_TOKEN,
        },
      },
    ],
  },
  extra: {
    googleKey: process.env.GOOGLE_SPREADSHEET_API_KEY,
    clubsSheetId: process.env.CLUB_SPREADSHEET_ID,
    commSheetId: process.env.COMMUNITY_SPREADSHEET_ID,
    univSheetId: process.env.UNIVERSITY_SPREADSHEET_ID,
  },
};
