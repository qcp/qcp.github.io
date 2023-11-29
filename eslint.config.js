import antfu from '@antfu/eslint-config'

export default await antfu(
  {},
  {
    files: ['**/*.vue'],
    rules: {
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/component-options-name-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
    },
  },
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    rules: {
      curly: ['error', 'all'],
    },
  },
)
