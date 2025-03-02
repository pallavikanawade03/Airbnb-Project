const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer"); // Import multer

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Configure Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wanderlust_DEV",  // Cloudinary folder name
    format: async () => "jpeg", // Ensure correct file format
    allowedFormats: ["png", "jpg", "jpeg"], // (Optional)
  },
});

// Create Upload Middleware
const upload = multer({ storage });

module.exports = {
  cloudinary,
  storage,
  upload, // Export upload middleware
};
