var Alexa = require('alexa-sdk');

var helloWorldOutput = 'Hello Andy and Sarah';

var alexa;

var handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function() {
        this.emit(':tell', helloWorldOutput);
    },

    "AMAZON.HelpIntent": function () {
        this.emit(':ask', 'You can say just say hello at the moment, or, you can say exit... What can I help you with?', 'What can I help you with?');
    },

    "AMAZON.StopIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "AMAZON.CancelIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    }
};

exports.handler = function(event, context, callback) {
    alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};