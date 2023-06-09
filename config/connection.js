const { connect, connection } = require("mongoose");

const connectionString = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/socialmediaDB";

// Connect to the Mongo DB
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;