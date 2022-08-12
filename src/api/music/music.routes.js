const MusicRoutes = require("express").Router();
const {
  getAllMusic,
  getMusicByID,
  createMusic,
} = require("./music.controller");

MusicRoutes.get("/getAll", getAllMusic);
MusicRoutes.get("/getByID/:id", getMusicByID);
MusicRoutes.post("/create", createMusic);

module.exports = MusicRoutes;
