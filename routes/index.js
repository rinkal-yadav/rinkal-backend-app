const express = require("express");
const blogRouter=require("./backend-data")
const router=express.Router()
router.use("/blogdata",blogRouter)

module.exports = router
