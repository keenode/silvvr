import { Component } from 'react'
import styles from './TopBar.scss'

class TopBar extends Component {
  render () {
    return (
      <nav className={styles.TopBar}>
        <ul className={styles.List}>
          <li className={styles.ListItem}><a href='#'>My Site</a></li>
        </ul>
      </nav>
    )
  }
}

export default TopBar
