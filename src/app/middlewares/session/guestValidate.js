function guestValidate(req, res, next) { 
    if(req.session.userLogged){
        return res.redirect('/acount')
    }
    next()
}
module.exports = guestValidate