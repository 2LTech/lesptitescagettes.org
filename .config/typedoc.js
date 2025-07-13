/** @type {import('typedoc').TypeDocOptions} */
const config = {
  $schema: 'https://typedoc.org/schema.json',
  name: "Les P'tites Cagettes",
  tsconfig: '../tsconfig.json',
  entryPoints: ['../src'],
  exclude: [
    '../.next/**',
    '../.yarn/**',
    '../.config/**',
    '../coverage/**',
    '../docs/**',
    '../node_modules/**',
    '../out/**',
    '../public/**',
    '../next.config.mjs',
    '**/__tests__/**'
  ],
  entryPointStrategy: 'expand',
  out: '../docs',
  readme: '../README.md',
  includeVersion: true
}

export default config
