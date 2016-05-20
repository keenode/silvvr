const React = require('react')
const Navigation = require('./Component/Navigation/Navigation')

const Layout = (props) => (
  <div className='admin-container'>
    <Navigation />
    <section className='admin-page-content'>
      {props.children}
    </section>
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element
}

module.exports = Layout
