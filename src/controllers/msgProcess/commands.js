const com = {
    usename: "*",
    image: "./images/users/",
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
    cmd(data,usr) {
        if (data === "boateazul") {
            return {
                username: `* DJ *`,
                image: `${com.image}vinyl.jpg`,
                message: `Requested By: ${usr}. \ud83e\udd12\ud83d\udc94\ud83d\udc02\ud83d\ude02`,
                colors: {
                    userColor: "blue",
                    textColor: "blue"
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
                username: `* SFX *`,
                image: `${com.image}speaker.jpg`,
                message: `Requested By: ${usr}. \ud83d\udea8 \ud83d\udc6e \ud83d\ude94 \ud83d\ude93`,
                colors: {
                    userColor: "fuchsia",
                    textColor: "fuchsia"
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
                username: `* System *`,
                image: `${com.image}system.jpg`,
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
        var usr = data.username;
        cmd = cmd.slice(1);
        return this.cmd(cmd,usr);
    }
};