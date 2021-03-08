const production = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [
    '@babel/preset-typescript'
  ],
  plugins: production
    ? ['transform-remove-console']
    : []
}
