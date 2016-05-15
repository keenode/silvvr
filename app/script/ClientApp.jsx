const React = require('react')
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')
const ReactRouter = require('react-router')
const { Router, Route, browserHistory, IndexRoute } = ReactRouter
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux

const myRoutes = (props) => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
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
