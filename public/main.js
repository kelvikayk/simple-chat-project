const textInput = document.getElementById("textInput");

const socket = io.connect(":8080");

var userdata = {
    username: "Henry Lima",
    userid: "henrylimabr",
    message: ""
}

function keyEnter(e) {
    if (e.keyCode === 13) {
        userdata.message = textInput.value;
        textInput.value = "";
    }
}