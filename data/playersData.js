class Trophy {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
}

class Footballer {
    constructor(id, name, club, position, goals, assists, clean_sheets, trophies = [], votes = 0) {
        this.id = id;
        this.name = name;
        this.club = club;
        this.position = position;
        this.goals = goals;
        this.assists = assists;
        this.clean_sheets = clean_sheets;
        this.trophies = trophies;
        this.image = `/images/players/${id}.jpg`;
        this.votes = votes;
    }
}

const ucl = new Trophy("UEFA Champions League", "Europe");
const laLiga = new Trophy("La Liga", "Spain");
const euro2024 = new Trophy("UEFA Euro 2024", "Europe");
const copaAmerica = new Trophy("Copa America", "South America");
const premierLeague = new Trophy("Premier League", "England");
const serieA = new Trophy("Serie A", "Italy");
const bundesliga = new Trophy("Bundesliga", "Germany");
const copaDelRey = new Trophy("Copa del Rey", "Spain");

const players = [
    new Footballer(1, "Vinicius Junior", "Real Madrid", "Attacker", 24, 11, 0, [ucl, laLiga]),
    new Footballer(2, "Rodri", "Manchester City", "Midfielder", 9, 14, 0, [premierLeague, euro2024]),
    new Footballer(3, "Jude Bellingham", "Real Madrid", "Midfielder", 23, 13, 0, [ucl, laLiga]),
    new Footballer(4, "Dani Carvajal", "Real Madrid", "Defender", 6, 5, 14, [ucl, laLiga, euro2024]),
    new Footballer(5, "Erling Haaland", "Manchester City", "Attacker", 38, 5, 0, [premierLeague]),
    new Footballer(6, "Kylian Mbappe", "Real Madrid", "Attacker", 44, 10, 0, []),
    new Footballer(7, "Lautaro Martinez", "Inter Milan", "Attacker", 27, 7, 0, [serieA, copaAmerica]),
    new Footballer(8, "Lamine Yamal", "FC Barcelona", "Attacker", 7, 10, 0, [euro2024]),
    new Footballer(9, "Toni Kroos", "Real Madrid", "Midfielder", 1, 10, 0, [ucl, laLiga]),
    new Footballer(10, "Harry Kane", "Bayern Munich", "Attacker", 44, 12, 0, []),
    new Footballer(11, "Phil Foden", "Manchester City", "Attacker", 27, 12, 0, [premierLeague]),
    new Footballer(12, "Florian Wirtz", "Bayer Leverkusen", "Midfielder", 18, 20, 0, [bundesliga]),
    new Footballer(13, "Dani Olmo", "FC Barcelona", "Midfielder", 8, 5, 0, [euro2024]),
    new Footballer(14, "Ademola Lookman", "Atalanta", "Attacker", 17, 10, 0, [ucl]),
    new Footballer(15, "Nico Williams", "Athletic Club", "Attacker", 8, 19, 0, [copaDelRey, euro2024]),
    new Footballer(16, "Granit Xhaka", "Bayer Leverkusen", "Midfielder", 4, 2, 0, [bundesliga]),
    new Footballer(17, "Federico Valverde", "Real Madrid", "Midfielder", 3, 8, 0, [ucl, laLiga]),
    new Footballer(18, "Emiliano Martinez", "Aston Villa", "Goalkeeper", 0, 0, 15, [copaAmerica]),
    new Footballer(19, "Martin Odegaard", "Arsenal", "Midfielder", 11, 11, 0, []),
    new Footballer(20, "Hakan Calhanoglu", "Inter Milan", "Midfielder", 15, 3, 0, [serieA]),
    new Footballer(21, "Bukayo Saka", "Arsenal", "Attacker", 20, 14, 0, []),
    new Footballer(22, "Antonio Ruediger", "Real Madrid", "Defender", 3, 1, 16, [ucl, laLiga]),
    new Footballer(23, "Ruben Dias", "Manchester City", "Defender", 1, 0, 15, [premierLeague]),
    new Footballer(24, "William Saliba", "Arsenal", "Defender", 2, 1, 18, []),
    new Footballer(25, "Cole Palmer", "Chelsea", "Attacker", 25, 15, 0, []),
    new Footballer(26, "Declan Rice", "Arsenal", "Midfielder", 7, 10, 0, []),
    new Footballer(27, "Vitinha", "Paris Saint-Germain", "Midfielder", 9, 5, 0, []),
    new Footballer(28, "Alejandro Grimaldo", "Bayer Leverkusen", "Defender", 12, 19, 13, [bundesliga]),
    new Footballer(29, "Mats Hummels", "AS Roma", "Defender", 4, 1, 10, []),
    new Footballer(30, "Artem Dovbyk", "AS Roma", "Attacker", 24, 10, 0, [])
];

module.exports = { Trophy, Footballer, players };