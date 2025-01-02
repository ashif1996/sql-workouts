// Delete the entire table.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});


const dropTable = async () => {
    const query = `DROP TABLE IF EXISTS users`;

    try {
        await client.query(query);
        console.log("Table 'users' dropped.");
    } catch (err) {
        console.error("Error dropping table:", err.message);
    }
};

dropTable();