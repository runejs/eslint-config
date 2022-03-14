module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            "error", { "default":
            [
                // Index signature

                // Fields
                "static-field", // = ["public-static-field", "protected-static-field", "private-static-field"]
                "abstract-field", // = ["public-abstract-field", "protected-abstract-field", "private-abstract-field"]
                "instance-field", // = ["public-instance-field", "protected-instance-field", "private-instance-field"]

                // Constructors
                "constructor",

                // Methods
                "static-method", // = ["public-static-method", "protected-static-method", "private-static-method"]
                "abstract-method", // = ["public-abstract-method", "protected-abstract-method", "private-abstract-method"]
                "instance-method", // = ["public-instance-method", "protected-instance-method", "private-instance-method"]

                // Getters & Setters
                [ "static-get", "static-set" ], // = ["public-static-get", "protected-static-get", "private-static-get"],["public-static-set", "protected-static-set", "private-static-set"]
                [ "abstract-get", "abstract-set" ], // = ["public-abstract-get", "protected-abstract-get", "private-abstract-get"],["public-abstract-set", "protected-abstract-set", "private-abstract-set"]
                [ "instance-get", "instance-set" ], // = ["public-instance-get", "protected-instance-get", "private-instance-get"],["public-instance-set", "protected-instance-set", "private-instance-set"]
            ] }
        ],
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "max-len": "off",
        "object-curly-spacing": [ "error", "always" ],
        "no-var": "error",
        "prefer-const": "error",
        "indent": [
            "error", 4, {
                "SwitchCase": 1,
                "FunctionDeclaration": {
                    "parameters": "off",
                    "body": 1
                },
                "FunctionExpression": {
                    "parameters": "off",
                    "body": 1
                },
                "offsetTernaryExpressions": true
            }
        ],
        "@typescript-eslint/indent": [
            "error", 4, {
                "SwitchCase": 1,
                "FunctionDeclaration": {
                    "parameters": "off",
                    "body": 1
                },
                "FunctionExpression": {
                    "parameters": "off",
                    "body": 1
                },
                "offsetTernaryExpressions": true,
                "ignoredNodes": [
                    "ArrowFunctionExpression > BlockStatement",
                    "NoSubstitutionTemplateLiteral",
                    "TemplateLiteral",
                    "TSTypeAliasDeclaration *"
                ]
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-var-requires": 0
    }
}
