import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orders', () => {
  scenario('returns all orders', async (scenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async () => {
    const result = await createOrder({
      input: {
        origin: 'String',
        destination: 'String',
        date: '2025-03-05T20:01:20.014Z',
        status: 'String',
        updatedAt: '2025-03-05T20:01:20.014Z',
      },
    })

    expect(result.origin).toEqual('String')
    expect(result.destination).toEqual('String')
    expect(result.date).toEqual(new Date('2025-03-05T20:01:20.014Z'))
    expect(result.status).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2025-03-05T20:01:20.014Z'))
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { origin: 'String2' },
    })

    expect(result.origin).toEqual('String2')
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
