import Form from '../Form'
import ActionBar from '../Actionbar'
import './styles.css'
type FormListItemProps = {
  id: string
}

const index: React.FC<FormListItemProps> = ({ id }) => {
  return (
    <div className="form-list-item">
      {' '}
      <div>
        <div className="action-bar-wrapper">
          <ActionBar id={id} />
        </div>
        <Form />
      </div>
    </div>
  )
}

export default index
