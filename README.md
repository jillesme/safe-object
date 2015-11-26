### safe-object

How many times have you seen `Uncaught TypeError: Cannot set property 'someting' of undefined`?!

Well no more! `safe-object` to the rescue. Here is how to use it:

``` javascript
var so = require('safe-object');

var obj = {
  nested: {
    property: {
      value: 'demo'
    }
  }
};

console.log(so(obj, 'nested.property.value')) // demo
console.log(so(obj, 'nested.unexisting.value')) // undefined, instead of error!
```

###  "api"

It's a really simple helper tool.

`so(root{}, properties'')`
`root`: Root object, the one which properties you're "checking"
`properties`: A string, just like how you would access a normal object property value (in dot notation).
