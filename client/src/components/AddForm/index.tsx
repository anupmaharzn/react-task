import { insertCellAfter } from '../../redux/state/action-creator'
import { useAppDispatch } from '../../redux/store'
import './styles.css'
type AddCellProps = {
  prevCellId: string | null
  forceVisable?: boolean
}
const index: React.FC<AddCellProps> = ({ prevCellId, forceVisable }) => {
  const dispatch = useAppDispatch()
  return (
    <div className={`add-form `}>
      <div className={`add-buttons ${forceVisable && `force-visible`}`}>
        <button
          className="btn-default"
          onClick={() => dispatch(insertCellAfter(prevCellId, 'form'))}
        >
          <span className="">
            <i className="bi bi-plus"></i>
          </span>
          <span>Add Form</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default index
