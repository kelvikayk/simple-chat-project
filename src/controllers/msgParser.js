module.exports = {
    parseMsg(data) {
        if (0 === 1) {
        } else if (1 === 0) {
        } else {
            return {
                username: data.username,
                image: `./images/users/${data.userid}.jpg`,
                message: data.message,
                colors: {
                    userColor: data.colors.userColor,
                    textColor: data.colors.textColor
                },
                isCommand: false
            }
        }
    }
};