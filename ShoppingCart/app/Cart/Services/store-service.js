angular
    .module('app')
    // declare the "Store" or whatever name that make sense
    // for you to call it (Model, State, etc.)
    .service('Store', Store);

function Store ()  {
    
    // hold a local copy of the state, setting its defaults
    var initialDefaultState = {
        nav: {
            viewType: 'data',
            itemsCount: 0
        },
        data: {
             viewType: 'grid'
        }
    };

    var state = angular.copy(initialDefaultState);

    var previousState;

    function resetToDefault(action) {
        angular.extend(state[action.type], initialDefaultState[action.type]);
    }

    function subscribe(type) {
        return state[type];
    };

    function dispatch(action) {
        previousState = angular.copy(state);
        angular.extend(state[action.type], action.payload);
    };

    // expose basic getter and setter methods
    return {
        subscribe: subscribe,
        dispatch: dispatch
    };
};