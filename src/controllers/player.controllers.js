const playerCtrl = {};

const Player = require("../models/Player");

playerCtrl.getPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);

  console.log(players);
};

playerCtrl.createPlayer = async (req, res) => {
  const players = new Player(req.body);

  await players.save();
  res.send("created Player");
};

playerCtrl.getPlayer = async (req, res) => {
  const player = await Player.findById(req.params.id);
  res.send(player);
};

playerCtrl.editPlayer = async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated Player");
};

playerCtrl.deletePlayer = async (req, res) => {
  const player = await Player.findByIdAndDelete(req.params.id);
  res.send(player);
};

module.exports = playerCtrl;
