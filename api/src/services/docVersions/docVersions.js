import { db } from 'src/lib/db'

export const docVersions = () => {
  return db.docVersion.findMany()
}

export const docVersion = ({ id }) => {
  return db.docVersion.findUnique({
    where: { id },
  })
}

export const createDocVersion = ({ input }) => {
  return db.docVersion.create({
    data: input,
  })
}

export const updateDocVersion = ({ id, input }) => {
  return db.docVersion.update({
    data: input,
    where: { id },
  })
}

export const deleteDocVersion = ({ id }) => {
  return db.docVersion.delete({
    where: { id },
  })
}

export const DocVersion = {
  projFile: (_obj, { root }) => {
    return db.docVersion.findUnique({ where: { id: root?.id } }).projFile()
  },
}
