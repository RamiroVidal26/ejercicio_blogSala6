

function makeUserAvailableInViews(req, res, next) {
    if(res){
        res.locals.user = req.user;
        res.locals.isAuthenticated = req.isAuthenticated();
    }
    
    return next();
  }

  module.exports = makeUserAvailableInViews;