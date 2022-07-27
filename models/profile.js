import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  name: String,
  content: String,
  priority: {
    type: Number,
    min: 1,
    max: 5
  }
},
{
  timestamps: true
})

const profileSchema = new Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  tasks: [taskSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }