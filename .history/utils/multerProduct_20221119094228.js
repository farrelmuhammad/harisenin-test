const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileLocation = "./public/static/products";
        if (!fs.existsSync(fileLocation))
            fs.mkdirSync(fileLocation, { recursive: true });
        cb(null, fileLocation);
    },
    filename: (req, file, cb) => {
        const fileType = file.mimetype.split("/")[1];
        cb(null, file.fieldname + "-" + Date.now() + `.${fileType}`);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg"
        )
            return cb(null, true);
        // To reject this file pass `false`, like so:
        cb(null, false);

        // You can always pass an error if something goes wrong:
        cb(new Error("Wrong filetype"));
    },
    limits: {
        fileSize: 5000000,
        files: 5,
    },
});

module.exports = upload;
