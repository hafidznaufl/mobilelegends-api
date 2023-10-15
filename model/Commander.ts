import mongoose, { Schema, Document } from "mongoose";

interface ICommander extends Document {
  id: number;
  name: string;
  category: string;
  avatar: string | null;
  abilities: {
    name: string;
    desc: string;
  }[];
  price: {
    currency: string;
    amount: number | null;
  }[];
}

const CommanderSchema: Schema = new Schema({
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
        required: false,
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
});

export default mongoose.model<ICommander>("Commander", CommanderSchema);
