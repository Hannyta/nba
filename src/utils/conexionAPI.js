const API = "https://api.balldontlie.io/v1";

export const get = (path) => {
    // if (path === 'mockTeams') {
    //     return Promise.resolve(mockTeams);
    // }
    // if (path === 'mockAtlanta') {
    //     return Promise.resolve(mockAtlanta);
    // }

    return fetch (API + path, {
        headers: {
            "Authorization": "5f48238b-0301-4759-bdfa-855cca2f0e2d",
        }
    }).then((results) => results.json()); 
}

// const mockTeams = {
//     "data": [
//       {
//         "id": 1,
//         "conference": "East",
//         "division": "Southeast",
//         "city": "Atlanta",
//         "name": "Hawks",
//         "full_name": "Atlanta Hawks",
//         "abbreviation": "ATL",
//         "logo": atlanta
//       },
//       {
//         "id": 2,
//         "conference": "East",
//         "division": "Atlantic",
//         "city": "Boston",
//         "name": "Celtics",
//         "full_name": "Boston Celtics",
//         "abbreviation": "BOS", 
//         "logo": boston
//       },
//       {
//         "id": 3,
//         "conference": "East",
//         "division": "Atlantic",
//         "city": "Brooklyn",
//         "name": "Nets",
//         "full_name": "Brooklyn Nets",
//         "abbreviation": "BKN",
//         "logo": brooklyn
//       },
//       {
//         "id": 4,
//         "conference": "East",
//         "division": "Southeast",
//         "city": "Charlotte",
//         "name": "Hornets",
//         "full_name": "Charlotte Hornets",
//         "abbreviation": "CHA",
//         "logo": charlotte

//       },
//       {
//         "id": 5,
//         "conference": "East",
//         "division": "Central",
//         "city": "Chicago",
//         "name": "Bulls",
//         "full_name": "Chicago Bulls",
//         "abbreviation": "CHI",
//         "logo": Bulls
//       },
//       {
//         "id": 6,
//         "conference": "East",
//         "division": "Central",
//         "city": "Cleveland",
//         "name": "Cavaliers",
//         "full_name": "Cleveland Cavaliers",
//         "abbreviation": "CLE",
//         "logo": Cavaliers
//       },
//       {
//         "id": 7,
//         "conference": "West",
//         "division": "Southwest",
//         "city": "Dallas",
//         "name": "Mavericks",
//         "full_name": "Dallas Mavericks",
//         "abbreviation": "DAL",
//         "logo": Dallas
//       },
//       {
//         "id": 8,
//         "conference": "West",
//         "division": "Northwest",
//         "city": "Denver",
//         "name": "Nuggets",
//         "full_name": "Denver Nuggets",
//         "abbreviation": "DEN",
//         "logo": Denver
//       },
//       {
//         "id": 9,
//         "conference": "East",
//         "division": "Central",
//         "city": "Detroit",
//         "name": "Pistons",
//         "full_name": "Detroit Pistons",
//         "abbreviation": "DET",
//         "logo": Pistons
//       },
//       {
//         "id": 10,
//         "conference": "West",
//         "division": "Pacific",
//         "city": "Golden State",
//         "name": "Warriors",
//         "full_name": "Golden State Warriors",
//         "abbreviation": "GSW",
//         "logo": Golden
//       },
//       {
//         "id": 11,
//         "conference": "West",
//         "division": "Southwest",
//         "city": "Houston",
//         "name": "Rockets",
//         "full_name": "Houston Rockets",
//         "abbreviation": "HOU",
//         "logo": Houston
//       },
//       {
//         "id": 12,
//         "conference": "East",
//         "division": "Central",
//         "city": "Indiana",
//         "name": "Pacers",
//         "full_name": "Indiana Pacers",
//         "abbreviation": "IND",
//         "logo": Indiana
//       },
//       {
//         "id": 13,
//         "conference": "West",
//         "division": "Pacific",
//         "city": "LA",
//         "name": "Clippers",
//         "full_name": "LA Clippers",
//         "abbreviation": "LAC",
//         "logo": Clippers
//       },
//       {
//         "id": 14,
//         "conference": "West",
//         "division": "Pacific",
//         "city": "Los Angeles",
//         "name": "Lakers",
//         "full_name": "Los Angeles Lakers",
//         "abbreviation": "LAL",
//         "logo": Lakers
//       },
//       {
//         "id": 15,
//         "conference": "West",
//         "division": "Southwest",
//         "city": "Memphis",
//         "name": "Grizzlies",
//         "full_name": "Memphis Grizzlies",
//         "abbreviation": "MEM",
//         "logo": Memphis
//       },
//       {
//         "id": 16,
//         "conference": "East",
//         "division": "Southeast",
//         "city": "Miami",
//         "name": "Heat",
//         "full_name": "Miami Heat",
//         "abbreviation": "MIA",
//         "logo": Miami
//       },
//       {
//         "id": 17,
//         "conference": "East",
//         "division": "Central",
//         "city": "Milwaukee",
//         "name": "Bucks",
//         "full_name": "Milwaukee Bucks",
//         "abbreviation": "MIL",
//         "logo": Milwaukee
//       },
//       {
//         "id": 18,
//         "conference": "West",
//         "division": "Northwest",
//         "city": "Minnesota",
//         "name": "Timberwolves",
//         "full_name": "Minnesota Timberwolves",
//         "abbreviation": "MIN",
//         "logo": Minnesota
//       },
//       {
//         "id": 19,
//         "conference": "West",
//         "division": "Southwest",
//         "city": "New Orleans",
//         "name": "Pelicans",
//         "full_name": "New Orleans Pelicans",
//         "abbreviation": "NOP",
//         "logo": Pelicans
//       },
//       {
//         "id": 20,
//         "conference": "East",
//         "division": "Atlantic",
//         "city": "New York",
//         "name": "Knicks",
//         "full_name": "New York Knicks",
//         "abbreviation": "NYK",
//         "logo": Knicks
//       },
//       {
//         "id": 21,
//         "conference": "West",
//         "division": "Northwest",
//         "city": "Oklahoma City",
//         "name": "Thunder",
//         "full_name": "Oklahoma City Thunder",
//         "abbreviation": "OKC",
//         "logo": Oklahoma
//       },
//       {
//         "id": 22,
//         "conference": "East",
//         "division": "Southeast",
//         "city": "Orlando",
//         "name": "Magic",
//         "full_name": "Orlando Magic",
//         "abbreviation": "ORL",
//         "logo": Magic
//       },
//       {
//         "id": 23,
//         "conference": "East",
//         "division": "Atlantic",
//         "city": "Philadelphia",
//         "name": "76ers",
//         "full_name": "Philadelphia 76ers",
//         "abbreviation": "PHI",
//         "logo": Phila
//       },
//       {
//         "id": 24,
//         "conference": "West",
//         "division": "Pacific",
//         "city": "Phoenix",
//         "name": "Suns",
//         "full_name": "Phoenix Suns",
//         "abbreviation": "PHX",
//         "logo": Phoenix
//       },
//       {
//         "id": 25,
//         "conference": "West",
//         "division": "Northwest",
//         "city": "Portland",
//         "name": "Trail Blazers",
//         "full_name": "Portland Trail Blazers",
//         "abbreviation": "POR",
//         "logo": Portland
//       },
//       {
//         "id": 26,
//         "conference": "West",
//         "division": "Pacific",
//         "city": "Sacramento",
//         "name": "Kings",
//         "full_name": "Sacramento Kings",
//         "abbreviation": "SAC",
//         "logo": Sacramento
//       },
//       {
//         "id": 27,
//         "conference": "West",
//         "division": "Southwest",
//         "city": "San Antonio",
//         "name": "Spurs",
//         "full_name": "San Antonio Spurs",
//         "abbreviation": "SAS",
//         "logo": Spurs
//       },
//       {
//         "id": 28,
//         "conference": "East",
//         "division": "Atlantic",
//         "city": "Toronto",
//         "name": "Raptors",
//         "full_name": "Toronto Raptors",
//         "abbreviation": "TOR",
//         "logo": Raptors
//       },
//       {
//         "id": 29,
//         "conference": "West",
//         "division": "Northwest",
//         "city": "Utah",
//         "name": "Jazz",
//         "full_name": "Utah Jazz",
//         "abbreviation": "UTA",
//         "logo": Utah
//       },
//       {
//         "id": 30,
//         "conference": "East",
//         "division": "Southeast",
//         "city": "Washington",
//         "name": "Wizards",
//         "full_name": "Washington Wizards",
//         "abbreviation": "WAS",
//         "logo": Washington

//       },
//       {
//         "id": 37,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Chicago Stags",
//         "full_name": "Chicago Stags",
//         "abbreviation": "CHS"
//       },
//       {
//         "id": 38,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "St. Louis Bombers",
//         "full_name": "St. Louis Bombers",
//         "abbreviation": "BOM"
//       },
//       {
//         "id": 39,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Cleveland Rebels",
//         "full_name": "Cleveland Rebels",
//         "abbreviation": "CLR"
//       },
//       {
//         "id": 40,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Detroit Falcons",
//         "full_name": "Detroit Falcons",
//         "abbreviation": "DEF"
//       },
//       {
//         "id": 41,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Toronto Huskies",
//         "full_name": "Toronto Huskies",
//         "abbreviation": "HUS"
//       },
//       {
//         "id": 42,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Washington Capitols",
//         "full_name": "Washington Capitols",
//         "abbreviation": "WAS"
//       },
//       {
//         "id": 43,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Providence Steamrollers",
//         "full_name": "Providence Steamrollers",
//         "abbreviation": "PRO"
//       },
//       {
//         "id": 44,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Pittsburgh Ironmen",
//         "full_name": "Pittsburgh Ironmen",
//         "abbreviation": "PIT"
//       },
//       {
//         "id": 45,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Baltimore Bullets",
//         "full_name": "Baltimore Bullets",
//         "abbreviation": "BAL"
//       },
//       {
//         "id": 46,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Indianapolis Jets",
//         "full_name": "Indianapolis Jets",
//         "abbreviation": "JET"
//       },
//       {
//         "id": 47,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Anderson Packers",
//         "full_name": "Anderson Packers",
//         "abbreviation": "AND"
//       },
//       {
//         "id": 48,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Waterloo Hawks",
//         "full_name": "Waterloo Hawks",
//         "abbreviation": "WAT"
//       },
//       {
//         "id": 49,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Indianapolis Olympians",
//         "full_name": "Indianapolis Olympians",
//         "abbreviation": "INO"
//       },
//       {
//         "id": 50,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Denver Nuggets",
//         "full_name": "Denver Nuggets",
//         "abbreviation": "DN"
//       },
//       {
//         "id": 51,
//         "conference": "    ",
//         "division": "",
//         "city": "",
//         "name": "Sheboygan Redskins",
//         "full_name": "Sheboygan Redskins",
//         "abbreviation": "SHE"
//       }
//     ]
// };

// const mockAtlanta = {
//     "data": {
//         "id": 1,
//         "conference": "East",
//         "division": "Southeast",
//         "city": "Atlanta",
//         "name": "Hawks",
//         "full_name": "Atlanta Hawks",
//         "abbreviation": "ATL"
//     }
// }