const multer = require("multer");
const path = require("path");

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, next) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            next("File harus berekstensi jpg,jpeg,png!", false);
            return;
        }
        next(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 5,
        files: 5,
    }
})

// module.exports = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req, file, next) => {
//         let ext = path.extname(file.originalname);
//         if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//             next("File harus berekstensi jpg,jpeg,png!", false);
//             return;
//         }
//         next(null, true);
//     },
//     limits: {
//         fileSize: 5000000,
//         files: 5,
//     }
// })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const fileLocation = "./public/static/products";
//         if (!fs.existsSync(fileLocation))
//             fs.mkdirSync(fileLocation, { recursive: true });
//         cb(null, fileLocation);
//     },
//     filename: (req, file, cb) => {
//         const fileType = file.mimetype.split("/")[1];
//         cb(null, file.fieldname + "-" + Date.now() + `.${fileType}`);
//     },
// });

// const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         // The function should call `cb` with a boolean
//         // to indicate if the file should be accepted
//         if (
//             file.mimetype === "image/png" ||
//             file.mimetype === "image/jpg" ||
//             file.mimetype === "image/jpeg"
//         )
//             return cb(null, true);
//         // To reject this file pass `false`, like so:
//         cb(null, false);

//         // You can always pass an error if something goes wrong:
//         cb(new Error("Wrong filetype"));
//     },
//     limits: {
//         fileSize: 5000000,
//         files: 5,
//     },
// });

// module.exports = upload;
