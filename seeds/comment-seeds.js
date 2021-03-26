const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 4,
        comment_text: "You know it, Professor! Your firmly held belief that Werstrom must die aligns with my desire to kill all humans. We are truly kindred spirits."
    },
    {
        user_id: 6,
        post_id: 2,
        comment_text: "Scruffy would like to offer what little he has to support this noble cause."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I'm pretty sure a condition of the settlement is that you aren't allowed to talk about it publicly. You should probably take this post down, Zoidberg."
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Professy will help!"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_text: "I couldn't agree more!"
    },
    {
        user_id: 6,
        post_id: 2,
        comment_text: "Scruffy has never been more excited for new technology."
    },
    {
        user_id: 4, 
        post_id: 5,
        comment_text: "Hooray for the robot!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;