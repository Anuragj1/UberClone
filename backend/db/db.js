const mongoose = require('mongoose');

function connectToDb() {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
        console.error('MONGO_URL is not defined in environment variables.');
        process.exit(1);
    }

    mongoose.connect(mongoUrl) 
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports = connectToDb;
