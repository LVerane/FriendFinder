$(document).ready(function () {

    var surveyQuestions = ["Turtles are awesome", "I like spending Sundays alone", "Sushi is better than pizza", "We need more time for this homework", "Firewood smells nice"]

    generateHtml()

    function generateHtml() {
        // $("#instruction").html('Select the right answers and click Submit');
        // $("#score").html("");
        for (i = 0; i < surveyQuestions.length; i++) {
            var newQuestion = $("<h3>").append(surveyQuestions[i]);
            $("#allQuestions").append(newQuestion);
            var newAnswer = $(`<select id=question${i} name=${i}>`);
            // var newAnswer = $('<div class=answerOption id=question' + i + '>');

            for (j = 0; j < 5; j++) {
                newAnswer.append(`<option value=${j + 1}>${j + 1}</option>`);
                // newAnswer.append('<input type=radio name=answer' + i + ' value=' + j + '>' + (j+1));
                $("#allQuestions").append(newAnswer);
            }
        }
    }


    $("#submit").on("click", function () {
        event.preventDefault();

        var answerArray = [];
        for (i = 0; i < surveyQuestions.length; i++) {
            answerArray.push(parseInt($('#question' + i).val()))
            // var userAnswer = $('#question' + i).val()//children("input:checked").val();
            // console.log(userAnswer)
        }
        console.log(answerArray)

        var newUser = {
            userName: $("#user-name").val().trim(),
            userPicture: $("#user-picture").val().trim(),
            userAnswers: answerArray,
        };
        console.log(newUser)

        $.post("/api/friends", newUser, function(){
            $("#user-name").val("");
            $("#user-picture").val("");
        })

    });

});