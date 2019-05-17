export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cded327ba265b67ea96edd4',
                  title: 'Sanity Studio',
                  name: 'bawt-blawg-studio',
                  apiId: 'bd948a0d-15cb-48f9-b03b-f05eff123a8f'
                },
                {
                  buildHookId: '5cded327fc525f542cabec24',
                  title: 'Blog Website',
                  name: 'bawt-blawg',
                  apiId: 'fd39995b-fa94-44b0-bf24-cc0d33ec3758'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeh/bawt-blawg',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bawt-blawg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
