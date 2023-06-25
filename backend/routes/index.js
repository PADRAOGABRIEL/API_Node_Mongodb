const router = require("express").Router()

// Services

const servicesRouter = require("./services")

router.use("/", servicesRouter)

module.exports = router