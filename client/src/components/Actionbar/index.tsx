import { deleteCell } from '../../redux/state/action-creator'
import { useAppDispatch } from '../../redux/store'
import './styles.css'
type ActionBarProps = {
  id: string
}
const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="action-bar">
      <button className="bar-btn" onClick={() => dispatch(deleteCell(id))}>
        {' '}
        <span className="bar-icon">
          <i className="bi bi-x"></i> Remove
        </span>
      </button>
    </div>
  )
}

export default ActionBar
