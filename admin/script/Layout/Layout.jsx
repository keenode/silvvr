import React from 'react'
import TopBar from '../Component/TopBar/TopBar'
import Navigation from '../Component/Navigation/Navigation'
import styles from './Layout.scss'

const Layout = (props) => (
  <div className={styles.AppContainer}>
    <TopBar />
    <Navigation />
    <section className={styles.AppContent}>
      <div className={styles.AppContentInner}>
        {props.children}
      </div>
    </section>
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element
}

export default Layout
