const production = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: production
    ? ['transform-remove-console']
    : []
}
