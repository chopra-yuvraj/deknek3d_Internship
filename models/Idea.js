import mongoose from "mongoose";

const IdeaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the idea"],
      maxlength: [120, "Title cannot be more than 120 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxlength: [2000, "Description cannot be more than 2000 characters"],
      trim: true,
    },
    category: {
      type: String,
      enum: ["Web App", "Mobile App", "AI/ML", "DevOps", "Game", "Other"],
      default: "Other",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Idea || mongoose.model("Idea", IdeaSchema);
