import React from 'react'
import { Link } from 'react-router'
import styles from './NavigationItem.scss'

const NavigationItem = (props) => (
  <li className={styles.Item}>
    <Link to={props.url}>{props.text}</Link>
  </li>
)

NavigationItem.propTypes = {
  text: React.PropTypes.string,
  url: React.PropTypes.string
}

export default NavigationItem
