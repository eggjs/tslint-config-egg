'use strict';

const path = require('path');

module.exports = {
  extends: 'tslint:recommended',

  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
  ],

  rules: {
    'space-before-function-paren': false,
    'interface-name': false,
    'adjacent-overload-signatures': true,
    'member-access': false,
    'no-submodule-imports': false,
    'member-ordering': false,
    'object-literal-sort-keys': false,
    'max-line-length': false,
    align: [ true, 'elements', 'members', 'parameters', 'statements' ],
    'ordered-imports': false,
    'no-duplicate-imports': true,
    'no-implicit-dependencies': false,
    'no-return-await': false,
    'no-this-assignment': false,
    'arrow-parens': [ true, 'ban-single-arg-parens' ],
    'max-classes-per-file': false,
    'no-object-literal-type-assertion': false,
    'prefer-object-spread': false,
    'no-reference': false,

    /**
     * eslint best-practices
     */

    // eslint#complexity
    'cyclomatic-complexity': false,

    // eslint#curly
    curly: [ true, 'ignore-same-line' ],

    // eslint#default-case
    'switch-default': true,

    // eslint#eqeqeq
    'triple-equals': [ true, 'allow-null-check' ],

    // eslint#guard-for-in
    forin: false,

    // eslint#no-alert
    ban: [ true, 'alert' ],

    // eslint#no-caller
    'no-arg': true,

    // eslint#no-empty-function
    'no-empty': [ true, 'allow-empty-functions' ],

    // eslint#no-eval
    'no-eval': true,

    // eslint#no-fallthrough
    'no-switch-case-fall-through': true,

    // eslint#no-invalid-this
    'no-invalid-this': false,

    // eslint#no-labels
    'label-position': true,

    // eslint#no-magic-numbers
    'no-magic-numbers': false,

    // eslint#no-multi-spaces
    'no-multi-spaces': true,

    // eslint#no-new-wrappers
    'no-construct': true,

    // eslint#no-proto
    'ter-no-proto': true,

    // eslint#no-redeclare
    'no-duplicate-variable': true,

    // eslint#no-script-url
    'ter-no-script-url': true,

    // eslint#no-self-compare
    'ter-no-self-compare': true,

    // eslint#no-throw-literal
    'no-string-throw': false,

    // eslint#radix
    radix: false,

    // eslint#yoda
    'binary-expression-operand-order': true,

    /**
     * eslint node
     */

    // eslint#handle-callback-err
    'handle-callback-err': false,

    /**
     * eslint style
     */

    // eslint#array-bracket-spacing
    'array-bracket-spacing': [
      true,
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],

    // eslint#block-spacing
    'block-spacing': [ true, 'always' ],

    // eslint#brace-style
    'brace-style': [ true, '1tbs', { allowSingleLine: true }],

    // eslint#camelcase
    'variable-name': false,

    // eslint#computed-property-spacing
    'ter-computed-property-spacing': false,

    // eslint#eol-last
    eofline: true,

    // eslint#func-call-spacing
    'ter-func-call-spacing': true,

    // seems still has bugs
    // eslint#indent
    // 'ter-indent': [true, 2, { SwitchCase: 1, VariableDeclarator: 1 }],

    // eslint#linebreak-style
    'linebreak-style': [ true, 'LF' ],

    // eslint#max-length
    'ter-max-len': false,

    // eslint#max-lines
    'max-file-line-count': false,

    // eslint#new-parens
    'new-parens': true,

    // eslint#newline-after-var
    'ter-newline-after-var': false,

    // eslint#no-bitwise
    'no-bitwise': true,

    // eslint#no-mixed-spaces-and-tabs
    'ter-no-mixed-spaces-and-tabs': { type: 'spaces' },

    // eslint#no-multiple-empty-lines
    'no-consecutive-blank-lines': true,

    // eslint#no-trailing-whitespace
    'no-trailing-whitespace': true,

    // eslint#object-curly-spacing
    'object-curly-spacing': [ true, 'always' ],

    // eslint#one-var
    'one-variable-per-declaration': false,

    // eslint#padded-blocks
    'ter-padded-blocks': false,

    // eslint#quote-props
    'object-literal-key-quotes': [ true, 'as-needed' ],

    // eslint#quote
    quotemark: [ true, 'single', 'avoid-escape', 'avoid-template', 'jsx-double' ],

    // eslint#semi
    semicolon: [ true, 'always' ],

    // eslint#sort-imports
    'sort-imports': false,

    // eslint#space-in-parens
    'space-in-parens': [ true, 'never' ],

    // eslint#spaced-comment
    'comment-format': [ true, 'check-space' ],

    /**
     * eslint errors
     */

    // eslint eslint#comma-dangle
    'trailing-comma': [ true, {
      multiline: 'always',
    }],

    // eslint#no-cond-assign
    'no-conditional-assignment': true,

    // eslint#no-console
    'no-console': false,

    // eslint#no-constant-condition
    'no-constant-condition': true,

    // eslint#no-control-regex
    'no-control-regex': true,

    // eslint#no-debugger
    'no-debugger': true,

    // eslint#no-duplicate-case
    'no-duplicate-case': true,

    // eslint#no-empty-character-class
    'no-empty-character-class': true,

    // eslint#no-ex-assign
    'no-ex-assign': true,

    // eslint#no-extra-boolean-cast
    'no-extra-boolean-cast': true,

    // eslint#no-extra-semi
    'no-extra-semi': true,

    // eslint#no-inner-declarations
    'no-inner-declarations': [ true, 'functions' ],

    // eslint#no-invalid-regexp
    'no-invalid-regexp': true,

    // eslint#no-irregular-whitespace
    'ter-no-irregular-whitespace': true,

    // eslint#no-regex-spaces
    'no-regex-spaces': true,

    // eslint#no-sparse-arrays
    'ter-no-sparse-arrays': true,

    // eslint#no-unexpected-multiline
    'no-unexpected-multiline': false,

    // eslint#no-unsafe-finally
    'no-unsafe-finally': true,

    // eslint#use-isnan
    'use-isnan': true,

    // eslint#valid-jsdoc
    'valid-jsdoc': false,

    // eslint#valid-typeof
    'valid-typeof': false,

    /**
     * eslint es6
     */

    // eslint#arrow-body-style
    'ter-arrow-body-style': false,

    // eslint#arrow-parens
    'ter-arrow-parens': [ true, 'as-needed' ],

    // eslint#arrow-spacing
    'ter-arrow-spacing': [ true, { before: true, after: true }],

    // eslint#no-var
    'no-var-keyword': true,

    // eslint#object-shorthand
    'object-literal-shorthand': true,

    // eslint#prefer-const
    'prefer-const': [ true, { destructuring: 'all' }],

    // eslint#prefer-arrow-callback
    'ter-prefer-arrow-callback': [
      true,
      {
        allowNamedFunctions: true,
        allowUnboundThis: false,
      },
    ],

    /**
     * eslint variable
     */

    // eslint#no-shadow
    'no-shadowed-variable': false,
  },
};
