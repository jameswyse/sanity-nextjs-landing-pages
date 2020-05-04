export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb0837713d75001c6c578d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bdkov1um',
                  apiId: '4c0021c6-d6ad-4451-84a6-f37d343fcdd3'
                },
                {
                  buildHookId: '5eb08377110bd44254bb550e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-deqnfk9e',
                  apiId: '30a27892-c6e0-49f3-a388-4b03ac2f151d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jameswyse/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-deqnfk9e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
