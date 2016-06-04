import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { store } from './Store'
import { Provider } from 'react-redux'
import Layout from './Layout'
import Dashboard from './Container/Dashboard/Dashboard'
import Content from './Container/Content/Content'
import Components from './Container/Components/Components'
import Modules from './Container/Modules/Modules'
import Styleguide from './Container/Styleguide/Styleguide'

const myRoutes = (props) => (
  <Route path='/admin' component={Layout}>
    <IndexRoute component={Dashboard} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/content' component={Content} />
    <Route path='/components' component={Components} />
    <Route path='/modules' component={Modules} />
    <Route path='/styleguide' component={Styleguide} />
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

export default App
