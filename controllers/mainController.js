const path = require('path');
const fs = require('fs');
const { players } = require('../data/playersData');

exports.getHome = (req, res) => {
    res.render('index');
};

exports.getNews = (req, res) => {
    res.render('news');
};

exports.getRanking = (req, res) => {
    let filteredPlayers = [...players];
    const { search, minGoals, position } = req.query;

    if (search && search.trim() !== '') {
        filteredPlayers = filteredPlayers.filter(p => 
            p.name.toLowerCase().includes(search.trim().toLowerCase())
        );
    }

    if (minGoals && !isNaN(minGoals)) {
        filteredPlayers = filteredPlayers.filter(p => p.goals >= parseInt(minGoals, 10));
    }

    if (position && position !== 'All') {
        filteredPlayers = filteredPlayers.filter(p => p.position.toLowerCase() === position.toLowerCase());
    }

    filteredPlayers.sort((a, b) => b.votes - a.votes);

    res.render('ranking', { 
        players: filteredPlayers,
        filters: {
            search: search || '',
            minGoals: minGoals || '',
            position: position || 'All'
        }
    });
};

exports.getStatsJson = (req, res) => {
    res.json(players);
};

exports.getRulesText = (req, res) => {
    res.type('text/plain').send("Ballon d'Or Voting Rules:\n1. Drag or click all 30 players into positions #1 to #30.\n2. Submit your official ballot.\n3. Fair play only.");
};

exports.downloadRules = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'ballon_dor_rules.txt');

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "OFFICIAL BALLON D'OR COMMUNITY RULES\n\n1. Rank all 30 nominees.\n2. Position #1 gets 30 pts, #30 gets 1 pt.\n3. Only fair play votes are recorded.");
    }

    res.download(filePath, 'BallonDor_Official_Rules.txt');
};