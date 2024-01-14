const jwt = require('jsonwebtoken');

function decodeToken(ssoToken) {
  try {
    return jwt.verify(JSON.parse(ssoToken), 'e389bb7b-dc58-4b0b-8f54-dac159d5a609'); 
  } catch (error) {
    console.error('Error decoding token:', error);
    throw new Error('Invalid token');
  }
}

module.exports = { decodeToken };
