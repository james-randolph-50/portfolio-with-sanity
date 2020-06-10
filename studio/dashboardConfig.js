export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ee14a643a13d75a9124092b',
                  title: 'Sanity Studio',
                  name: 'portfolio-with-sanity-studio',
                  apiId: '5c33cbe8-86ce-4b27-9670-240d62fa5d6d'
                },
                {
                  buildHookId: '5ee14a643d7644856f99e814',
                  title: 'Portfolio Website',
                  name: 'portfolio-with-sanity',
                  apiId: '5e3ebc2c-7a8b-4eff-9cc7-80a80d252b4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/james-randolph-50/portfolio-with-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-with-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
