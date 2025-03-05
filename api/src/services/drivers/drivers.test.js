import {
  drivers,
  driver,
  createDriver,
  updateDriver,
  deleteDriver,
} from './drivers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('drivers', () => {
  scenario('returns all drivers', async (scenario) => {
    const result = await drivers()

    expect(result.length).toEqual(Object.keys(scenario.driver).length)
  })

  scenario('returns a single driver', async (scenario) => {
    const result = await driver({ id: scenario.driver.one.id })

    expect(result).toEqual(scenario.driver.one)
  })

  scenario('creates a driver', async (scenario) => {
    const result = await createDriver({
      input: {
        name: 'String',
        cpf: 'String1451177',
        birthDate: '2025-03-05T20:00:24.695Z',
        phone: 'String',
        email: 'String1802660',
        id_company: scenario.driver.two.id_company,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.cpf).toEqual('String1451177')
    expect(result.birthDate).toEqual(new Date('2025-03-05T20:00:24.695Z'))
    expect(result.phone).toEqual('String')
    expect(result.email).toEqual('String1802660')
    expect(result.id_company).toEqual(scenario.driver.two.id_company)
  })

  scenario('updates a driver', async (scenario) => {
    const original = await driver({ id: scenario.driver.one.id })
    const result = await updateDriver({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a driver', async (scenario) => {
    const original = await deleteDriver({
      id: scenario.driver.one.id,
    })
    const result = await driver({ id: original.id })

    expect(result).toEqual(null)
  })
})
