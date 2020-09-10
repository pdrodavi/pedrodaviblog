export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f5a5b63a5b50d284523cace',
                  title: 'Sanity Studio',
                  name: 'pedrodaviblog-studio',
                  apiId: '6786ae9f-638e-41a2-9d7e-ec43aa1345cb'
                },
                {
                  buildHookId: '5f5a5b63e7147b222d68c91e',
                  title: 'Blog Website',
                  name: 'pedrodaviblog',
                  apiId: 'e1dea0c0-1456-4165-a222-c2438e83b41a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pdrodavi/pedrodaviblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://pedrodaviblog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
