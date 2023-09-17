import mongoose, { Schema, Document } from "mongoose";

interface IHero extends Document {
  id: number;
  name: string;
  role: string[];
  special: string[];
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
  avatar: string | null;
  abilities: {
    name: string;
    desc: string;
  }[];
  price: {
    currency: string;
    amount: number | null;
  }[];
<<<<<<< HEAD
=======
  avatar?: string;
  abilities?: string[];
  price: Record<string, number>;
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
  _storyId: number;
}

const HeroSchema: Schema = new Schema({
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
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
<<<<<<< HEAD
=======
  abilities: {
    type: [String],
    required: false,
  },
  price: {
    type: Object,
    required: true,
  },
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
  _storyId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IHero>("Hero", HeroSchema);
