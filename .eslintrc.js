"use strict";

module.exports = {
    root: true,
    plugins: [
        "eslint-plugin",
        "node",
    ],
    extends: [
        "eslint-config-eslint",
        "plugin:node/recommended",
        "plugin:eslint-plugin/recommended"
    ],
    rules: {
        "eslint-plugin/consistent-output": "error",
        "eslint-plugin/no-deprecated-context-methods": "error",
        "eslint-plugin/prefer-output-null": "error",
        "eslint-plugin/prefer-placeholders": "error",
        "eslint-plugin/report-message-format": ["error", "[^a-z].*\\.$"],
        "eslint-plugin/test-case-property-ordering": "error",
        "eslint-plugin/test-case-shorthand-strings": "error",
    }
};
