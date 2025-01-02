// Create a posts table with a foreign key reference to a users table.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});

const createTables = async () => {
    try {
        await client.connect();

        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            );
        `;

        const createPostsTable = `
            CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                content TEXT NOT NULL,
                user_id INT REFERENCES users(id) ON DELETE CASCADE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            );
        `;

        await client.query(createUsersTable);
        await client.query(createPostsTable);

        console.log("Tables created successfully.");
    } catch (err) {
        console.error("Error creating tables:", err.message);
    } finally {
        await client.end();
    }
};

createTables();