import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        localStorage: 'readonly',
        
        // Node.js globals
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        
        // Vue 3 globals
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        
        // Third-party globals
        google: 'readonly'
      }
    },
    rules: {
      // Vue 3 specific rules
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-model-argument': 'off',
      
      // Legacy rules to keep compatibility
      'vue/no-template-key': 'off',
      'vue/valid-v-for': 'off',
      'vue/require-v-for-key': 'off',
      'no-console': 'off',
      
      // Relax component naming rules for existing codebase
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
      
      // Modern best practices
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_', 'caughtErrorsIgnorePattern': '^_' }],
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Performance rules
      'vue/no-side-effects-in-computed-properties': 'warn',
      'vue/no-mutating-props': 'error',
      
      // Modern JavaScript rules
      'arrow-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error'
    }
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      '*.config.js',
      'architectui-vue-free/',
      'public/',
      'build/',
      'coverage/',
      '*.min.js',
      '*.bundle.js',
      'vendor/',
      'devtools-stub.js'
    ]
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off'
    }
  }
]