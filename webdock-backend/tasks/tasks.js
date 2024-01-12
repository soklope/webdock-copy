const { Op } = require('sequelize');
const { Post } = require('../models');
const { sendEmailToAdmin } = require('./email');

async function checkAndSendChanges() {
        try {
            const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); 
            // using sequelize to find all posts posts created or updated twentyfourhourtsago
            const posts = await Post.findAll({
              where: {
                [Op.or]: [ //Op.or = logical OR operation in a WHERE clause
                  { createdAt: { [Op.gte]: twentyFourHoursAgo } }, //Op.gte == Operator.greaterThanorEqualTo
                  { updatedAt: { [Op.gte]: twentyFourHoursAgo } },
                ],
              },
            });
            // console.log('Posts within the last 24 hours:', posts.length);
            if (posts.length === 0 ) {
              console.log('No changes, no need to send email')
              return
            } else {
              sendEmailToAdmin(posts);
            }

          } catch (error) {
            console.error('Error in checkAndSendChanges:', error);
          }
}

module.exports = { checkAndSendChanges };

// docs for sequelize Op
// https://sequelize.org/docs/v7/querying/operators/