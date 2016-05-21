import React from 'react'
import _ from 'lodash'
import NavigationItem from '../NavigationItem/NavigationItem'
import styles from './NavigationList.scss'

const NavigationList = (props) => (
  <ul className={styles.List}>
    {_.map(props.items, (item, index) => {
      return (
        <NavigationItem key={index} text={item.text} url={item.url} />
      )
    })}
  </ul>
)

NavigationList.propTypes = {
  items: React.PropTypes.array
}

export default NavigationList
