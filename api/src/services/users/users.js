import { db } from 'src/lib/db'
import { hashPassword } from '@redwoodjs/auth-dbauth-api'
export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = async({ input }) => {
  const password = await hashPassword(input.password)
  return db.user.create({
    data: {
      email: input.email,
      password,
      id_role: input.id_role
    }
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  role: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).role()
  },
}
