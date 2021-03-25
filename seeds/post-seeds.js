const { Post } = require('../models');

const postData = [
    {
        title: "New Space Captain app for wrist computer to launch in July",
        post_content: "I have been working closely with top developers to create an app that will allow space captains such as myself to better send, recieve and log information regarding ship maintainence and flight plans. The new app is set to launch this July and I couldn't be more excited. Keep an 'eye' out (lol) for more news on this exciting tech!",
        user_id: 2
    },
    {
        title: "Does this milk smell funny?",
        post_content: "Hey guys! I'm currently looking for someone to help me develop an app that can tell if milk smells funny. I have a hard time telling if it is or not and think there must be others out there like me. Let me know if you or someone you know can help me out. Yo.",
        user_id: 1
    },
    {
        title: "My app Tell-A-Doctor is no longer being sued!",
        post_content: "Hello! I'm excited to announce that I am no longer being sued for malpractice! I also learned that it is illegal to practice medicine without a license from a dumpster! Anyone who currently has downloaded my Tell A Doctor app should probably delete it as I have been court-ordered to refrain from offering any advice, medical or otherwise. Have a crab-tastic day!",
        user_id: 4
    },
    {
        title:"Wermstrom Must Die site a success!",
        post_content: "Good news everyone! My website dedicated to the demise of Dr. Wermstrom is off to a wonderful start! Thank you all for your continued support and shared hatred of Ogden Wermstrom. It means so much to me.",
        user_id: 5
    },
    {
        title: "Bender is Great!",
        post_content: "All this tech you guys talk about will never be as great as me, Bender. Just thought you should know. Oh yeah, and bite my shiny metal @$$.",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;