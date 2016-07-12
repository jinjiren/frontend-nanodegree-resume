module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        // disable rules from base configurations
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-console": "off"
    }
};
