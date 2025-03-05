import { trucks, truck, createTruck, updateTruck, deleteTruck } from './trucks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trucks', () => {
  scenario('returns all trucks', async (scenario) => {
    const result = await trucks()

    expect(result.length).toEqual(Object.keys(scenario.truck).length)
  })

  scenario('returns a single truck', async (scenario) => {
    const result = await truck({ id: scenario.truck.one.id })

    expect(result).toEqual(scenario.truck.one)
  })

  scenario('creates a truck', async (scenario) => {
    const result = await createTruck({
      input: {
        marca: 'String',
        modelo: 'String',
        placa: 'String630500',
        ano: 6094021,
        id_company: scenario.truck.two.id_company,
      },
    })

    expect(result.marca).toEqual('String')
    expect(result.modelo).toEqual('String')
    expect(result.placa).toEqual('String630500')
    expect(result.ano).toEqual(6094021)
    expect(result.id_company).toEqual(scenario.truck.two.id_company)
  })

  scenario('updates a truck', async (scenario) => {
    const original = await truck({ id: scenario.truck.one.id })
    const result = await updateTruck({
      id: original.id,
      input: { marca: 'String2' },
    })

    expect(result.marca).toEqual('String2')
  })

  scenario('deletes a truck', async (scenario) => {
    const original = await deleteTruck({ id: scenario.truck.one.id })
    const result = await truck({ id: original.id })

    expect(result).toEqual(null)
  })
})
