const express = require('express')
const Fav = require('../models/fav')
const isAuthenticated = require('../middleware/auth')
const router = new express.Router()

router.post('/api/favs', isAuthenticated, async (req, res) => {
    const fav = new Fav({...req.body, owner: req.user._id})

    try {
        await fav.save()
        res.status(201).send(fav)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/api/favs', isAuthenticated, async (req, res) => {

    try {
        await req.user.populate('favs')
        res.send(req.user.favs)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/favs/:id', isAuthenticated, async (req, res) => {
    const _id = req.params.id
    try {
        const fav = await Fav.findOne({ _id, owner: req.user._id })

        if (!fav) {
            return res.status(404).send()
        }

        res.send(fav)
    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/api/favs/:id', isAuthenticated, async (req, res) => {
    try {
        const fav = await Fav.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!fav) {
            res.status(404).send()
        }

        res.send(fav)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router