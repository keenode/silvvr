const React = require('react')
import Navigation from './Component/Navigation/Navigation'
import styles from './Layout.scss'

const Layout = (props) => (
  <div className={styles.AppContainer}>
    <Navigation />
    <section className={styles.AppContent}>
      {props.children}
    </section>
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element
}

module.exports = Layout
