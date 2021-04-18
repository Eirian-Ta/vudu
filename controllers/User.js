/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();
const isAuthenticated = require("../middleware/auth")
const userService = require("../services/UserService.js")


//Route to direct use to Registration form
router.get("/register",userService.getRegistrationView);

//Route to process user's request and data when user submits registration form
router.post("/register",userService.processRegistrationForm);


//Route to direct user to the login form
router.get("/login",userService.getLoginView);

//Route to process user's request and data when user submits login form
router.post("/login",userService.processLoginForm);


//**dashboard
router.get("/user-dashboard",isAuthenticated,userService.getUserDashboardView);
router.get("/admin-dashboard",isAuthenticated,userService.getAdminDashboardView);

router.get("/logout",userService.processLogout);


module.exports=router;