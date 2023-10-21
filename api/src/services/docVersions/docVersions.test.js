import {
  docVersions,
  docVersion,
  createDocVersion,
  updateDocVersion,
  deleteDocVersion,
} from './docVersions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('docVersions', () => {
  scenario('returns all docVersions', async (scenario) => {
    const result = await docVersions()

    expect(result.length).toEqual(Object.keys(scenario.docVersion).length)
  })

  scenario('returns a single docVersion', async (scenario) => {
    const result = await docVersion({ id: scenario.docVersion.one.id })

    expect(result).toEqual(scenario.docVersion.one)
  })

  scenario('creates a docVersion', async (scenario) => {
    const result = await createDocVersion({
      input: { projFileId: scenario.docVersion.two.projFileId },
    })

    expect(result.projFileId).toEqual(scenario.docVersion.two.projFileId)
  })

  scenario('updates a docVersion', async (scenario) => {
    const original = await docVersion({
      id: scenario.docVersion.one.id,
    })
    const result = await updateDocVersion({
      id: original.id,
      input: { projFileId: scenario.docVersion.two.projFileId },
    })

    expect(result.projFileId).toEqual(scenario.docVersion.two.projFileId)
  })

  scenario('deletes a docVersion', async (scenario) => {
    const original = await deleteDocVersion({
      id: scenario.docVersion.one.id,
    })
    const result = await docVersion({ id: original.id })

    expect(result).toEqual(null)
  })
})
