import { actions } from '@/module'

describe('actions', () => {
  test('actionOne', () => {
    expect(actions.actionOne()).toEqual('one')
  })
})
