import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    'rules': {
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['warn','always-multiline'],
      'max-classes-per-file': ['error', 1],
    },
  },
];