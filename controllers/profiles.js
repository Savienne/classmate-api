import { Profile } from '../models/profile.js'

function addTask(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.tasks.push(req.body)
    profile.save()
    .then(updatedProfile => {
      res.json(updatedProfile)
    })
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ err: err.errmsg })
  })
}

function showProfile(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    res.json(profile)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ err: err.errmsg })
  })
}

function deleteTask(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.tasks.id(req.params.id).remove()
    profile.save()
    .then(updatedProfile => {
      res.json(updatedProfile)
    })
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ err: err.errmsg })
  })
}

export { 
  addTask,
  showProfile,
  deleteTask
}
