// noinspection JSUnusedGlobalSymbols

/*
    Onload Function Stack
    ---------------------
    Manages loading additional functions to the onload event.
    https://github.com/ministryotech/onload-function-stack
*/

/**
 * Manages a stack of events that will trigger on page load.
 */
export default {

    /**
     * Adds an event to the onload queue.
     * @param func The function to add to the queue.
     * @param param1 The first (optional) parameter to the function.
     * @param param2 The second (optional) parameter to the function.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    add: function(func: Function | null, param1: unknown | null, param2: unknown | null) {
        if (func === undefined || func === null)
            throw Error('Unable to load an event for an undefined or null function pointer (from ' + Function.caller + ').')

        if (typeof window.onload !== 'function') {
            if (typeof func === 'function') {
                // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
                window.onload = (_event) => {
                    func(param1, param2)
                }
            }
        } else {
            const oldOnLoad: ((_event:Event) => unknown) = window.onload
            window.onload = (event) => {
                if (oldOnLoad) oldOnLoad(event)
                func(param1, param2)
            }
        }
    },
}
