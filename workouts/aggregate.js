// Count the number of posts each user has.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});

const countPostsPerUser = async () => {
    try {
        await client.connect();

        const query = `
            SELECT 
                users.name AS user_name, 
                COUNT(posts.id) AS post_count 
            FROM users
            LEFT JOIN posts ON users.id = posts.user_id
            GROUP BY users.name;
        `;

        const result = await client.query(query);
        console.log("Post count per user:", result.rows);
    } catch (err) {
        console.error("Error fetching post counts:", err.message);
    } finally {
        await client.end();
    }
};

countPostsPerUser();