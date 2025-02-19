const request = require("request");
const rqeuest = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing Jvascript Action Github Skills course.",
    },
    jsons: true,
}

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;