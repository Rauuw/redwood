import { db } from 'src/lib/db'

export const companies = () => {
  return db.company.findMany()
}

export const company = ({ id }) => {
  return db.company.findUnique({
    where: { id },
  })
}

export const createCompany = ({ input }) => {
  return db.company.create({
    data: input,
  })
}

export const updateCompany = ({ id, input }) => {
  return db.company.update({
    data: input,
    where: { id },
  })
}

export const deleteCompany = ({ id }) => {
  return db.company.delete({
    where: { id },
  })
}

export const Company = {
  trucks: (_obj, { root }) => {
    return db.company.findUnique({ where: { id: root?.id } }).trucks()
  },
  drivers: (_obj, { root }) => {
    return db.company.findUnique({ where: { id: root?.id } }).drivers()
  },
  details: (_obj, { root }) => {
    return db.company.findUnique({ where: { id: root?.id } }).details()
  },
}
