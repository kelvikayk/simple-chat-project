const com = {
    usename: "System",
    image: "./images/users/system.jpg",
    message: "Command",
    colors: {
        userColor: "red",
        textColor: "lime"
    },
    local: false,
    audio: {
        play: false,
        src: "",
        mtype: ""
    }
}

module.exports = {
    acmd(data) {
    },
    parse(data) {
        var acmd = data.message;
        acmd = acmd.slice(1);
        acmd = acmd.slice(0, acmd.length - 1);
        return data;
    }
};