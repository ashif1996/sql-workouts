// Retrieve posts along with their author's details.

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test_db",
});

const getPostsWithAuthors = async () => {
    try {
        await client.connect();

        const query = `
            SELECT 
                posts.title, 
                posts.content, 
                users.name AS author_name, 
                users.email AS author_email,
            FROM posts
            INNER JOIN users ON posts.user_id = users.id;
        `;

        const result = await client.query(query);
        console.log("Posts with authors:", result.rows);
    } catch (err) {
        console.error("Error fetching posts with authors:", err.message);
    } finally {
        await client.end();
    }
};

getPostsWithAuthors();