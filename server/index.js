require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const ImageKit = require("imagekit");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for your frontend origin
app.use(cors({ origin: process.env.CORS_ORIGIN }));

// Setup Multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Setup ImageKit
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Image upload route
app.post("/api/upload", upload.single("file"), async (req, res) => {
    try {
        const { originalname, buffer } = req.file;
        const { designId } = req.body;


        const response = await imagekit.upload({
            file: buffer, // buffer from multer
            fileName: designId + "-" + originalname,
        });

        res.status(200).json({ success: true, image: response });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ success: false, error: "Upload failed" });
    }
});

// Get images
app.get("/api/images", async (req, res) => {
    try {
        const response = await imagekit.listFiles();
        res.status(200).json({ success: true, images: response });
    } catch (error) {
        console.error("Get images error:", error);
        res.status(500).json({ success: false, error: "Get images failed" });
    }
});


app.listen(port, () => console.log(`Server running on port ${port}`));
