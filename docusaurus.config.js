const path = require('path');

module.exports = {
  title: 'The Home of ThreeTen Labs',
  tagline: 'Mobile Games Simple, and Maybe a Little Fun',
  url: 'https://threetenlabs.com',
  baseUrl: '/',
  staticDirectories: ['public', 'static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'threetenlabs', // Usually your GitHub org/user name.
  projectName: 'threetenlabs.github.io', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    authors: {
      helfer: {
        name: 'Michael Helfer',
        link: 'https://',
        title: 'Co-Founder of ThreeTen Labs',
        image: 'add_photo_in_static.jpg',
      },
      sites: {
        name: 'Ryan Sites',
        link: 'https://',
        title: 'Co-Founder of ThreeTen Labs',
        image: 'profile_pic_suze_shardlow.jpg',
      },
    },
  },
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6567607821330847',
      crossorigin: 'anonymous',
      async: true,
    },
  ],
  themeConfig: {
    prism: {
      additionalLanguages: [
        'csharp',
        'php',
        'ruby',
        'java',
        'rust',
        'elixir',
        'groovy',
        'sql',
        'typescript',
      ],
    },
    image: 'img/logo.png',
    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'ThreeTen Labs logo',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        // {
        //   to: '/games/',
        //   activeBasePath: 'docs',
        //   label: 'Games',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'ThreeTen Labs logo',
        src: 'img/logo.png',
        href: 'https://threetenlabs.com/',
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Games',
              to: '/games/',
            },
            {
              label: 'Company',
              to: '/company/',
            },
          ],
        },
        {
          title: 'Mobile Applications',
          items: [
            {
              label: 'Google Play Store',
              href: 'https://play.google.com/store/games?hl=en_US&gl=US',
            },
            {
              label: 'Apple Store',
              href: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjti6-lsLCCAxVTREcBHePWD5UYABABGgJxdQ&ase=2&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmIsqZLsX5VUBTnZyroBKqNkekxkFjml_1kkrf095qdhZ3VJh2ZM1I8aAhz7EALw_wcB&sig=AOD64_0a_wlOYm72NTLP9hTCfjLUMjQXWQ&q&nis=4&adurl&ved=2ahUKEwjynKWlsLCCAxVSkIkEHZRICMsQ0Qx6BAgGEAE',
            },
          ],
        },
      ],
      copyright: `Copyright: © ${new Date().getFullYear()} ThreeTen Labs. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // announcementBar: {
    //   id: 'yass-release', // Any value that will identify this message.
    //   content:
    //     '<div class="announcement-bar"><a href="https://google.com" target="_blank" rel="noopener"><span>Announcing the first release of Spider Solitaire</span> <span style="margin-left:1rem">Learn more</span> <span style="margin-left:0.25rem">→</span></a></div>',
    //   backgroundColor: 'rgb(210, 215, 254)', // Defaults to `#fff`.
    //   textColor: 'rgb(22 31 49)', // Defaults to `#000`.
    //   isCloseable: true, // Defaults to `true`.
    // },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/threetenlabs/threetenlabs/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/lp/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-Q08PQJS61B',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-N6GM8HL7',
      },
    ],
  ],
};
