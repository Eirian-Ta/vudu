const isAdmin = (req,res,next)=>{
    if (req.session.userInfo.type=="admin")
    {
        res.redirect("/user/admin-dashboard")
    }
    else
    {
        res.redirect("/user/user-dashboard")
    }

}

module.exports = isAdmin;