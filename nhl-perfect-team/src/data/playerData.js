import axios from 'axios';

let bostonRoster = [];
let torontoRoster = [];

let bostonCenters = [];
let bostonLeftWings = [];
let bostonRightWings = [];
let bostonDefensemen = [];
let bostonGoalies = [];

let torontoCenters = [];
let torontoLeftWings = [];
let torontoRightWings = [];
let torontoDefensemen = [];
let torontoGoalies = [];

let bostonOverall = [
  {name:'Patrice Bergeron', overall: 90},
  {name:'Brad Marchand', overall: 88},
  {name:'David Pastrnak', overall: 87},
  {name:'Zdeno Chara', overall: 85},
  {name:'Torey Krug', overall: 84},
  {name:'David Krejci', overall: 83},
  {name:'Jake Debrusk', overall: 82},
  {name:'John Moore', overall: 82},
  {name:'Danton Heinen', overall: 81},
  {name:'Brandon Carlo', overall: 81},
  {name:'David Backes', overall: 81},
  {name:'Kevan Miller', overall: 80},
  {name:'Matt Grzelcyk', overall: 79},
  {name:'Joakim Nordstrom', overall: 78},
  {name:'Anders Bjork', overall: 78},
  {name:'Sean Kuraly', overall: 77},
  {name:'Lee Stempniak', overall: 76},
  {name:'Noel Acciari', overall: 76},
  {name:'Chris Wagner', overall: 76},
  {name:'Daniel Winnik', overall: 75},
  {name:'Jaroslav Halak', overall: 80},
  {name:'Tuukka Rask', overall: 90},
  {name:'Steven Kampfer', overall: 67},
  {name:'Paul Carey', overall: 66},
  {name:'Marcus Johansson', overall: 70},
  {name:'Jordan Szwarz', overall: 69},
  {name:'Charlie Coyle', overall: 72},
  {name:'Zane McIntyre', overall: 70},
  {name:'Anton Blidh', overall: 67},
  {name:'Connor Clifton', overall: 66},
  {name:'Peter Cehlarik', overall: 65},
  {name:'Jakub Zboril', overall: 60},
  {name:'Jeremy Lauzon', overall: 70},
  {name:'Zach Senyshyn', overall: 64},
  {name:'Charlie McAvoy', overall: 85},
  {name:'Trent Frederic', overall: 69},
  {name:'Urho Vaakanainen', overall: 61},
  {name:'Jack Studnicka', overall: 66},
  {name:'Kyle Keyser', overall: 62},
  {name:'Karson Kuhlman', overall: 66},
]

let torontoOverall = 
 [ { name:'John Tavares', overall: 90},
   { name:'Auston Matthews', overall: 89,},
   { name:'Mitchell Marner', overall: 86,},
   { name:'William Nylander', overall: 85,},
   { name:'Nazem Kadri', overall: 85,},
   { name:'Jake Gardiner', overall: 83,},
   { name:'Patrick Marleau', overall: 82,},
   { name:'Nikita Zaitsev', overall: 82,},
   { name:'Zach Hyman',overall : 81,},
   { name:'Ron Hainsey', overall: 80,},
   { name:'Connor Brown', overall: 80,},
   { name:'Travis Dermott', overall: 79,},
   { name:'Andreas Johnsson', overall: 78,},
   { name:'Kasperi Kapanen', overall: 78,},
   { name:'Tyler Ennis', overall: 78,},
   { name:'Jake Muzzin', overall: 85,},
   { name:'Frederik Andersen', overall: 88,},
   { name:'Martin Marincin', overall: 66,},
   { name:'Justin Holl', overall: 69,},
   { name:'Garret Sparks', overall: 70,},
   { name:'Nic Petan', overall: 70,},
   { name:'Frederik Gauthier', overall: 68,},
   { name:'Igor Ozhiganov', overall: 70,},
   { name:'Morgan Rielly', overall: 75,},
   { name:'Joseph Woll', overall: 70},
]


// Boston
axios
  .get("https://statsapi.web.nhl.com/api/v1/teams/6/roster")
  .then(response => {
    bostonRoster = response.data.roster;

    //Add Boston's Team Photos to Each Player
    bostonRoster.forEach(player => {
     player.photo = `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`;
    })

    //Add Overall Values from Overall's Array
    bostonRoster.forEach(player => {
      for (let i = 1; i < bostonOverall.length; i++){
        if (player.person.fullName == bostonOverall[i].name){
        player.overall = bostonOverall[i].overall;
        }
      }
      
    })

    //Filter Boston's Roster into Players by Position
    
    bostonCenters = bostonRoster.filter(player => {
        if (player.position.abbreviation === 'C'){
          return player
        };
      })
    bostonLeftWings = bostonRoster.filter(player => {
      if (player.position.abbreviation === 'LW'){
        return player
      };
    });

    bostonRightWings = bostonRoster.filter(player => {
      if (player.position.abbreviation === 'RW') {
        return player
      };
    });

    bostonDefensemen = bostonRoster.filter(player => {
      if (player.position.abbreviation === 'D') {
        return player
      };
    });

    bostonGoalies = bostonRoster.filter(player => {
      if (player.position.abbreviation === 'G') {
        return player
      };
    });

  })
  .catch(error => {
    console.log(error);
  })

// Toronto
axios
  .get("https://statsapi.web.nhl.com/api/v1/teams/10/roster")
  .then(response => {
    torontoRoster = response.data.roster;

    //Add Toronto's Team Photos to Each Player
    torontoRoster.forEach(player => {
     player.photo = `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`;
    })

    // Add Overall Values from Overall's Array
    torontoRoster.forEach(player => {
      for (let i = 0; i < torontoOverall.length; i++){
        if (player.person.fullName == torontoOverall[i].name){
        player.overall = torontoOverall[i].overall;
        }
      }
    })
    console.log(torontoRoster)

    //Filter Toronto's Roster into Players by Position
    torontoCenters = torontoRoster.filter(player => {
      if (player.position.abbreviation === 'C'){
        return player
      };
    });

    torontoLeftWings = torontoRoster.filter(player => {
      if (player.position.abbreviation === 'LW') {
        return player
      };
    });

    torontoRightWings = torontoRoster.filter(player => {
      if (player.position.abbreviation === 'RW'){
        return player
      };
    });

    torontoDefensemen = torontoRoster.filter(player => {
      if (player.position.abbreviation === 'D'){
        return player
      };
    });
    torontoGoalies = torontoRoster.filter(player => {
      if (player.position.abbreviation === 'G'){
        return player
      };
    });

    console.log(torontoLeftWings)

  })
  .catch(error => {
    console.log(error);
  })

