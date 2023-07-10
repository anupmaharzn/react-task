import { ActionType } from './action-constant'
import { InsertCellAfterAction, DeleteCellAction } from './action-types'
import { cellType } from './cell'

export const insertCellAfter = (
  id: string | null,
  cellType: cellType
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  }
}

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  }
}
