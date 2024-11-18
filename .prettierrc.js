export default {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  semi: true,
  plugins: [],
  overrides: [
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx', '*.cjs', '*.mjs'],
      options: {
        printWidth: 120,
      },
    },
    {
      files: ['*.html'],
      options: {
        printWidth: 100,
      },
    },
  ],
};
