/**
 * js/app
 * Application main script.
 * @author Keenan Staffieri
*/

// App.jsx
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter
const data = require('./data')

class App extends React.Component {

  constructor (props) {
    super(props)

    this.assignShow = this.assignShow.bind(this)
  }

  assignShow (nextState, replace) {
    const show = data.shows[nextState.params.id]
    if (!show) {
      return replace('/')
    }
    Object.assign(nextState.params, show)
    return nextState
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={data.shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

// class HelloWorld {
//     constructor() {
//         console.log('HelloWorld class initialized.');
//     }

//     sayHello() {
//         console.log('Hello!');
//     }
// }

// var hello = new HelloWorld();
// hello.sayHello();
