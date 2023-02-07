var products = {

    getProducts: (_, res) => {

        //res.render('product')
        res.sendFile(path.resolve('src/views/list.html'))

    }

}

module.exports = products