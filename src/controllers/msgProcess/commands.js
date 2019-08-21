const {} = {
    usename: "System",
    image: "./images/users/system.jpg",
    message: "Command",
    colors: {
        userColor: "red",
        textColor: "lime"
    },
    local: false
}

module.exports = {
    parse(data) {
        var cmd = data.message;
        cmd = cmd.slice(1);
        console.log(cmd);
    },
    cmd(data) {
    }
};