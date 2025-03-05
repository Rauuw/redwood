import { db } from 'src/lib/db'

export const drivers = () => {
  return db.driver.findMany()
}

export const driver = ({ id }) => {
  return db.driver.findUnique({
    where: { id },
  })
}

export const createDriver = ({ input }) => {
  return db.driver.create({
    data: input,
  })
}

export const updateDriver = ({ id, input }) => {
  return db.driver.update({
    data: input,
    where: { id },
  })
}

export const deleteDriver = ({ id }) => {
  return db.driver.delete({
    where: { id },
  })
}

export const Driver = {
  company: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).company()
  },
}
