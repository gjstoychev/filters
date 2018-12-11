import { createSelector } from 'reselect'

export const itemsSelector = state => state.fruits.items

export const nameFilterSelector = state => state.fruits.filter.name
export const typeFilterSelector = state => state.fruits.filter.type

export const selectionSelector = state => state.fruits.selection

export const nameFilteredFruitsSelector = createSelector(
  [itemsSelector, nameFilterSelector],
  (fruits, nameFilter) => {
    if (nameFilter) {
      const filteredFruits = Object.values(fruits).filter(e => e.name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1)
      return filteredFruits
    }

    const arrayOfFruits = Object.keys(fruits).map(id => fruits[id])
    return arrayOfFruits
  }
)

export const typeFilteredFruitsSelector = createSelector(
  [nameFilteredFruitsSelector, typeFilterSelector],
  (fruits, typeFilter) => {
    if (typeFilter) {
      const filteredFruits = Object.values(fruits).filter(e => e.type.toLowerCase().indexOf(typeFilter.toLowerCase()) > -1)
      return filteredFruits
    }

    const arrayOfFruits = Object.keys(fruits).map(id => fruits[id])
    return arrayOfFruits
  }
)

export const selectedFruitsSelector = createSelector(
  [typeFilteredFruitsSelector, selectionSelector],
  (fruits, selection) => {
    if (!selection) return fruits

    if (selection !== 'all') {
      const selectedFruits = Object.values(fruits).filter(e => e.color.indexOf(selection) > -1)
      return selectedFruits
    }
    
    const arrayOfFruits = Object.keys(fruits).map(id => fruits[id])
    return arrayOfFruits
  }
)