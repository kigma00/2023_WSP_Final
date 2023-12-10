import mongoose, { Schema } from 'mongoose'

const logSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.User || mongoose.model('Log', logSchema)

export default Log
