// const data = {
//   //  will fix later to an actual dropdown

//   alignments: [
//     "Lawful Good",
//     "Neutral Good",
//     "Chaotic Good",
//     "Lawful Neutral",
//     "True Neutral",
//     "Chaotic Neutral",
//     "Lawful Evil",
//     "Neutral Evil",
//     "Chaotic Evil",
//   ],
//   // will fix later
//   stats: [{ name: "Stat1", options: ["Option1", "Option2"] }],
//   abilities: ["Ability 1", "Ability 2", "Ability 3", "Ability 4"],
//   skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
// };

// const source = document.getElementById("character-template").innerHTML;
// const template = Handlebars.compile(source);

// const generatedHTML = template(data);

// document.getElementById("contentContainer").innerHTML = generatedHTML;

// document.getElementById("homeBtn").addEventListener("click", function () {
//   window.location.href = "/home";
// });

// document.getElementById("logoutBtn").addEventListener("click", function () {
//   alert("Logged out!");
// });

const submitButton = document.querySelector('.create-character');

const createBtnHandler = async (event) => {
  event.preventDefault();

  // Profile input values
  const name = document.querySelector('#characterName').value.trim();
  // const image = document.querySelector('#character-image');
  // const age = document.querySelector('#age').value.trim();
  // const location = document.querySelector('#location').value.trim();
  // const alignment = document.querySelector('#align-select').value.trim();
  const bio = document.querySelector('#bio').value.trim();

  // Stats input values
  const statsName1 = document.querySelector('#stat-select-1').value.trim();
  const statsLevel1 = document.querySelector('#level-1').value.trim();
  const statsName2 = document.querySelector('#stat-select-2').value.trim();
  const statsLevel2 = document.querySelector('#level-2').value.trim();
  const statsName3 = document.querySelector('#stat-select-3').value.trim();
  const statsLevel3 = document.querySelector('#level-3').value.trim();
  const statsName4 = document.querySelector('#stat-select-4').value.trim();
  const statsLevel4 = document.querySelector('#level-4').value.trim();
  const statsName5 = document.querySelector('#stat-select-5').value.trim();
  const statsLevel5 = document.querySelector('#level-5').value.trim();
  const statsName6 = document.querySelector('#stat-select-6').value.trim();
  const statsLevel6 = document.querySelector('#level-6').value.trim();
  
  // Skill input values
  const skillName1 = document.querySelector('#skill-1').value.trim();
  const skillName2 = document.querySelector('#skill-2').value.trim();
  const skillName3 = document.querySelector('#skill-3').value.trim();
  const skillName4 = document.querySelector('#skill-4').value.trim();
  const skillName5 = document.querySelector('#skill-5').value.trim();
  const skillName6 = document.querySelector('#skill-6').value.trim();
  
  const stats = [
    {
      name: statsName1,
      level: statsLevel1
    },
    {
      name: statsName2,
      level: statsLevel2
    },
    {
      name: statsName3,
      level: statsLevel3
    },
    {
      name: statsName4,
      level: statsLevel4
    },
    {
      name: statsName5,
      level: statsLevel5
    },
    {
      name: statsName6,
      level: statsLevel6
    }
  ]

  // console.log(stats)

  const skills = [
    {
      name: skillName1
    },
    {
      name: skillName2
    },
    {
      name: skillName3
    },
    {
      name: skillName4
    },
    {
      name: skillName5
    },
    {
      name: skillName6
    }
  ]

  // console.log(skills)
  
  const profile = {
    name: name,
    // img: image,
    // age: age,
    // location: location,
    // alignment: alignment,
    bio: bio,
    stats: [{stats}],
    skills: [{skills}]
  }

  // console.log(profile)

  if (profile) {
    const response = await fetch('api/create', {
      method: 'POST',
      body: JSON.stringify({ profile }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      window.location.replace('/dashboard');
      console.log(response)
    } else {
      alert(response.statusText);
    }
  }
  
}

document
  .querySelector('.create-character-form')
  .addEventListener('submit', createBtnHandler);

