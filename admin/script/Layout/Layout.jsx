import React from 'react'
import TopBar from '../Component/TopBar/TopBar'
import Navigation from '../Component/Navigation/Navigation'
import styles from './Layout.scss'

const Layout = (props) => (
  <div className={styles.Container}>
    <TopBar />
    <Navigation />
    <section className={styles.Content}>
      <div className={styles.ContentInner}>
        {props.children}
      </div>
    </section>
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element
}

export default Layout
