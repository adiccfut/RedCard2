let Title = [
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " LaLiga ",
  " LaLiga ",
  " LaLiga ",
  " LaLiga ",
  " Serie A ",
  " Serie A ",
  " Serie A ",
  " Bundesliga ",
  " Bundesliga ",
  " Bundesliga ",
  " Bundesliga ",
  " Bundesliga ",
  " Liga Profesional Argentina ",
  " Liga Profesional Argentina ",
  " Liga Profesional Argentina ",
  " Liga Profesional Argentina ",
  " Liga BetPlay Colombia ",
  " Liga BetPlay Colombia ",
  " Liga BetPlay Colombia ",
  " Liga BetPlay Colombia ",
  "ERROR"
];
let Match = [
  " Wolverhampton Wanderers - Brentford ",
  " Burnley - Arsenal ",
  " Liverpool - Crystal Palace ",
  " Manchester City - Southampton ",
  " Norwich City - Watford ",
  " Aston Villa - Everton ",
  " Rayo Vallecano - Getafe ",
  " Atlético Madrid - Athletic Club ",
  " Elche - Levante ",
  " Deportivo Alavés - Osasuna ",
  " Genoa - Fiorentina ",
  " Internazionale - Bologna ",
  " Salernitana - Atalanta ",
  " Arminia Bielefeld - Hoffenheim ",
  " Augsburg - Borussia M'gladbach ",
  " Bayern München - Bochum ",
  " Mainz 05 - Freiburg ",
  " Köln - RB Leipzig ",
  " Godoy Cruz - Sarmiento ",
  " Vélez Sarsfield - Aldosivi ",
  " Racing Club - Talleres Córdoba ",
  " Atlético Tucumán - Boca Juniors ",
  " Envigado - Deportes Quindío ",
  " América de Cali - Jaguares de Córdoba ",
  " Junior - Atlético Nacional ",
  " Millonarios - Atlético Huila "
];

let Est = [
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027067/wolverhampton-wanderers-vs-brentford/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027060/burnley-vs-arsenal/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027061/liverpool-vs-crystal-palace/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027062/manchester-city-vs-southampton/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027064/norwich-city-vs-watford/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027058/aston-villa-vs-everton/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046039/rayo-vallecano-vs-getafe/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046032/atletico-madrid-vs-athletic-club/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046040/elche-vs-levante/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046031/deportivo-alaves-vs-osasuna/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064562/genoa-vs-fiorentina/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064564/internazionale-vs-bologna/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064567/salernitana-vs-atalanta/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042498/arminia-bielefeld-vs-hoffenheim/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042496/augsburg-vs-borussia-mgladbach/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042491/bayern-m-nchen-vs-bochum/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042495/mainz-05-vs-freiburg/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042499/koln-vs-rb-leipzig/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043920/godoy-cruz-vs-sarmiento/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043919/velez-sarsfield-vs-aldosivi/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043928/racing-club-vs-talleres-cordoba/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043925/atletico-tucuman-vs-boca-juniors/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060783/envigado-vs-deportes-quindio/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060782/america-de-cali-vs-jaguares-de-cordoba/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060787/junior-vs-atletico-nacional/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060786/millonarios-vs-atletico-huila/ "
];

let Enl = [
  "",
  "",
  "",
  "",
  "",
  "",

  "",
  "",
  "",
  "",

  "",
  "",
  "",

  "",
  "",
  "",
  "",
  "",

  "",
  "",
  "",
  AArg[0],

  "",
  "",
  ACol[0],
  "",
  "error"
];

let HOY = "18/09/2021";

//console.log<b>(Est)</b></b>;
