module.exports = {
  images: {
    domains: ['tailwindui.com','images.unsplash.com'],
  },
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}