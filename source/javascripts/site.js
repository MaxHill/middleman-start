import constants from './constants';

// Wrap console log to show arrow functions work
let log = (text) => {
    console.info(text);
};

// We have the possibility to have environment specific config
if (ENV_DEVELOPMENT) {
    log(constants.DEV);
} else if (ENV_PRODUCTION) {
    log(constants.PROD);
}
