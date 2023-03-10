import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  creator: { type: String },
  likes: { type: Number, default: 0 },
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
  video: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  views: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Video = mongoose.model("Video", VideoSchema);
