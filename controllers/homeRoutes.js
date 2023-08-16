// Is this a Model, a View, or a Controller?
// This file is a Controller.
// What is it responsible for handling?
// It routes commands to the Model and View parts.

const router = require("express").Router();
const { User, Profile, Skill, Stats } = require("../models");
const withAuth = require("../utils/auth");

// GET route for getting all of the dishes that are on the menu
router.get("/", async (req, res) => {
  // This method is rendering the 'homepage' handlebars.js template. This is how we connect each route to the correct template.
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", async (req, res) => {
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

router.get("/create", withAuth, async (req, res) => {
  res.render("create", {
    logged_in: req.session.logged_in,
  });
});

router.get("/profile/:id", withAuth, async (req, res) => {
  try {
    const profileData = await Profile.findByPk(req.params.id, {
      include: [
        {
          model: Stats,
          attributes: ["id", "name", "level"],
        },
        {
          model: Skill,
          attributes: ["id", "name"],
        },
      ],
    });

    // res.status(200).json(profileData)

    const profile = profileData.get({ plain: true });

    res.render("profile", {
      ...profile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets User based on id and includes profile data for specific user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Profile,
          attributes: ["id", "name", "image"],
        },
      ],
    });

    // res.status(200).json(userData)
    const user = userData.get({ plain: true });

    // Renders dashboard.handlebars
    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
