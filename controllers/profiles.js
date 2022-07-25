import { Profile } from '../models/profile.js'


function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addTask(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.tasks.push(req.body)
    console.log(profile)
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
  index,
  addTask
}
