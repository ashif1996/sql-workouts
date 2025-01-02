// Delete data from the table.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});


const deleteUser = async (email) => {
    const query = `DELETE FROM users WHERE email = $1 RETURNING *`;

    try {
        const res = await client.query(query, [email]);
        console.log("Deleted user:", res.rows[0]);
    } catch (err) {
        console.error("Error deleting data:", err.message);
    }
};

deleteUser("ashif@example.com");