const userModel = require("../models/User.js");
const bcrypt = require("bcryptjs");
const sgMail = require('@sendgrid/mail');
const isAdmin = require("../middleware/authorization")

//validate email input for registration form
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

//validate email password for registration form
// pw password should contain at least 8 characters, 
// 1 Number, 1 lowercase character, 1 uppercase character. 
// No special characters are allowed.
function validatePsw(psw) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(psw);
}


exports.getRegistrationView = (req,res,next)=> {
    res.render("User/register",{
        title: "Sign Up Page"
    });
}

exports.processRegistrationForm = (req,res,next)=> {
    //console.log(validateEmail(req.body.email));
    let errors={errName: []};

    if (req.body.fname =="") {
        if (req.body.lname =="") {
            errors.errName.push("Please enter your first name and last name.")
        }
        else {
            errors.errName.push("Please enter your first name.");
        }
    }
    else if (req.body.lname =="") {
        errors.errName.push("Please enter your last name.");
    }

    errors.errEmail = req.body.email =="" ? "Please enter your email" : !validateEmail(req.body.email) ? "The email you have entered is not valid. Please enter a valid email." : false;
    errors.errPsw = req.body.psw =="" ? "Please enter your password." : !validatePsw(req.body.psw) ? "Your password should contain at least 8 characters, 1 number, 1 lowercase character, and 1 uppercase character. No special characters are allowed." : false;
    errors.errCb = !req.body.checkBox ? "You must agree to the Terms and Policies and Privacy Policy." : false;

    if (!errors.errName[0] && !errors.errName[1] && !errors.errEmail && !errors.errPsw && !errors.errCb) {
        userModel.findOne({email:req.body.email})
        .then(user=>{
        
            //email not found
            if (user==null)
            {
                //SENDGRID
                sgMail.setApiKey(process.env.SENDGRID_API_KEY)
                const msg = {
                to: req.body.email,
                from: 'tta6@myseneca.ca', // Change to your verified sender
                subject: 'WELCOME TO VUDU@SENECA',
                text: `Hi ${req.body.fname}, welcome to Vudu@Seneca`,
                html: `<h1>Hi ${req.body.fname}, welcome to Vudu@Seneca</h1>`,
                }
                sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
        
                const newUser = {
                    firstName:req.body.fname,
                    lastName: req.body.lname,
                    email: req.body.email,
                    password: req.body.psw
                }
            
                //Insert into MonoDB database: create instance of model --> call the save mothod
                const user = new userModel(newUser);
                user.save()
                .then(()=>{
                    res.redirect("/User/login"); 
                })
                .catch(err=>console.log(`Error hrouterened when inserting user info in the database: ${err}`))
            }
        
            //email is found
            else
            {
                errors.errEmail = "This email is aready used."
                res.render("User/register", {
                    title: "Sign Up Page",
                    fn: req.body.fname,
                    ln: req.body.lname,
                    em: req.body.email,
                    psw: req.body.psw,
                    cb: req.body.checkBox? "checked" :"",
                    errorN: errors.errName,
                    errorE: errors.errEmail,
                    errorP: errors.errPsw,
                    errorCb: errors.errCb,        
                })
            }
        })
        .catch(err=>console.log(`Error happened when sending login info to the database: ${err}`))
    }
    else {
        console.log(errors);
        res.render("User/register", {
            title: "Sign Up Page",
            fn: req.body.fname,
            ln: req.body.lname,
            em: req.body.email,
            psw: req.body.psw,
            cb: req.body.checkBox? "checked" :"",
            errorN: errors.errName,
            errorE: errors.errEmail,
            errorP: errors.errPsw,
            errorCb: errors.errCb,        
        })
    }
}

exports.getLoginView = (req,res,next)=>{
    console.log("rendering Login Form");
    res.render("User/login",{
        title: "Log In Page"
    });
}

exports.processLoginForm = (req,res,next)=> {
    let errors={};

    errors.errEm = req.body.email =="" ? "Please enter your username." : false;
    errors.errPsw = req.body.psw =="" ? "Please enter your password." : false;

    if (!errors.errEm && !errors.errPsw) {
        console.log("Loggin inputs are valid!");

        userModel.findOne({email:req.body.email})
        .then(user=>{
  
            //email not found
            if (user==null)
            {
                errors.errPsw = "Email or password is incorrect";
                res.render("User/login",{
                    title: "Log In Page",
                    email: req.body.email,
                    psw: req.body.psw,
                    errorE: errors.errEm,
                    errorP: errors.errPsw
                })
            }
    
            //email is found
            else
            {
                bcrypt.compare(req.body.psw,user.password)
                .then(isMatched=>{
                    if (isMatched)
                    {
                            //create the session
                            req.session.userInfo = user;
                            //res.redirect("/user/profile");
                            isAdmin(req,res);
                    }
                    else
                    {
                        errors.errPsw = "password is incorrect";
                        res.render("User/login",{
                            title: "Log In Page",
                            usn: req.body.uname,
                            psw: req.body.psw,
                            errorE: errors.errEm,
                            errorP: errors.errPsw
                        })
                    }
                })
                .catch(err=>console.log(`Error happened when comparing login password: ${err}`))
            }
        })
        .catch(err=>console.log(`Error happened when sending login info to the database: ${err}`))

    }
    else {
        //console.log(errors);
        res.render("User/login",{
            title: "Log In Page",
            usn: req.body.uname,
            psw: req.body.psw,
            errorE: errors.errEm,
            errorP: errors.errPsw
        })
    }

}

exports.getUserDashboardView = (req,res,next)=>{    
    res.render("User/userDashboard",{
        title: "User Dashboard",
        name: req.session.userName
    });
}

exports.getAdminDashboardView = (req,res,next)=> {
    res.render("User/adminDashboard",{
        title: "Admin Dashboard",
        name: req.session.userName
    });
}

exports.processLogout = (req,res,next)=> {
    req.session.destroy();
    res.redirect("/user/login");
}