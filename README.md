### safe-object

How many times have you seen `Uncaught TypeError: Cannot read property 'something' of undefined`?!

For example, the following code will produce a TypeError.

``` javascript
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
```

Well no more! `safe-object` to the rescue. Here is how to use it:

``` javascript
var so = require('safe-object');

// skip the statement if property is undefined
if (so(obj, 'user.details.age')) {
    console.log('yaaay');
}
```

Which is a lot cleaner than a plain JavaScript safe approach:

``` javascript
// works, but ugly
if (obj.user && obj.user.details && obj.user.details.age) {
    console.log('meh');
}
```
