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
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

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
