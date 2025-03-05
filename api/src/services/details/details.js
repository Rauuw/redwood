import { db } from 'src/lib/db'

export const details = () => {
  return db.detail.findMany()
}

export const detail = ({ id }) => {
  return db.detail.findUnique({
    where: { id },
  })
}

export const createDetail = ({ input }) => {
  return db.detail.create({
    data: input,
  })
}

export const updateDetail = ({ id, input }) => {
  return db.detail.update({
    data: input,
    where: { id },
  })
}

export const deleteDetail = ({ id }) => {
  return db.detail.delete({
    where: { id },
  })
}

export const Detail = {
  order: (_obj, { root }) => {
    return db.detail.findUnique({ where: { id: root?.id } }).order()
  },
  company: (_obj, { root }) => {
    return db.detail.findUnique({ where: { id: root?.id } }).company()
  },
}
