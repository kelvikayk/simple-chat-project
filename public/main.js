const textInput = document.getElementById("textInput");
const msgBox = document.getElementById("msgBox");

const socket = io.connect(":8080");

var userdata = {
    username: "User",
    userid: "user",
    message: "",
    colors: {
        userColor: "lime",
        textColor: "lime"
    }
}

function keyEnter(e) {
    if (e.keyCode === 13) {
        userdata.message = textInput.value;
        textInput.value = "";
        sendMsg();
    }
}

function sendMsg() {
    if (userdata.message !== "" && userdata.message !== null) {
        socket.emit("msg", userdata);
    }
    else {
        window.alert("A Sua Mensagem Está Vazia!");
    }
}

socket.on("msg", (data) => {
    if (data.isCommand === false) {
        printMsg(data);
    }
});

function printMsg(data) {
    const listElement = document.createElement("li");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", data.image);

    const strongElement = document.createElement("strong");
    const strongText = document.createTextNode(data.username);
    strongElement.setAttribute("style", `color:${data.colors.userColor}`)
    strongElement.appendChild(strongText);

    const messageElement = document.createElement("p");
    const msgText = document.createTextNode(data.message);
    messageElement.setAttribute("style", `color: ${data.colors.textColor}`);
    messageElement.appendChild(msgText);

    listElement.appendChild(imgElement);
    listElement.appendChild(strongElement);
    listElement.appendChild(messageElement);

    msgBox.appendChild(listElement);

    const line = document.createElement("br")

    msgBox.appendChild(line);
}