const jwt = require('jsonwebtoken');
const db = require('../models');

const verifyUser = async (req, res) => {
    try {
        const { ssoToken } = req.body;
    
        if (!ssoToken) {
            return ;
            // return res.status(400).json({ error: 'Token is missing' });
        }
    
        const user = jwt.verify(ssoToken, 'e389bb7b-dc58-4b0b-8f54-dac159d5a609');
    
        const dbUser = await db.User.findOne({ where: {
            id: user.id
          }});

          if (!dbUser) {
            db.User.create(user);
          }

        console.log(user, ssoToken);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = {
    verifyUser
  };