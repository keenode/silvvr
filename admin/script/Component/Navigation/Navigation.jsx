import { Component } from 'react'
import List from './List/List'
import styles from './Navigation.scss'

const navItems = [
  { text: 'Dashboard', url: 'dashboard' },
  { text: 'Content', url: 'content' },
  { text: 'Components', url: 'components' },
  { text: 'Modules', url: 'modules' },
  { text: 'Styleguide', url: 'styleguide' }
]

class Navigation extends Component {
  render () {
    return (
      <nav className={styles.Container}>
        <List items={navItems} />
      </nav>
    )
  }
}

export default Navigation
