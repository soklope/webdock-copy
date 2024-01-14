const db = require("../models");

const verifyUser = async (req, res) => {
	try {		
		const dbUser = await db.User.findOne({
			where: {
				id: req.user.id,
			},
		});

		if (!dbUser) {
			db.decodeToken.create(req.user);
		}

		res.status(200).json({ message: "user succesfully verified" });
	} catch (error) {
		console.error(error);
		res.status(401).json({ error: "Invalid token" });
	}
};

const checkAdmin = async (req, res) => {
	try {

    if (req.user.email.endsWith('@edu.ucl.dk') || req.user.email.endsWith('@webdock.io')) {
      res.status(200).json(true);
    }
    else {
      res.status(200).json(false)
    }
     
	} catch (error) {
		console.error(error);
		res.status(401).json({ error: "Invalid token" });
	}
};

module.exports = {
	verifyUser,
  checkAdmin
};
