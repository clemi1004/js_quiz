// loop for adding html div
for (i = 0; i < questions.length; i++) {
    // definition of the new element
    var newItem_1 = "<fieldset id=\"" + questions[i].question_nr + ("\">\n            <legend>" + questions[i].question + "</legend>\n            <label><INPUT id=\"A\" TYPE=\"checkbox\" NAME=\"input\" VALUE=" + questions[i].correctA + ">" + questions[i].choiceA + "<BR></label>\n            <label><INPUT id=\"B\" TYPE=\"checkbox\" NAME=\"input\" VALUE=" + questions[i].correctB + ">" + questions[i].choiceB + "<BR></label>\n            <label><INPUT id=\"C\" TYPE=\"checkbox\" NAME=\"input\" VALUE=" + questions[i].correctC + ">" + questions[i].choiceC + "<BR></label>\n            <label><INPUT id=\"D\" TYPE=\"checkbox\" NAME=\"input\" VALUE=" + questions[i].correctD + ">" + questions[i].choiceD + "<BR></label>\n           </fieldset>\n           <input type=\"button\" class=\"answer\" value=\"Submit\">");
    // insert the new element  
    $(".wrapper").append(newItem_1);
}
;
function validate() {
    var checkboxes = document.getElementsByName("input");
    var checkboxChecked = [];
    console.log(checkboxes.length);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked && (checkboxes[i].value === "1")) {
            checkboxChecked.push(checkboxes[i]);
        }
    }
    if (checkboxChecked.length === 2) {
        alert("You answered correctly");
    }
    else {
        alert("Wrong answer");
    }
}
var btns = document.getElementsByClassName("answer");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        validate(questions[i]);
        console.log(i);
    });
};
for (var i = 0; i < btns.length; i += 1) {
    _loop_1(i);
}
// document.getElementById("answer").addEventListener("click", validate);
