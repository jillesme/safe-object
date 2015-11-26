### safe-object

How many times have you seen `Uncaught TypeError: Cannot read property 'something' of undefined`?!

Well no more! `safe-object` to the rescue. Here is how to use it:

``` javascript
var so = require('safe-object');

var obj = { 
    user: {
        name: 'Jilles',
        demo: true
    }
}

// causes an error
if (obj.user.details.age) {
    console.log('oops');
}

// works, but ugly
if (obj.user && obj.user.details && obj.user.details.age) {
    console.log('meh');
}

// just skips the statement
if (so(obj, 'user.details.age')) {
    console.log('yaaay');
}
```
