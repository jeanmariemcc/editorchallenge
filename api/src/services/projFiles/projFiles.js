import { db } from 'src/lib/db'

export const projFiles = () => {
  return db.projFile.findMany()
}

export const projFile = ({ id }) => {
  return db.projFile.findUnique({
    where: { id },
  })
}

export const createProjFile = ({ input }) => {
  return db.projFile.create({
    data: input,
  })
}

export const updateProjFile = ({ id, input }) => {
  return db.projFile.update({
    data: input,
    where: { id },
  })
}

export const deleteProjFile = ({ id }) => {
  return db.projFile.delete({
    where: { id },
  })
}

export const ProjFile = {
  project: (_obj, { root }) => {
    return db.projFile.findUnique({ where: { id: root?.id } }).project()
  },
  docVersion: (_obj, { root }) => {
    return db.projFile.findUnique({ where: { id: root?.id } }).docVersion()
  },
}
