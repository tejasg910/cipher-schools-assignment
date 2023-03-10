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

    // const fileUri = getDataUri(file);

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

export const getVideo = async (req, res, next) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (!video) return next(ErrorHandler("No video found", 404));
  video.views = video.views++;

  await video.save();

  res.status(200).json({ success: true, data: video.video });
};

export const getVideoDetails = async (req, res, next) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (!video) return next(ErrorHandler("No video found", 404));

  const data = {
    likes: video.likes,
    comments: video.comments,
    views: video.views,
    title: video.title,
    creator: video.creator,
  };

  res.status(200).json({ success: true, data });
};

export const addComments = async (req, res, next) => {
  try {
    console.log(req.user);
    const { id } = req.params;

    const { title } = req.body;
    const { reply } = req.body;
    const video = await Video.findById(id);

    const comments = video.comments;
    const replies = comments.replies;
    if (title) {
      comments.push({ title, user: req.user.username });
      video.comments += 1;
    }
    if (reply) {
      replies.push({ title: reply, user: req.user.username });
      video.comments += 1;
    }

    await video.save();

    res.status(200).json({
      success: true,
      message: "comment added successfully",
      data: video.comments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);

    if (!video) return next(ErrorHandler("No video found", 404));

    video.likes += 1;

    video.save();
    res.status(200).json({
      success: true,
      message: "like added successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
