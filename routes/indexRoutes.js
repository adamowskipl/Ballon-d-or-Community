const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHome);
router.get('/ranking', mainController.getRanking);
router.get('/news', mainController.getNews);
router.get('/api/players', mainController.getStatsJson);
router.get('/rules.txt', mainController.getRulesText);
router.get('/download-rules', mainController.downloadRules);

module.exports = router;