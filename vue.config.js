module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CloudFlare_building/'
    : '/'
}