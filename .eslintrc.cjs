process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    /* TYPESCRIPT */
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-invalid-this': 'off',

    /* JAVASCRIPT */
    'no-console': 'off',
    'semi': ['error', 'always'],
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'no-prototype-builtins': 'off',

    /* VUE */

    // Priority B: Strongly Recommended (Improving Readability)
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
    }],

    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'vue/attributes-order': ['error', {
      alphabetical: true,
    }],
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: ['i18n-t'],
    }],

  },
};
