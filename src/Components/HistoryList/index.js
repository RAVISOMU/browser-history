import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryList extends Component {
  state = {searchInput: '', updatedHistoryList: initialHistoryList}

  onUserInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteHistoryItem = id => {
    const {updatedHistoryList} = this.state
    const filteredHistoryList = updatedHistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({updatedHistoryList: filteredHistoryList})
  }

  render() {
    const {searchInput, updatedHistoryList} = this.state
    const filteredHistoryList = updatedHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="history-list-container">
        <div className="history-list-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              placeholder="Search history"
              type="search"
              className="search-input"
              onChange={this.onUserInput}
            />
          </div>
        </div>
        {filteredHistoryList.length === 0 && (
          <p className="indicator">There is no history to show</p>
        )}
        {filteredHistoryList.length >= 1 && (
          <ul className="list-container">
            {filteredHistoryList.map(eachHistory => (
              <HistoryItem
                onDeleteHistoryItem={this.onDeleteHistoryItem}
                eachHistory={eachHistory}
                key={eachHistory.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default HistoryList
