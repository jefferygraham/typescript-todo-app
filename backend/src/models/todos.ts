import { model, Schema } from 'mongoose';

import { ITodo } from '../types/todo';

const toDoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ITodo>('Todo', toDoSchema);
