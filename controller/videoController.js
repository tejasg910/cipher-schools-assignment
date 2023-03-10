import cloudinary from "cloudinary";
import { Video } from "../model/Video.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
export const addVideo = async (req, res, next) => {
  try {
    const { title, creator } = req.body;
    console.log(title, creator);
    if (!title && !creator)
      return next(new ErrorHandler("Please add all fields", 400));
    const { file } = req.files;

    const fileUri = getDataUri(file);

    const myCloud = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      resource_type: "video",
    });
    await Video.create({
      title,
      creator,
      // likes,
      // views,
      video: { public_id: myCloud.public_id, url: myCloud.secure_url },
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully, you can add lectures now",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
