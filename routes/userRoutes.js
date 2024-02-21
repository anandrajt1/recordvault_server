const express = require('express')
const cookieParser = require('cookie-parser')

const {getAllUsers,addNewUser,loginUser, logoutUser} = require('../controllers/userController')
const router = express.Router()

//to get all users
router.get('/',getAllUsers)

router.post('/signup',addNewUser)

router.post('/login',loginUser)

router.post('/logout',logoutUser)


module.exports = router
