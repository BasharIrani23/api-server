"use strict";

const musicians = (sequelize, DataTypes) =>
    sequelize.define("musicians", {
        name: {
            type: DataTypes.STRING,
        },
        numOfAlbums: {
            type: DataTypes.INTEGER,
        },
    });

module.exports = musicians;
