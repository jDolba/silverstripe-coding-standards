module.exports = {
    "extends": [
        "silverstripe-eslint-base",
        "plugin:vue/essential"
    ],
    "overrides": [
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off",
                "vue/script-indent": ["error", 2, {"baseIndent": 1}]
            }
        }
    ]
};
