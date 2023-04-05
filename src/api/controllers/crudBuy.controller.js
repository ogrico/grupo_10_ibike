const { Buy, Shoppinglist, Product, User } = require('../database/associations')

const crudBuy = {

    getAll: async (_, res) => {
        try {
            const buys = await Buy.findAll({
                include: [{
                    model: User
                }]
            })
            res.status(200).json({
                "msg": "ok",
                buys
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    createBuy: async (req, res) => {
        try {
            const newBuy = {
                "date": new Date(),
                "total": req.body.total,
                "discount": req.body.discount,
                "user_id": req.body.user_id
            }, buy = await Buy.create(newBuy)
            res.status(200).json({
                "msg": "ok",
                buy
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    updateBuy: async (req, res) => {
        try {
            const buyUpdate = await Buy.update(req.body, {
                where: { id: req.params.id }
            })
            res.status(200).josn({
                msg: "Ok",
                body: req.body,
                buyUpdate
            })
        } catch (error) {
            res.status(500).josn({
                error
            })
        }
    },
    deleteBuy: async (req, res) => {
        try {
            const deleteBuy = await Buy.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                id: req.params.id,
                deleteBuy
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }

}

module.exports = crudBuy