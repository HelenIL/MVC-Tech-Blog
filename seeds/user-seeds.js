const { User } = require('../models');

const userData = [
    {
        username: "phillip_fry",
        email: "fryguy@yahoo.com",
        password: "p@s$word1"
    },
    {
        username: "mama_leela",
        email: "yoleelaleela@gmail.com",
        password: "p@s$word2"
    },
    {
        username: "bender_is_gr8",
        email: "fullmetalrobot@hotmail.com",
        password: "p@s$word3"
    },
    {
        username: "zoid_berg",
        email: "arealdoctor@comcast.net",
        password: "p@s$word4"
    },
    {
        username: "professor_whuuuuh",
        email: "labcoatgenius@yahoo.com",
        password: "p@s$word5"
    },
    {
        username: "scruffy4lyfe",
        email: "toiletking@gmail.com",
        password: "p@s$word6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;