export const standard = defineScenario({
  driver: {
    one: {
      data: {
        name: 'String',
        cpf: 'String7422672',
        birthDate: '2025-03-05T20:00:25.001Z',
        phone: 'String',
        email: 'String8434350',
        company: {
          create: {
            name: 'String',
            address: 'String',
            phone: 'String',
            email: 'String2648795',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        cpf: 'String821716',
        birthDate: '2025-03-05T20:00:25.031Z',
        phone: 'String',
        email: 'String1270578',
        company: {
          create: {
            name: 'String',
            address: 'String',
            phone: 'String',
            email: 'String7335833',
          },
        },
      },
    },
  },
})
