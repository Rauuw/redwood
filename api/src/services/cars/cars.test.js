import { cars, car, createCar, updateCar, deleteCar } from './cars'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cars', () => {
  scenario('returns all cars', async (scenario) => {
    const result = await cars()

    expect(result.length).toEqual(Object.keys(scenario.car).length)
  })

  scenario('returns a single car', async (scenario) => {
    const result = await car({ id: scenario.car.one.id })

    expect(result).toEqual(scenario.car.one)
  })

  scenario('creates a car', async () => {
    const result = await createCar({
      input: {
        marca: 'String',
        modelo: 'String',
        placa: 'String5072306',
        ano: 973071,
      },
    })

    expect(result.marca).toEqual('String')
    expect(result.modelo).toEqual('String')
    expect(result.placa).toEqual('String5072306')
    expect(result.ano).toEqual(973071)
  })

  scenario('updates a car', async (scenario) => {
    const original = await car({ id: scenario.car.one.id })
    const result = await updateCar({
      id: original.id,
      input: { marca: 'String2' },
    })

    expect(result.marca).toEqual('String2')
  })

  scenario('deletes a car', async (scenario) => {
    const original = await deleteCar({ id: scenario.car.one.id })
    const result = await car({ id: original.id })

    expect(result).toEqual(null)
  })
})
