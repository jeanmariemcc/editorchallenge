import {
  projFiles,
  projFile,
  createProjFile,
  updateProjFile,
  deleteProjFile,
} from './projFiles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('projFiles', () => {
  scenario('returns all projFiles', async (scenario) => {
    const result = await projFiles()

    expect(result.length).toEqual(Object.keys(scenario.projFile).length)
  })

  scenario('returns a single projFile', async (scenario) => {
    const result = await projFile({ id: scenario.projFile.one.id })

    expect(result).toEqual(scenario.projFile.one)
  })

  scenario('creates a projFile', async (scenario) => {
    const result = await createProjFile({
      input: {
        filename: 'String',
        language: 'String',
        content: 'String',
        projectId: scenario.projFile.two.projectId,
        updatedAt: '2023-10-15T12:27:31.266Z',
      },
    })

    expect(result.filename).toEqual('String')
    expect(result.language).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.projectId).toEqual(scenario.projFile.two.projectId)
    expect(result.updatedAt).toEqual(new Date('2023-10-15T12:27:31.266Z'))
  })

  scenario('updates a projFile', async (scenario) => {
    const original = await projFile({
      id: scenario.projFile.one.id,
    })
    const result = await updateProjFile({
      id: original.id,
      input: { filename: 'String2' },
    })

    expect(result.filename).toEqual('String2')
  })

  scenario('deletes a projFile', async (scenario) => {
    const original = await deleteProjFile({
      id: scenario.projFile.one.id,
    })
    const result = await projFile({ id: original.id })

    expect(result).toEqual(null)
  })
})
