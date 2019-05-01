const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || `add a .env file to the root of the project with a JWT_SECRET variable`;


authenticate = (req, res, next) => {
  const token = req.get('Authorization');

  if(token){
      jwt.verify(token, jwtKey, (err, decoded) => {
          if(err) return res.status(401).json(err);

          req.decoded = decoded;
          next();
      })
  } else {
      return res.status(401).json({
          error: "No token provided on the Authorization header"
      })
  }
}

adminAuth = (req, res, next) => {
  const token = req.get('Authorization');
  jwt.verify(token, jwtKey, (err, success) => {
      if(err){
          return res.status(401).json(err)
      } else {
          console.log('Admin Auth', success)
          if(success.admin === 1){
              next();
          } else {
              res.status(401).json({
                  message: "Unauthorized request - only Admins can access this page."
              })
            }
        }
  })
}

module.exports = {
  authenticate,
  adminAuth
}
