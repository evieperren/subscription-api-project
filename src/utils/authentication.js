const roles = {
  admin: function (req, res, next) {
    if(req.auth.user === 'admin'){
      next()
    } else {
      res.status(401).json({
        "message": "Restricted access. Please check your permissions"
      })
    }
  },
  user: function (req, res, next){
    if(req.auth.user === 'user'){
      next()
    } else {
      res.status(401).json({
        "message": "Restricted access. Please check your permissions"
      })
    }
  },
  all: function (req, res, next){
    if(req.auth.user === 'admin' || req.auth.user === 'user'){
      next()
    } else {
      res.status(401).json({
        "message": "Restricted access. Please check your permissions"
      })
    }
  }
}

module.exports = roles