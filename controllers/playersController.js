const { players } = require('../data/playersData');

exports.getVotingPage = (req, res) => {
    res.render('voting', { 
        players,
        hasVoted: req.session.hasVoted || false 
    });
};

exports.postRankingVote = (req, res) => {
    try {
        const rankingOrder = JSON.parse(req.body.rankingOrder);

        if (!Array.isArray(rankingOrder) || rankingOrder.length !== 30) {
            console.warn('Odrzucono głos: niekompletny ranking.');
            return res.redirect('/voting');
        }

        rankingOrder.forEach((playerId, index) => {
            const player = players.find(p => p.id === playerId);
            if (player) {
                const points = 30 - index;
                player.votes += points;
            }
        });

        req.session.hasVoted = true;

        res.redirect('/ranking');
    } catch (err) {
        console.error('Błąd zapisu rankingu:', err);
        res.redirect('/voting');
    }
};

exports.getPlayerById = (req, res) => {
    const playerId = parseInt(req.params.id, 10);
    const player = players.find(p => p.id === playerId);

    if (!player) {
        return res.status(404).send('Footballer not found');
    }

    const fromRanking = req.query.from === 'ranking';

    res.render('player-details', { player,fromRanking });
};

// Dopisujemy na samym dole pliku:
exports.getPlayersByClub = (req, res) => {
    const targetClub = req.params.clubName;
    const clubPlayers = players.filter(p => 
        p.club.toLowerCase().replace(/\s+/g, '-') === targetClub.toLowerCase().replace(/\s+/g, '-')
    );

    res.render('ranking', { 
        players: clubPlayers,
        filters: { search: '', minGoals: '', position: 'All' },
        clubFilterName: targetClub.replace(/-/g, ' ')
    });
};