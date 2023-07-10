import { ActionType } from './action-constant'
import { cellType } from './cell'

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL
  payload: string
}

export interface InsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER
  payload: {
    id: string | null
    type: cellType
  }
}

export type Action = InsertCellAfterAction | DeleteCellAction
