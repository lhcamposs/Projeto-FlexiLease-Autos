import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.js', 'dist', 'build', 'node_modules'],
    ...tseslint.configs.disableTypeChecked,
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'no-unreachable': 'warn',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
