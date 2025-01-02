// Retrieve data from the table.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});


const getUsers = async () => {
    const query = `SELECT * FROM users`;

    try {
        const res = await client.query(query);
        console.log("Users:", res.rows);
    } catch (err) {
        console.error("Error fetching data:", err.message);
    }
};

getUsers();