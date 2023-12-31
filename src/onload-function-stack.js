// noinspection JSUnusedGlobalSymbols

/*
    Onload Function Stack
    ---------------------
    Manages loading additional functions to the onload event.
    https://github.com/ministryotech/onload-function-stack
*/
(function() {

    var root = window

    /**
     * Adds an event to the onload queue.
     * @param {function} func The function to add to the queue.
     * @param {?any} param1 The first (optional) parameter to the function.
     * @param {?any} param2 The second (optional) parameter to the function.
     */
    var addLoadEvent = function(func, param1, param2) {
        if (func === undefined || func === null)
            throw Error('Unable to load an event for an undefined or null function pointer (from ' + Function.caller + ').')

        if (typeof window.onload !== 'function') {
            if (typeof func !== 'function') {
                window.onload = func
            } else {
                window.onload = function() {
                    func(param1, param2)
                }
            }
        } else {
            var oldOnLoad = window.onload
            window.onload = function(ev) {
                if (oldOnLoad) oldOnLoad(ev)
                func(param1, param2)
            }
        }
    }

    /**
     * Manages a stack of events that will trigger on page load.
     * @type {{add: addLoadEvent}}
     */
    var StackManager = {
        add: addLoadEvent,
    }

    /*--------------------------------------------------------------------------*/

    // Export library
    // noinspection JSUnresolvedReference - define check for require.js module support.
    if (typeof define === 'function' && define.amd) {
        // noinspection JSUnresolvedReference - define check for require.js module support.
        define('onload-function-stack', [], function() {
            return StackManager
        })
    } else if (typeof exports === 'object') {
        module.exports = StackManager
    } else {
        root.OnLoadStack = StackManager
    }

})()
