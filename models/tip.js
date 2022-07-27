import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tipSchema = new Schema({
  category: String,
  notes: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
},
{
  timestamps: true,
})

const Tip = mongoose.model('Tip', tipSchema)

export { Tip }