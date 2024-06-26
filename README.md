# Dialogflow Comms Server

Dialogflow Comms Server is a backend system designed to integrate communication features with Dialogflow for handling conversational interactions. It provides a webhook endpoint that interfaces with Dialogflow to process user queries, manage conversations, and trigger actions such as making phone calls and sending emails.

## Features

- **Dialogflow Integration**: Seamlessly integrates with Dialogflow to handle natural language understanding and conversation management.
- **Calling Setup**: Provides functionality to make phone calls, allowing for interactive voice-based conversations.
- **Email Support**: Enables sending email notifications and summaries based on conversation outcomes.
- **Scalable Architecture**: Built with scalability in mind, allowing for easy expansion and customization as your project grows.
- **Secure**: Implements security best practices to ensure the confidentiality and integrity of user data.

## Installation

To set up the Dialogflow Comms Server, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/umairansari92/dialogflow-comms-server.git
cd dialogflow-comms-server
2. Install Dependencies
Navigate to the project directory and install the required dependencies:

bash
Copy code
npm install
3. Set Environment Variables
Create a .env file in the root directory and set the following environment variables:

plaintext
Copy code
GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/service-account-file.json
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Replace /path/to/your/service-account-file.json with the path to your Dialogflow service account JSON file, and your-email@gmail.com and your-email-password with your Gmail credentials for sending emails.

4. Start the Server
Start the server by running the following command:

bash
Copy code
node server.js
5. Configure Dialogflow Webhook
In your Dialogflow agent settings, set the webhook URL to http://your-server-url/webhook.

Usage
Once the server is running and configured, you can start interacting with your Dialogflow agent using natural language queries. The server will handle the communication with Dialogflow and execute actions such as making phone calls or sending emails based on conversation outcomes.

Contributing
Contributions are welcome! If you have suggestions, feature requests, or bug reports, please open an issue or create a pull request.

License
This project is licensed under the MIT License.
MIT License

Copyright (c) 2024 umairansari92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
