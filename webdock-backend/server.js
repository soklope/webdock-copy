const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const verifyController = require('./controllers/verifyController.js')
const port = 8080;
const { cronSchedueler } = require('./tasks/scheduler.js')

const app = express();
app.use(cors(
  { origin: "*" }
))
app.use(express.json());

cronSchedueler();
const mailer = require('express-mailer');
const mailerConfig = require('./config/emailConfig/emailConfig.js');

mailer.extend(app, mailerConfig);

app.use('/api/v1', routes);
app.post('/verify', verifyController.verifyUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
