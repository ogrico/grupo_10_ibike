const ProductEntiry = require('../services/data/ProductEntity')


const product = {

    detail: (req, res) => {
		// Do the magic
		let allBikes = ProductEntiry.finByField('categoria','Bike')
		let bike = allBikes.filter(element => element.referencia == req.params.referencia)
		res.render('product', { bike })
	}

}

module.exports = product