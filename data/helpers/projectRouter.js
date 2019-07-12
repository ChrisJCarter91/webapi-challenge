const express = require('express');
const Projects = require('./projectModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.get('/:id', async (req, res) => {
    try{
        const {
            params: { id },
        } = req;
        const projects = await Projects.get(id);
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.get('/:id/actions', async (req, res) => {
    try{
        const {
            params: { id },
        } = req;
        const projectActions = await Projects.getProjectActions(id);
        res.status(200).json(projectActions);
    } catch (error) {
    res.status(500).json({ message: 'There was a server error' })
    }
});

router.post('/', async (req, res) => {
    try{
        const { body } = req;
        const project = await Projects.insert(body);
        res.status(201).json(project)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

router.put('/:id', async (req, res) => {
    try{
        const {
            params: { id },
            body,
        } = req;
        const update = await Projects.update(id, body);
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
        const deletedProject = await Projects.remove(id);
        res.status(201).json(deletedProject);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was a server error' })
    }
});

module.exports = router;