var login = {

    singIn: (_, res) => {

        res.render('sing_in')

    }, 

    singUp: (_, res) => {

        res.sendFile(path.resolve('src/views/sing_up.html'))

    }

}

module.exports = login