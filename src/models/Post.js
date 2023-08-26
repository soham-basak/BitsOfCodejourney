import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
      required: true,
    },
    img: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
