const router = require("express").Router()

// Services

const servicesRouter = require("./services")

router.use("/", servicesRouter)

// Parties

const partiesRouter = require("./parties")
router.use("/", partiesRouter)

module.exports = router