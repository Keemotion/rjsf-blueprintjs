module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    Environment: true,
    _t: true,
  },
  rules: {
    // from => https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js?source=post_page---------------------------
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-unused-vars': [2, { args: 'none' }],
    'class-methods-use-this': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-len': 'off',
    semi: 2,
    'comma-dangle': ['error', 'always-multiline', { functions: 'never' }],
    'react/no-multi-comp': 'off',
    'lines-between-class-members': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/static-property-placement': 'off',
    camelcase: 'off',
    'max-classes-per-file': 'off',
    'arrow-parens': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/sort-comp': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './src/project-core/**/*.spec.js',
          './src/project-core/**/*.spec.jsx',
          './src/project-core/**/*.spec.ts',
          './src/project-core/**/*.spec.tsx',
          './src/project-tools/**/*.spec.js',
          './src/project-tools/**/*.spec.jsx',
          './src/project-tools/**/*.spec.ts',
          './src/project-tools/**/*.spec.tsx',
          './tests/**/*.js',
          './tests/**/*.jsx',
          './tests/**/*.ts',
          './tests/**/*.tsx',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src', 'tests'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
};
