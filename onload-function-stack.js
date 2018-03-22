/*
    Onload Function Stack
    ---------------------
    Manages loading additional functions to the onload event.

    https://github.com/ministryotech/onload-function-stack
*/
(function() {

    const root = window

    /**
     * Adds an event to the onload queue.
     * 
     * @param {function} func The function to add to the queue.
     * @param {any} param1 The first (optional) parameter to the function.
     * @param {any} param2 The second (optional) parameter to the function.
     */
    const addLoadEvent = function(func, param1, param2) {
        if (func === undefined || func === null)
            throw Error(`Unable to load an event for an undefined or null function pointer (from ${Function.caller}).`)

        if (typeof window.onload !== "function") {
            if (typeof func !== "function") {
                window.onload = func
            } else {
                window.onload = () => { func(param1, param2) }
            }
        } else {
            const oldonload = window.onload
            window.onload = () => {
                if (oldonload) { oldonload() }
                func(param1, param2)
            }
        }
    }

    const stackManager = {
        add: addLoadEvent
    }

    // Exports to the global scope
    if (typeof define === "function" && define.amd) {
        define("onload-function-stack", [], function() { return stackManager })
    } else if (typeof exports === "object") {
        module.exports = stackManager
    } else {
        root.OnLoadStack = stackManager
    }
    
})()