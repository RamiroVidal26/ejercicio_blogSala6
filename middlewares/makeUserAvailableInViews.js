const { User } = require("../models");

function makeUserAvailableInViews(req, res, next) {
    if(res){
        res.locals.user = req.user;
    }
    
    return next();
  }

  module.exports = makeUserAvailableInViews;