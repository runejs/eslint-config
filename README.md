[![RuneJS Discord Server](https://img.shields.io/discord/678751302297059336?label=RuneJS%20Discord&logo=discord)](https://discord.gg/5P74nSh)


![RuneJS](https://i.imgur.com/pmkdSfc.png)

# @runejs/eslint-config

A standard set of ESLint rules for all RuneJS related projects.

## Installation

Required peer dependencies:
* `eslint`
* `@typescript-eslint/parser`
* `@typescript-eslint/eslint-plugin`

Install the RuneJS eslint config and the required peer dependencies with the following:

`npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @runejs/eslint-config`


## Usage

Create a `.eslintrc` file in your project's root directory or add an entry for `eslintConfig` in your `package.json` with the following configuration: 

```
{
    "extends": [ "@runejs/eslint-config" ],
}
```


Don't forget to include your project's specific `parserOptions` in the file:

```diff
{
    "extends": [ "@runejs/eslint-config" ],
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

