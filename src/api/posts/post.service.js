const { db } = require('../../utils/db');

const getAllPosts = () => {
    return db.post.findMany();
}
const getPostsOfUser = (userId) => {
    return db.post.findMany({
        where: {
            authorId: userId
        }
    });
}

const createNewPost = (title, content, userId) => {
    return db.post.create({
        data: {
            title: title,
            content: content,
            authorId: userId
        }
    });
}
const deletePosts = (userId, ids) => {
    return db.post.deleteMany({
        where: {
            authorId: userId,
            id: {
                in: ids
            }
        }
    });
}
module.exports = {
    getAllPosts,
    getPostsOfUser,
    createNewPost,
    deletePosts
}