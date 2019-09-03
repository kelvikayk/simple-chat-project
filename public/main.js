const textInput = document.getElementById("textInput");
const msgBox = document.getElementById("msgBox");
const contentElement = document.getElementById("content");
const bottomBar = document.getElementById("bottom");
//Audio Notification Element
const notify = document.getElementById("notification");
//Audio Play Element
const backgroundAudio = document.getElementById("backgroundAudio");
const audioSource = document.getElementById("audioSource");
//Connect The Client To The WebSocket Server
const socket = io.connect(":8080");

//Store The Values To Send
var userdata = {
    username: "User",
    userid: "user",
    message: "",
    colors: {
        userColor: "lime",
        textColor: "lime"
    }
}

//Runs Any Code Inside When Page Is Open
window.onload = function() {
    updateColor();
}

//Update Page Color
function updateColor() {
    bottomBar.style.backgroundColor = userdata.colors.userColor;
}

//Get "Enter Key" Write to Var and Send Message To Server
function keyEnter(e) {
    if (e.keyCode === 13) {
        userdata.message = textInput.value;
        textInput.value = "";
        sendMsg();
    }
}

//Send Var To Server
function sendMsg() {
    if (userdata.message !== "" && userdata.message !== null) {
        socket.emit("msg", userdata);
    }
    else {
        window.alert("A Sua Mensagem Está Vazia!");
    }
}

//Get Message From Server And Send To Print
socket.on("msg", (data) => {
    backAudio(data);
    printMsg(data);
});

//Print The Message On Screen
function printMsg(data) {
    const listElement = document.createElement("li");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", data.image);
    imgElement.setAttribute("style", `border: solid 2px ${data.colors.userColor};`);

    const strongElement = document.createElement("strong");
    const strongText = document.createTextNode(data.username);
    strongElement.setAttribute("style", `color:${data.colors.userColor};`);
    strongElement.appendChild(strongText);

    const messageElement = document.createElement("p");
    const msgText = document.createTextNode(data.message);
    messageElement.setAttribute("style", `color: ${data.colors.textColor};`);
    messageElement.appendChild(msgText);

    listElement.appendChild(imgElement);
    listElement.appendChild(strongElement);
    listElement.appendChild(messageElement);

    msgBox.appendChild(listElement);

    const line = document.createElement("br")

    msgBox.appendChild(line);

    contentElement.scrollTop = contentElement.scrollHeight;

    if (data.username !== userdata.username) {
        Notify(1);
    }
}

//Play Notification Audio
function Notify(data) {
    if (data === 1) {
        notify.load();
        notify.volume = 1;
        notify.currentTime = 0;
        notify.play();
    }
}

//Play Background Audio
function backAudio(data) {
    if (data.audio.play == true) {
        audioSource.setAttribute("src", data.audio.src);
        audioSource.setAttribute("type", data.audio.mtype);
        backgroundAudio.load();
        backgroundAudio.volume = 0.8;
        backgroundAudio.currentTime = 0;
        backgroundAudio.play();
    } else {
        audioSource.setAttribute("src", "");
        audioSource.setAttribute("type", "");
    }
}