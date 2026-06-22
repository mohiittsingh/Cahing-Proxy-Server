import env from './env.js';

function getOrigin() {

    const cliArg = process.argv.find(arg =>
        arg.startsWith('--origin=')
    );

    if (cliArg) {
        return cliArg.split('=')[1];
    }

    return env.TARGET_API;
}

export default {
    getOrigin
};