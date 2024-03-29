# Introduction
This project provides a single function that enables you to stack code into the window onload event so that various functions can all be executed in order.

Usage examples to show two dialog messages in turn when used as a package reference...

    var stackManager = require("onload-function-stack")
    
    var myFunc = function(msg) {
        alert(msg)
    }
    
    stackManager.add(myFunc, "Hello")
    stackManager.add(myFunc, "Hello Again")

or if used as a straight reference, it's available on the window object...

    var myFunc = function(msg) {
        alert(msg)
    }
    
    window.OnLoadStack.add(myFunc, "Hello")
    window.OnLoadStack.add(myFunc, "Hello Again")

# The Ministry of Technology Open Source Products
Welcome to The Ministry of Technology open source products. All open source Ministry of Technology products are distributed under the MIT License for maximum re-usability.
Our other open source repositories can be found here...

* [https://github.com/ministryotech](https://github.com/ministryotech)
* [https://github.com/tiefling](https://github.com/tiefling)

### Where can I get it?
You can download the package for this project from any of the following package managers...

- **NPM** - [https://www.npmjs.com/onload-function-stack](https://www.npmjs.com/onload-function-stack)

### Contribution guidelines
If you would like to contribute to the project, please contact me.

### Who do I talk to?
* Keith Jackson - temporal-net@live.co.uk
