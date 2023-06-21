"use strict";

const { Sequelize, DataTypes } = require("sequelize");

const DB_URL =
    process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DB_URI;

let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
              dialectOptions: {
                  ssl: {
                      require: true,
                      rejectUnauthorized: false,
                  },
              },
          }
        : {};

let sequelize = new Sequelize(DB_URL, sequelizeOptions);

const clothes = require("./clothes");
const food = require("./food");
const songs = require("./songs");
const musicians = require("./musicians");
const Collection = require("./collection");

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);
const songsModel = songs(sequelize, DataTypes);
const musiciansModel = musicians(sequelize, DataTypes);

musiciansModel.hasMany(songsModel, {
    foreignKey: "musiciansId",
    sourceKey: "id",
});

songsModel.belongsTo(musiciansModel, {
    foreignKey: "musiciansId",
    targetKey: "id",
});

const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(clothesModel);
const songsCollection = new Collection(songsModel);
const musiciansCollection = new Collection(musiciansModel);

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes),
    foodCollection,
    clothesCollection,
    songsCollection,
    musiciansCollection,
};
