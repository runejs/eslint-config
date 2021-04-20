# @runejs/eslint-config
ESLint configuration for all RuneJS related projects.

## Install
`npm i --save-dev @runejs/eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin`

## Usage
Create a `.eslintrc` file in your project's root directory and paste the following inside: 
```
{
    "extends": ["@runejs/eslint-config"]
}
```

Don't forget to add your project specific `parserOptions` in the file:

```diff
{
  extends: ["@runejs/eslint-config"],
+   parserOptions: {
+   project: './tsconfig.json',
+  }
}
```

