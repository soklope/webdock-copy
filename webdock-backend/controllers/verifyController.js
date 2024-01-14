const db = require('../models');
const { decodeToken } = require('../utility/decodeToken')

const verifyUser = async (req, res) => {
    try {
        const { ssoToken } = req.body;
    
        if (!ssoToken) {
            return ;
            // return res.status(400).json({ error: 'Token is missing' });
        }
    
        const decodedToken = decodeToken(ssoToken)
    
        const dbUser = await db.User.findOne({ where: {
            id: decodedToken.id
          }});

          if (!dbUser) {
            db.decodeToken.create(decodedToken);
          }

        res.status(200).json(decodedToken);
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = {
    verifyUser
  };
