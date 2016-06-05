import React from 'react'
import _ from 'lodash'
import Item from './Item/Item'
import styles from './List.scss'

const List = (props) => (
  <ul className={styles.List}>
    {_.map(props.items, (item, index) => {
      return (
        <Item key={index} index={index} text={item.text} url={item.url} />
      )
    })}
  </ul>
)

List.propTypes = {
  items: React.PropTypes.array
}

export default List
