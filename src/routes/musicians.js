"use strict";

const express = require("express");
const { musiciansCollection, songsCollection } = require("../models/index");
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)

router.post("/musicians", createMusiciansInstance);
router.get("/musicians", findAllMusiciansRecords);
router.get("/musicians/:id", findOneMusiciansRecord);
router.put("/musicians/:id", updateMusiciansRecord);
router.delete("/musicians/:id", deleteMusiciansRecord);
router.get("/musicianSongs/:id", allMusicianSongs);

async function createMusiciansInstance(req, res) {
    const obj = req.body;
    const musicians = await musiciansCollection.create(obj);
    res.status(201).json(musicians);
}

async function findAllMusiciansRecords(req, res) {
    const allMusicians = await musiciansCollection.read();
    res.status(200).json(allMusicians);
}

async function findOneMusiciansRecord(req, res) {
    let id = req.params.id;
    const musicians = await musiciansCollection.read(id);
    res.status(200).json(musicians);
}

async function updateMusiciansRecord(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const updatedMusicians = await musiciansCollection.update(id, obj);
    res.status(202).json(updatedMusicians);
}

async function deleteMusiciansRecord(req, res) {
    const id = req.params.id;
    const deletedMusicians = await musiciansCollection.delete(id);
    res.status(204).json(deletedMusicians);
}

async function allMusicianSongs(req, res) {
    const id = req.params.id;
    const readMusicianSongsId = await musiciansCollection.readMusicianSongs(
        id,
        songsCollection.model
    );
    res.status(200).json(readMusicianSongsId);
}

module.exports = router;
