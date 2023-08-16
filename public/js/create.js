const submitButton = document.querySelector(".create-character");

const createBtnHandler = async (event) => {
  event.preventDefault();

  // Profile input values
  const bio = document.querySelector("#bio").value.trim();
  const name = document.querySelector("#characterName").value.trim();
  // const image = document.querySelector('#character-image');
  // const age = document.querySelector('#age').value.trim();
  // const location = document.querySelector('#location').value.trim();
  // const alignment = document.querySelector('#align-select').value.trim();

  // Stats input values
  const statsName1 = document.querySelector("#stat-select-1").value.trim();
  const statsLevel1 = document.querySelector("#level-1").value.trim();
  const statsName2 = document.querySelector("#stat-select-2").value.trim();
  const statsLevel2 = document.querySelector("#level-2").value.trim();
  const statsName3 = document.querySelector("#stat-select-3").value.trim();
  const statsLevel3 = document.querySelector("#level-3").value.trim();
  const statsName4 = document.querySelector("#stat-select-4").value.trim();
  const statsLevel4 = document.querySelector("#level-4").value.trim();
  const statsName5 = document.querySelector("#stat-select-5").value.trim();
  const statsLevel5 = document.querySelector("#level-5").value.trim();
  const statsName6 = document.querySelector("#stat-select-6").value.trim();
  const statsLevel6 = document.querySelector("#level-6").value.trim();

  // Skill input values
  const skillName1 = document.querySelector("#skill-1").value.trim();
  const skillName2 = document.querySelector("#skill-2").value.trim();
  const skillName3 = document.querySelector("#skill-3").value.trim();
  const skillName4 = document.querySelector("#skill-4").value.trim();
  const skillName5 = document.querySelector("#skill-5").value.trim();
  const skillName6 = document.querySelector("#skill-6").value.trim();

  const skills = [
    {
      name: skillName1,
    },
    {
      name: skillName2,
    },
    {
      name: skillName3,
    },
    {
      name: skillName4,
    },
    {
      name: skillName5,
    },
    {
      name: skillName6,
    },
  ];

  // console.log(skills)

  const stats = [
    {
      name: statsName1,
      level: statsLevel1,
    },
    {
      name: statsName2,
      level: statsLevel2,
    },
    {
      name: statsName3,
      level: statsLevel3,
    },
    {
      name: statsName4,
      level: statsLevel4,
    },
    {
      name: statsName5,
      level: statsLevel5,
    },
    {
      name: statsName6,
      level: statsLevel6,
    },
  ];

  // console.log(stats)

  const profile = {
    name: name,
    bio: bio,
    stats: stats,
    skills: skills,
    // img: image,
    // age: age,
    // location: location,
    // alignment: alignment,
  };

  // console.log(JSON.stringify(profile))

  if (profile) {
    const response = await fetch("api/create", {
      method: "POST",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.replace("/dashboard");
      console.log(response);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".create-character-form")
  .addEventListener("submit", createBtnHandler);
