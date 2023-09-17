import mongoose, { Schema, Document } from "mongoose";

interface IHero extends Document {
  id: number;
  name: string;
  role: string[];
  special: string[];
  avatar?: string | null;
  abilities?: {
    name: string;
    desc: string;
  }[];
  price?: {
    currency: string;
    amount: number | null;
  }[];
  _storyId: number;
}

const HeroSchema: Schema = new Schema<IHero>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    required: true,
  },
  special: {
    type: [String],
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  abilities: [
    {
      name: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
  ],
  price: [
    {
      currency: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: false,
      },
    },
  ],
  _storyId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IHero>("Hero", HeroSchema);
