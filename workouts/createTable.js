// Write a query to create a basic table.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});


const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        );
    `;

    try {
        await client.query(query);
        console.log("Table 'users' created or already exists.");
    } catch (err) {
        console.error("Error creating table:", err.message);
    }
};

createTable();