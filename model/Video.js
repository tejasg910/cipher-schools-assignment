const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  creator: { type: String },
  likes: { type: Number },
  comments: [
    {
      title: String,
      user: String,
      replies: [
        {
          title: String,
          user: String,
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  views: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;
