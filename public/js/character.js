const data = {
  //  will fix later to an actual dropdown

  alignments: [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ],
  // will fix later
  stats: [{ name: "Stat1", options: ["Option1", "Option2"] }],
  abilities: ["Ability 1", "Ability 2", "Ability 3", "Ability 4"],
  skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
};

const source = document.getElementById("character-template").innerHTML;
const template = Handlebars.compile(source);

const generatedHTML = template(data);

document.getElementById("contentContainer").innerHTML = generatedHTML;

document.getElementById("homeBtn").addEventListener("click", function () {
  window.location.href = "/home";
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  alert("Logged out!");
});
