const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { SessionsClient } = require('@google-cloud/dialogflow');
const uuid = require('uuid');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const sessionClient = new SessionsClient();
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

app.get('/', (req, res) => {
    res.send('Dialogflow Webhook Server is running');
});

app.post('/webhook', async (req, res) => {
    const sessionId = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath('YOUR_PROJECT_ID', sessionId);

    const query = req.body.queryResult.queryText;
    const languageCode = 'de'; // German

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: languageCode,
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        const intentName = result.intent.displayName;

        let responseText = result.fulfillmentText;

        if (intentName === 'End Conversation') {
            const userResponses = result.parameters.fields;
            const userEmail = 'example@domain.com';  // The email address to send the conversation summary

            const mailOptions = {
                from: emailUser,
                to: userEmail,
                subject: 'Conversation Summary',
                text: JSON.stringify(userResponses, null, 2),
            };

            sendEmail(mailOptions);
        }

        res.json({
            fulfillmentText: responseText,
        });
    } catch (error) {
        console.error('Dialogflow API error: ', error);
        res.status(500).send('Error processing request');
    }
});

const sendEmail = (mailOptions) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailUser,
            pass: emailPass,
        },
    });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

app.listen(3000, () => {
    console.log('Webhook server is running on port 3000');
});
