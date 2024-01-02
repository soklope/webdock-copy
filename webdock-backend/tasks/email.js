const postmark = require('postmark');
const mailerConfig = require('../config/emailConfig/emailConfig');

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

function sendEmailToAdmin(posts) {
    let templatePath = path.join(__dirname, "../config/emailConfig/emailTemplate.ejs");

    const client = new postmark.ServerClient(mailerConfig.auth.user);
    
    const template = fs.readFileSync(templatePath, 'utf-8');
  
    const renderedTemplate = ejs.render(template, { posts });
  
    const message = {
      From: mailerConfig.from,
      To: 'kmfp32171@edu.ucl.dk', 
      Subject: 'Posts Updated in the Last 24 Hours',
      HtmlBody: renderedTemplate,
    };
  
    client.sendEmail(message)
      .then((response) => {
        console.log('Email sent: ', response);
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
      });
};

module.exports = { sendEmailToAdmin };