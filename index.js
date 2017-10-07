module.exports = {
    root: true,
    plugins: ['html'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        node: true,
        browser: true,
        es6: true
    },
    globals: {},
    rules: {
        indent: [2, 4],
        'space-before-function-paren': [2, 'never'],
        'max-len': [
            1,
            120,
            4, {
                ignoreComments: true,
                ignoreUrls: true
            }
        ],
        camelcase: [2],
        'object-curly-spacing': 0,
        'arrow-parens': [0],
        'padded-blocks': [0],
        semi: [2, 'never'],
        'new-parens': [0],
        'no-negated-condition': [0],

        'comma-dangle': [2, 'never'],
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': [
            2, {
                allowEmptyCatch: true
            }
        ],
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'use-isnan': 2,
        'valid-typeof': [
            2, {
                requireStringLiterals: true
            }
        ],
        'no-unexpected-multiline': 2,
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        complexity: 'warn',
        curly: 2,
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        eqeqeq: 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-assign': [
            2, {
                props: true
            }
        ],
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': [
            2, {
                allowTernary: true
            }
        ],
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        'no-with': 2,
        radix: 2,
        'wrap-iife': [2, 'inside'],
        yoda: 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': [2, 'event'],
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-undef': [
            2, {
                typeof: true
            }
        ],
        'no-unused-vars': [
            2, {
                varsIgnorePattern: '^_$'
            }
        ],
        'no-use-before-define': [2, 'nofunc'],
        'handle-callback-err': 'warn',
        'no-mixed-requires': [
            2, {
                grouping: true,
                allowCall: true
            }
        ],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-restricted-imports': [
            2,
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors'
        ],
        'no-restricted-modules': [
            2,
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors'
        ],
        'array-bracket-spacing': [2, 'never'],
        'brace-style': [
            2,
            '1tbs', {
                allowSingleLine: false
            }
        ],
        'comma-spacing': [
            2, {
                before: false,
                after: true
            }
        ],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'eol-last': 2,
        'func-call-spacing': [2, 'never'],
        'func-names': [2, 'never'],
        'jsx-quotes': 2,
        'key-spacing': [
            2, {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': 2,
        'linebreak-style': [2, 'unix'],
        'max-depth': 'warn',
        'max-nested-callbacks': ['warn', 4],
        'max-params': [
            'warn', {
                max: 4
            }
        ],
        'max-statements-per-line': 2,
        'new-cap': [
            2, {
                newIsCap: false,
                capIsNew: false
            }
        ],
        // 'new-parens': 2,
        'no-array-constructor': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [
            2, {
                max: 1
            }
        ],
        'no-nested-ternary': 'warn',
        'no-new-object': 2,
        'no-restricted-syntax': [
            2, 'WithStatement'
        ],
        'no-whitespace-before-property': 2,
        'no-trailing-spaces': 2,
        'no-unneeded-ternary': 2,
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': 2,
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'quote-props': [2, 'as-needed'],
        quotes: [
            2,
            'single', {
                allowTemplateLiterals: true
            }
        ],
        'semi-spacing': [
            2, {
                before: false,
                after: true
            }
        ],
        'space-before-blocks': [2, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': [
            2,
            'always', {
                line: {
                    exceptions: ['-']
                },
                block: {
                    markers: ['!'],
                    balanced: true
                }
            }
        ],
        'unicode-bom': [2, 'never'],
        'arrow-spacing': [
            2, {
                before: false,
                after: true
            }
        ],
        'constructor-super': 2,
        'generator-star-spacing': [2, 'both'],
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': [
            2, {
                includeExports: true
            }
        ],
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'require-yield': 2,
        'rest-spread-spacing': [2, 'never'],
        'symbol-description': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'both']
    }
}
