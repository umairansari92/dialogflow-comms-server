exports.handler = function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
    const dialogflowUrl = 'https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent';

    twiml.say({ language: 'de-DE' }, 'Willkommen!');

    twiml.redirect({
        method: 'POST',
    }, dialogflowUrl);

    callback(null, twiml);
};
