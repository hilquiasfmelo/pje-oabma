import { State } from './data'

export function sortStatesAlphabetically(statesData: State[]) {
  return statesData.sort((a, b) => a.name.localeCompare(b.name))
}
