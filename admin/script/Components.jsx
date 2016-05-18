const React = require('react')
const Store = require('./Store')
const { connector } = Store

class Components extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Components Page</h1>
      </div>
    )
  }
}

module.exports = connector(Components)
