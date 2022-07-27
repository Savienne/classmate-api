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

function index(req, res) {
  Tip.find({})
  .populate("owner")
  .then(tips => {
    res.json(tips)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteTip(req, res) {
  Tip.findById(req.params.id)
  .then(tip => {
    if (tip.owner._id.equals(req.user.profile)) {
      Tip.findByIdAndDelete(tip._id)
      .then(deletedTip => {
        res.json(deletedTip)
      })
    }
    else {
      res.status(401).json({err: "Not authorized!"})
    }
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create,
  index,
  deleteTip as delete
}