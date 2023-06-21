"use strict";

const express = require("express");
const { songsCollection } = require("../models/index");
const router = express.Router();

router.post("/songs", createSongsInstance);
router.get("/songs", findAllSongsRecords);
router.get("/songs/:id", findOneSongsRecord);
router.put("/songs/:id", updateSongsRecord);
router.delete("/songs/:id", deleteSongsRecord);

async function createSongsInstance(req, res) {
    const obj = req.body;
    const songs = await songsCollection.create(obj);
    res.status(201).json(songs);
}

async function findAllSongsRecords(req, res) {
    const allSongs = await songsCollection.read();
    res.status(200).json(allSongs);
}

async function findOneSongsRecord(req, res) {
    let id = req.params.id;
    const songs = await songsCollection.read(id);
    res.status(200).json(songs);
}

async function updateSongsRecord(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const updatedSongs = await songsCollection.update(id, obj);
    res.status(202).json(updatedSongs);
}

async function deleteSongsRecord(req, res) {
    const id = req.params.id;
    const deletedSongs = await songsCollection.delete(id);
    res.status(204).json(deletedSongs);
}

module.exports = router;
