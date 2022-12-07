const express = require('express');
const { isAuthenticated } = require('../../middlewares');
const { getAllPosts, getPostsOfUser, createNewPost } = require('./post.service');


const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { userId } = req.payload;
        const user = await getAllPosts();
        delete user.password;
        res.json(user);
    } catch (err) {
        next(err);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await getPostsOfUser(id);
        res.json(user);
    } catch (err) {
        next(err);
    }
});
router.post('/create', isAuthenticated, async (req, res, next) => {
    try {
        const { title, content, userId } = req.body;
        const user = await createNewPost(title, content, userId);
        res.json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
