const express = require("express");
const router = express.Router();

router.get("/keep-alive", (request, response) => {
	response.status(200).send("connection-alive");
});

module.exports = router;