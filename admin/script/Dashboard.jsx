const React = require('react')
// const ReactRouter = require('react-router')
// const { Link, browserHistory } = ReactRouter
const Store = require('./Store')
const { connector } = Store

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
