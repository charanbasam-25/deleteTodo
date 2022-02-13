// Write your code here
import './index.css'

const TodoItem = props => {
  const {cardDetails, deleteUser} = props
  const {title, id} = cardDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="each-item-container">
      <p className="each-item-title">{title}</p>
      <div className="button-container">
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
