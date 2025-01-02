// Update data from the table.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});


const updateUser = async (name, email) => {
    const query = `UPDATE users SET name = $1 WHERE email = $2 RETURNING *`;

    try {
        const res = await client.query(query, [name, email]);
        console.log("Updated user:", res.rows[0]);
    } catch (err) {
        console.error("Error updating data:", err.message);
    }
};

updateUser("Muhammad Ashil", "ashil@example.com");