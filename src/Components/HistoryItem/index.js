import './index.css'

const HistoryItem = props => {
  const {eachHistory, onDeleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onClickDeleteButton = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-details-bg-container">
        <div className="history-details-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          onClick={onClickDeleteButton}
          className="delete-button"
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
