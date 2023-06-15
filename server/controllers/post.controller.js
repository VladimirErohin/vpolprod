//для запроссов (for requests)
const db = require('../db');

class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body;
        const newPost = await db.query(
            `INSERT INTO posts(title, content, user_id ) VALUES ($1, $2, $3) RETURNING *`,
            [title, content, userId]);
        res.json(newPost.rows[0])
    }

    async getPostByUser(req, res) {
        const id = req.query.id
        const posts = await db.query(`select * from posts where user_id = $1`, [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()