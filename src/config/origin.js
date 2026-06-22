import env from './env.js';

function getOrigin() {
    const cliArg = process.argv.find(arg =>
        arg.startsWith('--origin=')
    );

    if (cliArg) {
        const override = cliArg.split('=')[1]?.trim();
        if (override) {
            return override;
        }
    }

    return env.TARGET_API?.trim();
}

export default {
    getOrigin
};
