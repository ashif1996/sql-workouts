// Search for users by name (case-insensitive).

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});

const searchUsersByName = async (searchTerm) => {
    try {
        await client.connect();

        const query = `
            SELECT * FROM users WHERE LOWER(name) LIKE LOWER($1);
        `;
        
        const result = await client.query(query, [`%${searchTerm}%`]);
        console.log("Users found:", result.rows);
    } catch (err) {
        console.error("Error searching users:", err.message);
    } finally {
        await client.end();
    }
};

searchUsersByName("Ashif");