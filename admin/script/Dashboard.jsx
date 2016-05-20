import React from 'react'
// import ReactRouter from 'react-router'
// import { Link, browserHistory } from ReactRouter
import { connector } from './Store'

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Dashboard Page</h1>
      </div>
    )
  }
}

module.exports = connector(Dashboard)
