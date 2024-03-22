import mongoose from "mongoose";

const UserMessage = new mongoose.Schema(
  {
    message: {
      text: {
        type: String,
        // required: true,
      },
    },
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Messages", UserMessage);

export default messageModel;
