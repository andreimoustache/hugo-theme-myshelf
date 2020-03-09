module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './layouts/**/*.html'
      ],
      whitelist: [
        'highlight',
        'pre',
        'video',
        'code',
        'content',
        'h3',
        'h4',
        'h5',
        'h6',
        'ul',
        'li'
      ]
    }
  }
};
