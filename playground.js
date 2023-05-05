import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
 dotenv.config()

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
    cloud_name: process.env.CLOUD_NAME

})
console.log(cloudinary.config())
const imagePath = './twitterCards/toro.png'
const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
    public_id: 'toro',
    //   use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};

uploadImage(imagePath)