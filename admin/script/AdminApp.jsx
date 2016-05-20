import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'
import Dashboard from './Dashboard'
import Components from './Components'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { store } from './Store'
import { Provider } from 'react-redux'

const myRoutes = (props) => (
  <Route path='/admin' component={Layout}>
    <IndexRoute component={Dashboard} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/components' component={Components} />
  </Route>
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router routes={myRoutes()} history={browserHistory} />
      </Provider>
    )
  }
}

App.Routes = myRoutes
App.History = browserHistory

ReactDOM.render(<App />, document.getElementById('app'))

module.exports = App

