module.exports = {
    server: {
        domain: "mans-verify.vercel.app",
        https: true,
        httpPort: 8080,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        token: "ODk5NzMyOTM1NDEyOTU3MjI0.G-aKWr.M0lg1FAbnlMYWH-vhNZo2RUkZI-lbSf2OsKFa4", // —— Your bot's token.
        botId: "899732935412957224", // —— The bot's ID.
        guildId: "935655331713917070", // —— The server ID on where the commands will be deployed.
        verifiedRole: "1131219293216985168", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 3, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "unverified users!",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: true,
        rules: "Type your rules here if rulesEnabled is enabled, ensure to use \n for new lines"
    },

    reCAPTCHA: {
        secretKey: "6LdtuDgnAAAAALzmVhYWpHQJAN3YRZ-67QY0-Ep_",
        publicKey: "6LdtuDgnAAAAAGMKSdYzhugQT0lJTnwWQ3JUA2ZH"
    }
}
