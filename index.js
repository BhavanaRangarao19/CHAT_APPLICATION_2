// Import necessary modules
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Create an Express app and an HTTP server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Simple function to generate a bot response based on user input
const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check the user message and return an appropriate bot response
    if (lowerCaseMessage.includes("hello")) {
        return "Hi there! How can I assist you today?";
    } else if (lowerCaseMessage.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (lowerCaseMessage.includes("help")) {
        return "I'm here to help! What do you need assistance with?";
    } else if (lowerCaseMessage.includes("explain about trees")) {
        return "Trees are perennial plants that have an elongated stem, or trunk, supporting branches and leaves. They play a vital role in producing oxygen, improving air quality, conserving water, and providing habitats for many species.";
    } else if (lowerCaseMessage.includes("explain about earth")) {
        return "Earth is the third planet from the Sun and the only known planet to support life. It has a diverse environment with oceans, land, and a breathable atmosphere, sustaining a wide range of life forms.";
    } else if (lowerCaseMessage.includes("explain about human body")) {
        return "The human body is a complex system made up of various organs and tissues working together to perform essential functions. It includes the skeletal, muscular, circulatory, respiratory, digestive, and nervous systems, each with specific roles in maintaining health and life.";
    } else {
        return "Sorry, I didn't understand that. Can you ask something else?"; // Default response if no match
    }
};

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id); // Log when a user connects

    // Listen for 'chat message' event from the client
    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg); // Log the received message

        // Generate a bot response based on the user message
        const botReply = getBotResponse(msg);

        // Send the bot response to the user only
        socket.emit('chat message', botReply);
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id); // Log when a user disconnects
    });
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));