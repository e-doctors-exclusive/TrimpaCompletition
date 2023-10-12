const express= require("express")
const router = express.Router()


const {signIn}= require("../controller/admin.controller")

router.post('/signin', signIn)


module.exports = router