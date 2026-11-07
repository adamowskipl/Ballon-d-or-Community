const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

router.get('/voting', playersController.getVotingPage);
router.post('/vote-ranking', playersController.postRankingVote);
router.get('/player/:id', playersController.getPlayerById);
router.get('/players/club/:clubName', playersController.getPlayersByClub);

module.exports = router;