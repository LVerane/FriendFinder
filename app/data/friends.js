// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        "userName": "Ahmed",
        "userPicture": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mel-gibson-lead-1551913147.jpg?crop=0.459xw:0.919xh;0.0195xw,0.0292xh&resize=640:*",
        "userAnswers": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }, {
        "userName": "Peter",
        "userPicture": "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
        "userAnswers": [
            5,
            3,
            2,
            4,
            1,
            5,
            2,
            3,
            4,
            2
        ]
    }, {
        "userName": "Bob",
        "userPicture": "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MzU1NzI0ODEx/keanu-reeves-9454211-1-402.jpg",
        "userAnswers": [
            3,
            2,
            1,
            4,
            4,
            5,
            2,
            1,
            4,
            2
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
