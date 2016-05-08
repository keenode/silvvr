/**
 * js/app
 * Application main script.
 * @author Keenan Staffieri
*/

const React = require('react')
const ReactDOM = require('react-dom')

const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>kvideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'>or Browse All</button>
    </div>
  </div>
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
