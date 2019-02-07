const eslintConfig = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'react/forbid-prop-types': [],
    // Allow importing of devDependencies in specific contexts
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // Client-side code
          // Bundled with webpack so dependencies listed as devDependencies
          // to avoid them being included in artefacts like docker containers
          // and binaries.
          '**/src/+(client|renderer|publisher)/**',
          // Tests and tools
          '**/*.test.js',
          '**/ava-setup.js',
          '**/browser-env.js',
          '**/+(test|integration-test|tools|.storybook|bin)/**',
          // Webpack bundle configuration
          `**/webpack.?(*.)config.js`,
        ],
      },
    ],
    // AVA relies on re-assigning params for test context
    'no-param-reassign': ['error', { props: false }],
    // testdouble relies on requires (in specific order) to allow dependency replacement
    'global-require': 'off',
    // AVA can only run against .js files, cannot change extension to .jsx in test
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // Express, needed for error handling middleware which has arity of 4
    // and takes 'next' as last argument
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
      },
    ],
    'no-await-in-loop': 0,
  },
  globals: {
    __IS_ELECTRON__: true,
    pageData: true, // exposed by Adobe Analytics wonderful script
    pageDataTracker: true, // exposed by AA
  },
};

module.exports = eslintConfig;
