// Task 1

// Data set up
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

// Creating Collections from the data
db.collection("soccer_teams").doc("Real_Madrid").set(Real_Madrid);
db.collection("soccer_teams").doc("Manchester_United").set(Manchester_United);
db.collection("soccer_teams").doc("Manchester_City").set(Manchester_City);
db.collection("soccer_teams")
  .doc("Brazil_National_Team")
  .set(Brazil_National_Team);
db.collection("soccer_teams")
  .doc("Argentina_National_Team")
  .set(Argentina_National_Team);
db.collection("soccer_teams").doc("Atletico_Madrid").set(Atletico_Madrid);
db.collection("soccer_teams").doc("Barcelona").set(Barcelona);

// Task 2
// Q1
// let t2q1 = document.querySelector('#t2q1');

// const search => {
// let common = [];

db.collection("soccer_teams")
  .where("country", "==", "Spain")
  .get()
  .then((response) => {
    let docs = response.docs;
    // loop through the docs array
    docs.forEach((doc) => {
      console.log(doc.data().team_name);
    });
  });

// // Q2
// db.collection("soccer_teams")
//   .where("country", "==", "Spain")
//   .where("city", "==", "Madrid")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q3 WIP
// db.collection("soccer_teams")
//   .where("team_name", "array-contains", "National")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q4
// db.collection("soccer_teams")
//   .where("country", "!=", "Spain")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q5
// db.collection("soccer_teams")
//   .where("country", "not-in", ["Spain", "England"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q6
// db.collection("soccer_teams")
//   .where("worldwide_fans", ">=", 700)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q7
// db.collection("soccer_teams")
//   .where("worldwide_fans", "<=", 600)
//   .where("worldwide_fans", ">=", 500)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q8
// db.collection("soccer_teams")
//   .where("top_scorers", "array-contains", "Ronaldo")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// // Q9
// db.collection("soccer_teams")
//   .where("top_scorers", "array-contains-any", ["Ronaldo", "Messi", "Maradona"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Task 3
// a

db.collection("soccer_teams").doc("Real_Madrid").update({
  worldwide_fans: 811,
  team_name: "Real Madrid FC",
});

db.collection("soccer_teams").doc("Barcelona").update({
  worldwide_fans: 747,
  team_name: "FC Barcelona",
});

db.collection("soccer_teams")
  .doc("Real_Madrid")
  .update({ top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard") });

db.collection("soccer_teams")
  .doc("Real_Madrid")
  .update({ top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo") });

db.collection("soccer_teams")
  .doc("Barcelona")
  .update({ top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol") });
db.collection("soccer_teams")
  .doc("Barcelona")
  .update({ top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco") });

// b
db.collection("soccer_teams")
  .doc("Barcelona")
  .set({ color: { home: "Red", away: "Gold" } }, { merge: true });

db.collection("soccer_teams")
  .doc("Real_Madrid")
  .set({ color: { home: "White", away: "Black" } }, { merge: true });

db.collection("soccer_teams")
  .doc("Real_Madrid")
  .update({ "color.away": "Purple" });

db.collection("soccer_teams").doc("Barcelona").update({ "color.away": "Pink" });
