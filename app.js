let Real_Madrid = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwide_fans: 798,
};

let Manchester_United = {
  team_name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  worldwide_fans: 755,
};

let Manchester_City = {
  team_name: "Manchester City",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  worldwide_fans: 537,
};

let Brazil_National_Team = {
  team_name: "Brazil National Team",
  city: "N/A",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  worldwide_fans: 950,
};

let Argentina_National_Team = {
  team_name: "Argentina National Team",
  city: "N/A",
  country: "Argentina",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  worldwide_fans: 888,
};

let Atletico_Madrid = {
  team_name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragonés", "Griezmann", "Torez"],
  worldwide_fans: 400,
};

let Barcelona = {
  team_name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  worldwide_fans: 738,
};

db.collection("soccer_teams").doc("Real_Madrid").add(Real_Madrid);
db.collection("soccer_teams").doc("Manchester_United").add(Manchester_United);
db.collection("soccer_teams").doc("Manchester_City").add(Manchester_City);
db.collection("soccer_teams")
  .doc("Brazil_National_Team")
  .add(Brazil_National_Team);
db.collection("soccer_teams")
  .doc("Argentina_National_Team")
  .add(Argentina_National_Team);
db.collection("soccer_teams").doc("Atletico_Madrid").add(Atletico_Madrid);
db.collection("soccer_teams").doc("Barcelona").add(Barcelona);
