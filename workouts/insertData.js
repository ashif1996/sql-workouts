// Insert data into the table using a query.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});


const insertUser = async (name, email) => {
    const query = `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`;

    try {
        const res = await client.query(query, [name, email]);
        console.log("User inserted:", res.rows[0]);
    } catch (err) {
        console.error("Error inserting data:", err.message);
    }
};

insertUser("Ashif Hassan", "ashif@example.com");