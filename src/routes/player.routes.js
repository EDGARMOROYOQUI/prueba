const { Router } = require("express");
const router = Router();

const playerCtrl = require("../controllers/player.controllers.js");

router.get("/", playerCtrl.getPlayers);
router.post("/", playerCtrl.createPlayer);
router.get("/:id", playerCtrl.getPlayer);
router.put("/:id", playerCtrl.editPlayer);
router.delete("/:id", playerCtrl.deletePlayer);

module.exports = router;
