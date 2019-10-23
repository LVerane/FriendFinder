// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);

    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware

        // req.body.userAnswers.forEach(element => {
        //     element = parseInt(element);
        //     console.log(element)
        //     console.log(req.body.userAnswers)
        // });

        for (var i = 0; i < req.body.userAnswers.length; i++) {
            req.body.userAnswers[i] = parseInt(req.body.userAnswers[i])
            // console.log(req.body.userAnswers[i])
        }
        console.log(req.body.userAnswers)

        // console.log(friendsArray)

        var topMatch = { value: Infinity }
        for (var i = 0; i < friendsArray.length; i++) {//-1 to not look at the last one
            var newTest = 0;
            for (var j = 0; j < friendsArray[i].userAnswers.length; j++) {
                newTest += Math.abs(friendsArray[i].userAnswers[j] - req.body.userAnswers[j]);//friendsArray.length-1 to comapre to the last one
            }
            if (newTest < topMatch.value) {
                topMatch.value = newTest;
                topMatch.position = i;
                // topMatch.name = friendsArray[i].userName;
            }
            console.log(topMatch)
        }

        var bestMatch = friendsArray[topMatch.position]

        console.log(bestMatch.userName)
        // res.json(bestMatch.userName)

        // console.log(`Your best match is ${bestMatch.userName}`)
        // res.json(true);

        friendsArray.push(req.body);
    });
};
