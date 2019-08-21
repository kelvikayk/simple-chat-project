const cmd = require("./msgProcess/commands");
const acmd = require("./msgProcess/adminCommands");

module.exports = {
    parseMsg(data) {
        if (data.message !== "" && data.message !== null) {
            if (data.message.charAt(0) == "|" && data.message.charAt(data.message.length - 1) === "|") {
                acmd.parse(data);
            } else if (data.message.charAt(0) === "/") {
                cmd.parse(data);
            } else {
                return {
                    username: data.username,
                    // image: `./images/users/${data.userid}.jpg`,
                    image: "./images/users/user.jpg",
                    message: data.message,
                    colors: {
                        userColor: data.colors.userColor,
                        textColor: data.colors.textColor
                    },
                    local: false
                }
            }
        }
    }
};