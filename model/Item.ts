import mongoose, { Schema, Document } from "mongoose";

interface IItem extends Document {
  id: number;
  name: string;
  category: string;
  effect: string;
  picture: string;
  unique_passive: string[];
  unique_attribute: string;
  active_skill: string;
  price: number;
  _storyId: number;
}

const ItemSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  unique_passive: {
    type: [String],
    required: true,
  },
  unique_attribute: {
    type: String,
    required: true,
  },
  active_skill: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  _storyId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IItem>("Item", ItemSchema);

