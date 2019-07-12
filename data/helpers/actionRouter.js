const express = require('express');
const Actions = require('./actionModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.get('/:id', async (req, res) => {
    try{
        const{
            params: { id },
        } = req;
            const action = await Actions.get(id);
            res.status(200).json(action);
    } catch (error) {
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.post('/', async (req, res) => {
    try{
        const {
            body: { project_id, description, notes, completed, },
        } = req;
        const action = await Actions.insert({
            project_id,
            description,
            notes,
            completed,
        });
        res.status(201).json(action)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.put('/:id', async (req, res) => {
    try{
        const {
            params: { id },
            body: { project_id, description, notes, completed, }
        } = req;
        const update = await Actions.update(id, {
            project_id,
            description,
            notes,
            completed,
        });
        res.status(201).json(update);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const {
            params: { id },
        } = req;
        const deletedACtion = await Actions.remove(id);
        res.status(201).json(deletedACtion);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

module.exports = router;