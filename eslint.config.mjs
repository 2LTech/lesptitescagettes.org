import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    '.yarn/**',
    'docs/**',
    'node_modules/**',
    'out/**'
  ]),
  {
    settings: {
      react: { version: '19' }
    }
  }
])

export default eslintConfig
