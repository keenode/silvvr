import { Component } from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './Navigation.scss'
import _ from 'lodash'

const navItems = [
  { text: 'Dashboard', url: '/dashboard' },
  { text: 'Content', url: '/content' },
  { text: 'Components', url: '/components' },
  { text: 'Modules', url: '/modules' },
  { text: 'Theme', url: '/theme' }
]

class Navigation extends Component {
  render () {
    return (
      <nav className={styles.Container}>
        <ul>
          {_.map(navItems, (item, index) => {
            return (
              <NavigationItem key={index} text={item.text} url={item.url} />
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navigation
