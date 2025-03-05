import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('companies', () => {
  scenario('returns all companies', async (scenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async () => {
    const result = await createCompany({
      input: {
        name: 'String',
        address: 'String',
        phone: 'String',
        email: 'String6707104',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.address).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.email).toEqual('String6707104')
  })

  scenario('updates a company', async (scenario) => {
    const original = await company({ id: scenario.company.one.id })
    const result = await updateCompany({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a company', async (scenario) => {
    const original = await deleteCompany({
      id: scenario.company.one.id,
    })
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
