# CHAT_APPLICATION_2

# Real-Time Chat Application

A simple real-time chat application that allows users to chat with a bot using Node.js, Express, and Socket.IO. The bot provides predefined responses based on user input.

---

## Features

- Real-time messaging between the user and the bot.
- Predefined bot responses for specific user queries.
- Responsive UI with a clean design.
- Includes a guide to interact with the bot.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/real-time-chat-app.git
2. Navigate to the project directory:
   cd real-time-chat-app
3. Install dependencies:
   npm install
4. Start the server:
   npm start
5.Open your browser and go to:
  http://localhost:3000

## Folder Structure
.
├── public/
│   ├── index.html       # Frontend for the chat application
│   ├── style.css        # Styling for the chat UI (inline in this case)
│   └── script.js        # Client-side Socket.IO logic (embedded inline)
├── index.js             # Backend server and bot logic
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Lockfile for reproducible installations
└── README.md            # Project documentation

## Bot Interaction Guide
Here are some example messages you can use to interact with the bot:
"Hello": Greet the bot.
"How are you?": Ask the bot how it is doing.
"Bye": Say goodbye.
"Help": Ask for help.
"Explain about trees": Learn about trees.
"Explain about earth": Learn about the earth.
"Explain about the human body": Learn about the human body.
If the bot doesn't recognize your message, it will respond with a default reply.

## Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Real-Time Communication: Socket.IO

