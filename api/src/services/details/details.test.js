import {
  details,
  detail,
  createDetail,
  updateDetail,
  deleteDetail,
} from './details'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('details', () => {
  scenario('returns all details', async (scenario) => {
    const result = await details()

    expect(result.length).toEqual(Object.keys(scenario.detail).length)
  })

  scenario('returns a single detail', async (scenario) => {
    const result = await detail({ id: scenario.detail.one.id })

    expect(result).toEqual(scenario.detail.one)
  })

  scenario('creates a detail', async (scenario) => {
    const result = await createDetail({
      input: {
        id_order: scenario.detail.two.id_order,
        id_company: scenario.detail.two.id_company,
      },
    })

    expect(result.id_order).toEqual(scenario.detail.two.id_order)
    expect(result.id_company).toEqual(scenario.detail.two.id_company)
  })

  scenario('updates a detail', async (scenario) => {
    const original = await detail({ id: scenario.detail.one.id })
    const result = await updateDetail({
      id: original.id,
      input: { id_order: scenario.detail.two.id_order },
    })

    expect(result.id_order).toEqual(scenario.detail.two.id_order)
  })

  scenario('deletes a detail', async (scenario) => {
    const original = await deleteDetail({
      id: scenario.detail.one.id,
    })
    const result = await detail({ id: original.id })

    expect(result).toEqual(null)
  })
})
