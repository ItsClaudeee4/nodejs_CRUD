const express = require("express");
const router = express.Router();
const moment = require("moment");
const User = require("../models/articleSchema");
const userControl = require("../controllers/userControl");

router.get("/", userControl.user_index_get);

router.get("/edit/:id", userControl.user_edit_get);

router.get("/view/:id", userControl.user_view_get);

router.post("/search", userControl.user_search_post);

router.post("/user/add.html", userControl.user_add_post);

router.delete("/edit/:id", userControl.user_edit_delete);
router.put("/edit/:id", userControl.user_edit_put);
router.get("/user/add.html", userControl.user_add_get);
router.get("/user/search.html", userControl.user_search_get);

module.exports = router;
