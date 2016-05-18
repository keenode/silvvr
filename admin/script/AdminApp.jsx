const React = require('react')
const Layout = require('./Layout')
const Dashboard = require('./Dashboard')
const ReactRouter = require('react-router')
const { Router, Route, browserHistory, IndexRoute } = ReactRouter
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux

const myRoutes = (props) => (
  <Route path='/' component={Layout}>
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

module.exports = App
