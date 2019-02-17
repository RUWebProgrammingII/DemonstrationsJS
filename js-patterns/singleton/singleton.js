
// Basic simpleton
var basicSingleton = {
    x: 1,
    y: 2,
    sum: function() { return this.x + this.y; }
};

// Singleton using closures
var singletonUsingClosures = function() {
    var privateVariable = 'I\'m a private variable!';

    function showPrivateVariable() {
        console.log(privateVariable);
    };

    return {
        exposedMethod: function() {
            showPrivateVariable();
        },
        publicVariables: 'I\'m a public variables!'
    };
};

// Singleton with a single instantiation
var singletonUsingSingleInstantiation = (function() {
    var instantiated;

    function init() {
        return {
            exposedMethod: function() {
                console.log('I\'m exposed!');
            },
            publicProperty: 'I\'m public!'
        };
    };

    return {
        getInstance: function() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();
