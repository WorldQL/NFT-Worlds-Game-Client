module.exports = {
  webpack: (defaultConfig, _env) =>
    Object.assign(defaultConfig, {
      entry: {
        background: './main/app.ts',
      },
    }),
}
