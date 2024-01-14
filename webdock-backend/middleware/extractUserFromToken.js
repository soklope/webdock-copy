const { decodeToken } = require("../utility/decodeToken");

const extractUserFromToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    
    if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
        // getting the ssotoken by removing the the "bearer " with slice
        const ssoToken = authorizationHeader.slice(7);
        // console.log('Received token in middleware:', ssoToken);
      
      try {
          const decodedToken = decodeToken(ssoToken);
          
          req.user_id = decodedToken.id;
        next();
      } catch (error) {
        res.status(401).json({ error: "Invalid token" });
      }
    } else {
      res.status(401).json({ error: "Missing or invalid Authorization header" });
    }
  };

  module.exports = { extractUserFromToken };