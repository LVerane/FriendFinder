var surveyQuestions = ["Turtles are awesome", "I like spending Sundays alone", "Sushi is better than pizza", "We need more time for this homework", "Firewood smells nice", "Do you want to build a snowman?", "New Zealand is a great country", "Four hours of sleep are more than enough", "I love to fill forms", "Shrek is better than Lord of the Rings"]

generateHtml()

function generateHtml() {
    for (i = 0; i < surveyQuestions.length; i++) {
        var newQuestion = $("<h3>").append(surveyQuestions[i]);
        $("#allQuestions").append(newQuestion);
        var newAnswer = $(`<select id=question${i} name=${i}>`);

        for (j = 0; j < 5; j++) {
            newAnswer.append(`<option value=${j + 1}>${j + 1}</option>`);
            $("#allQuestions").append(newAnswer);
        }
    }
}

$("#submit").on("click", function () {
    event.preventDefault();
    $("#best-match").html("");

    if (!$("#user-name").val().trim() || !$("#user-picture").val().trim()) {
        $("#best-match").html("<h3>Name and picture link are required</h3>");
    } else {

        var answerArray = [];
        for (i = 0; i < surveyQuestions.length; i++) {
            answerArray.push(parseInt($('#question' + i).val()))
        }

        var newUser = {
            userName: $("#user-name").val().trim(),
            userPicture: $("#user-picture").val().trim(),
            userAnswers: answerArray,
        };

        $.post("/api/friends", newUser, function (data) {
            $("#user-name").val("");
            $("#user-picture").val("");
            var image = $(`<img src=${data.userPicture}>`)
            var name = $(`<h3>${data.userName}</h3>`)

            $("#best-match").append(name)
            $("#best-match").append(image)
        })
    }

});