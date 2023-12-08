module.exports = {
  docs: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'category',
      label: 'Games',
      items: [
        'games/index-games',
        {
          type: 'category',
          label: 'Y.A.S.S.',
          items: [
            'games/yass/index-yass',
            'games/yass/cards',
            'games/yass/layout',
            'games/yass/play',
            'games/yass/score',
            'games/yass/faq',
          ],
        },
        {
          type: 'category',
          label: 'Guacamole',
          items: ['games/guacamole/index-guacamole'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Company',
      items: ['company/index-company'],
    },
    {
      type: 'category',
      label: 'Support',
      items: ['support/index-support'],
    },
  ],
};
