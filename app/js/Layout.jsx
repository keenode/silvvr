const React = require('react')

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.object
}

module.exports = Layout
