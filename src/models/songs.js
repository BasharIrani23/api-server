"use strict";

const songs = (sequelize, DataTypes) =>
    sequelize.define("songs", {
        name: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        artistId: {
            type: DataTypes.INTEGER,
        },
    });

module.exports = songs;
