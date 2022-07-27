import { Tip } from '../models/tip.js'

function create(req, res) {
  req.body.owner = req.user.profile
  console.log(req.body)
}

export { 
  create
}