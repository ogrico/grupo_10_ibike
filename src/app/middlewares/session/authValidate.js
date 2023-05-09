function outhValidate(req, res, next) { 

   /*  if(!req.session.userLogged){
        return res.redirect('/singIn')
    } */
    next()
}
module.exports = outhValidate