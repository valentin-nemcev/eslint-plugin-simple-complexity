# eslint-plugin-simple-complexity

Limit complexity by specifying maximum indent and maximum amount of lines in a function

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-simple-complexity`:

```
$ npm install eslint-plugin-simple-complexity --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-simple-complexity` globally.

## Usage

Add `simple-complexity` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "simple-complexity"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "simple-complexity/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





