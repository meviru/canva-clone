require("dotenv").config();
const express = require("express");
const ImageKit = require("imagekit");

const app = express();
const port = process.env.PORT || 5000;

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/auth", async (req, res) => {
    try {
        const authData = await imagekit.authenticationParameters();
        res.send(authData);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong!",
            error: error
        });
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));