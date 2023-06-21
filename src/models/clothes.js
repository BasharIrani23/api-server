"use strict";

const clothes = (sequelize, DataTypes) =>
    sequelize.define("Clothes", {
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
        },
        FabricName: {
            type: DataTypes.STRING,
        },
        origin: {
            type: DataTypes.STRING,
        },
    });

module.exports = clothes;
