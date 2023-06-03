const express = require('express');
const ClientData = require('./schema');
const router = new express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/getClient', async(req, res)=>{
    try {
        const data = await ClientData.find({}).sort({"age": 1});
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/getClient/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const data = await ClientData.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/postClient', async(req, res)=>{
    try {
        const data = await ClientData.create(req.body);
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// filter api
router.post('/filteredClient', async(req, res)=>{
    try {
        const {city, bloodType} = req.body;
        const data = await ClientData.find({city, bloodType});
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/updateClient/:id', async(req, res)=>{
    try {
        // const {id} = req.params;
        const data = await ClientData.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/deleteClient/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const data = await ClientData.findByIdAndDelete(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;