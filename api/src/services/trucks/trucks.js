import { db } from 'src/lib/db'

export const trucks = () => {
  return db.truck.findMany()
}

export const truck = ({ id }) => {
  return db.truck.findUnique({
    where: { id },
  })
}

export const createTruck = ({ input }) => {
  return db.truck.create({
    data: input,
  })
}

export const updateTruck = ({ id, input }) => {
  return db.truck.update({
    data: input,
    where: { id },
  })
}

export const deleteTruck = ({ id }) => {
  return db.truck.delete({
    where: { id },
  })
}

export const Truck = {
  company: (_obj, { root }) => {
    return db.truck.findUnique({ where: { id: root?.id } }).company()
  },
}
