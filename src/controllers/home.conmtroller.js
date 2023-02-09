const fs = require('fs')
const path = require('path')

const bikesFilePath = path.join(__dirname, '../data/bikes.json');
const bikes = JSON.parse(fs.readFileSync(bikesFilePath, 'utf-8'));

const home = {

    home: (_, res) => {
		res.render('index', { bikes })
    }

}

module.exports = home