import { Tip } from '../models/tip.js'

function create(req, res) {
  req.body.owner = req.user.profile
  Tip.create(req.body)
  .then(tip => {
    Tip.findById(tip._id)
    .populate("owner")
    .then(populatedTip => {
      res.json(populatedTip)
    })
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export { 
  create
}