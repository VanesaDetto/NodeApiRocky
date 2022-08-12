const music = require("./music.model");
const { setError } = require("../../helpers/error");

const getAllMusic = async (req, res, next) => {
  try {
    const musics = await music.find();
    return res.json({
      status: 200,
      message: "Recover all actors",
      data: { musics },
    });
  } catch (error) {
    return next(setError(500, "Failed all Actors"));
  }
};

const getMusicByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const music = await music.findById(id);
    if (!music) return next(setError(404, "Music not found"));
    return res.json({
      status: 200,
      message: "Recover music by ID",
      data: { music },
    });
  } catch (error) {
    return next(setError(500, "Failed Music by ID"));
  }
};

const createMusic = async (req, res, next) => {
  try {
    const MusicToSave = new music(req.body);
    const musicDB = await MusicToSave.save();
    return res.json({
      status: 201,
      message: "Create music",
      data: { musicDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create music"));
  }
};

module.exports = { getAllMusic, getMusicByID, createMusic };
