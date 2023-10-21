export const standard = defineScenario({
  docVersion: {
    one: {
      data: {
        projFile: {
          create: {
            filename: 'String',
            language: 'String',
            content: 'String',
            updatedAt: '2023-10-15T12:27:50.268Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2023-10-15T12:27:50.268Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        projFile: {
          create: {
            filename: 'String',
            language: 'String',
            content: 'String',
            updatedAt: '2023-10-15T12:27:50.268Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2023-10-15T12:27:50.268Z',
              },
            },
          },
        },
      },
    },
  },
})
