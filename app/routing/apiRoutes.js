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

        for (var i = 0; i < req.body.userAnswers.length; i++) {
            req.body.userAnswers[i] = parseInt(req.body.userAnswers[i])
        }

        var topMatch = { value: Infinity }
        for (var i = 0; i < friendsArray.length; i++) {
            var newTest = 0;
            for (var j = 0; j < friendsArray[i].userAnswers.length; j++) {
                newTest += Math.abs(friendsArray[i].userAnswers[j] - req.body.userAnswers[j]);
            }
            if (newTest < topMatch.value) {
                topMatch.value = newTest;
                topMatch.position = i;
            }
        }

        var bestMatch = friendsArray[topMatch.position]
        console.log(bestMatch)

        friendsArray.push(req.body);

        res.send(bestMatch)
    });
};
