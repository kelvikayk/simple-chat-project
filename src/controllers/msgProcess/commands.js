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
    cmd(data) {
        if (data === "boateazul") {
            return {
                username: com.usename,
                image: com.image,
                message: "\ud83e\udd12\ud83d\udc94\ud83d\udc02\ud83d\ude02",
                colors: {
                    userColor: com.colors.userColor,
                    textColor: com.colors.textColor
                },
                local: false,
                audio: {
                    play: true,
                    src: "./audio/livefx/boateazul.mp3",
                    mtype: "audio/mpeg"
                }
            };
        } else if (data === "policia") {
            return {
                username: com.usename,
                image: com.image,
                message: "\ud83d\udea8 \ud83d\udc6e \ud83d\ude94 \ud83d\ude93",
                colors: {
                    userColor: com.colors.userColor,
                    textColor: com.colors.textColor
                },
                local: false,
                audio: {
                    play: true,
                    src: "./audio/livefx/policia.mp3",
                    mtype: "audio/mpeg"
                }
            };
        } else {
            return {
                username: com.usename,
                image: com.image,
                message: `Invalid Command: "${data}"`,
                colors: {
                    userColor: "red",
                    textColor: "red"
                },
                local: true,
                audio: {
                    play: com.audio.play,
                    src: com.audio.src,
                    mtype: com.audio.mtype
                }
            }
        }
    },
    parse(data) {
        var cmd = data.message;
        cmd = cmd.slice(1);
        return this.cmd(cmd);
    }
};