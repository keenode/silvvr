/**
 * js/app
 * Application main script.
 * @author Keenan Staffieri
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
