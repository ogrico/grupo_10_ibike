const fs = require('fs')
const path = require('path')

const bikesFilePath = path.join(__dirname, '../data/bikes.json');
const bikes = JSON.parse(fs.readFileSync(bikesFilePath, 'utf-8'));


const product = {

    detail: (req, res) => {
		// Do the magic
		let bike = bikes.filter(element => element.referencia == req.params.referencia)
		res.render('product', { bike })
	}

}

module.exports = product