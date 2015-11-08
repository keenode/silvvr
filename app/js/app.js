/**
 * app.js
 * Application main script.
*/

class HelloWorld {
    constructor() {
        console.log('HelloWorld class init.');
    }

    sayHello() {
        console.log('Hello!');
    }
}

var hello = new HelloWorld();
hello.sayHello();
