// state for dynamice form
import { produce } from 'immer'
import { ActionType } from './action-constant'
import { Action } from './action-types'
import { cell } from './cell'

type cellState = {
  order: string[] //collection of cell id
  data: {
    [key: string]: cell //key:cellid value=>cell interface actual form
  }
}
const randomId = () => {
  return Math.random().toString(36).substring(2, 5)
}

const initialState: cellState = {
  order: [],
  data: {},
}

const cellReducer = produce(
  (state: cellState = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.INSERT_CELL_AFTER:
        //create new cell
        const cell: cell = {
          type: action.payload.type,
          id: randomId(),
        }
        //add to data key:value
        state.data[cell.id] = cell
        //find the index of action.payload.id(to insert before this particular id)
        const foundIndex = state.order.findIndex(
          (id) => id === action.payload.id
        )
        //if not found id===null case
        //push it to first of the order array
        if (foundIndex < 0) {
          state.order.unshift(cell.id)
        } else {
          //add after foundIndex
          //so foundindex + 1 garnu parxa for after
          state.order.splice(foundIndex + 1, 0, cell.id)
        }
        return state
      case ActionType.DELETE_CELL:
        //delete form data
        delete state.data[action.payload]
        //delete from order
        state.order = state.order.filter((id) => id !== action.payload)
        return state
      default:
        return state
    }
  }
)

export default cellReducer
