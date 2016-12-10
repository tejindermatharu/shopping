angular
    .module('app')
    // declare the "Store" or whatever name that make sense
    // for you to call it (Model, State, etc.)
    .factory('Store', Store);

function Store ()  {
    
    // hold a local copy of the state, setting its defaults
    const initialDefaultState = {
        nav: {
            viewType: 'data',
            itemsCount: 0
        },
        data: {
             viewType: 'grid'
        }
    };

    var state = angular.copy(initialDefaultState);

    function subscribe(type) {
        return state[type];
    };

    function dispatch(type, payload) {
        angular.extend(state[type], payload);
    };

    // expose basic getter and setter methods
    return {
        subscribe: subscribe,
        dispatch: dispatch
    };
};