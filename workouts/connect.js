// Create a basic connection to the database.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log("Connected to the PostgreSQL database.");
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
};

connectToDatabase();