// const { sendEmailToAdmin } = require('./email');
const { Op } = require('sequelize');
const { Post } = require('../models');
const { sendEmailToAdmin } = require('./email');

async function checkAndSendChanges() {
		// console.log("cron funtion run, in tasks.js");
        try {
            const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); 
            // console.log(twentyFourHoursAgo)
            const posts = await Post.findAll({
              where: {
                [Op.or]: [ //Op.or = logical OR operation in a WHERE clause
                  { createdAt: { [Op.gte]: twentyFourHoursAgo } }, //Op.gte == Operator.greaterThanorEqualTo
                  { updatedAt: { [Op.gte]: twentyFourHoursAgo } },
                ],
              },
            });
            // console.log('Posts within the last 24 hours:', posts.length);
            sendEmailToAdmin(posts);
        
          } catch (error) {
            console.error('Error in checkAndSendChanges:', error);
          }
}

module.exports = { checkAndSendChanges };