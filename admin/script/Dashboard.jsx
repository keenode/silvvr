import React from 'react'
// import ReactRouter from 'react-router'
// import { Link, browserHistory } from ReactRouter
import { connector } from './Store'

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h2>Dashboard Page</h2>
        <p>Hello, World!</p>
      </div>
    )
  }
}

export default connector(Dashboard)
