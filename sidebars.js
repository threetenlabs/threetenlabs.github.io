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
          label: 'Spider Solitaire',
          items: ['games/spider/index-spider'],
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
