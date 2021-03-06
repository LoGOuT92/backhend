const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  header: {
    type: String,
    required: [true, "Naglowek nie moze byc pusty!"],
  },
  context: {
    type: String,
    required: [true, "Tresc nie moze byc pusta"],
  },
  image: String,
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  slug: String,
  comments: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
      },
      parentId2: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId(),
      },
      content: {
        type: String,
        min: 2,
      },
      time: { type: String },
      dateTime: { type: String },
      likes: [
        {
          value: { type: Number },
          user: { type: mongoose.Types.ObjectId },
        },
      ],

      repies: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
          },
          content: {
            type: String,
            min: 2,
          },
          time: { type: String },
          dateTime: { type: String },
          likes: [
            {
              value: { type: Number },
              user: { type: mongoose.Types.ObjectId },
            },
          ],
        },
      ],
    },
  ],
});

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;
