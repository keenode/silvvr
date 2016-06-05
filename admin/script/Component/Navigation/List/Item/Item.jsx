import React from 'react'
import { Link } from 'react-router'
import styles from './Item.scss'

const Item = (props) => (
  <li className={styles.Item + (props.index === 0 ? ' ' + styles.ActiveItem : '')}>
    <Link to={props.url}>{props.text}</Link>
  </li>
)

Item.propTypes = {
  index: React.PropTypes.number,
  text: React.PropTypes.string,
  url: React.PropTypes.string
}

export default Item
