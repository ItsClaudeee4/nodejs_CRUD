const moment = require("moment");
const User = require("../models/articleSchema");

const user_index_get = async (req, res) => {
  await User.find()
    .then((result) => {
      res.render("index", { data: result, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_edit_get = (req, res) => {
  User.findById(req.params.id)
    .then((results) => {
      res.render("user/edit", { data: results, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_view_get = (req, res) => {
  User.findById(req.params.id)
    .then((results) => {
      res.render("user/view", { data: results, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};
const user_search_post = (req, res) => {
  console.log(req.body);
  User.find({
    $or: [
      { firstName: req.body.searchText.trim() },
      { lastName: req.body.searchText.trim() },
    ],
  })
    .then((results) => {
      console.log(results);
      res.render("user/search", { arr: results });
    })
    .catch((err) => {
      console.log(err);
    });
};
const user_add_post = (req, res) => {
  User.create(req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
const user_edit_delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
const user_edit_put = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
const user_add_get = (req, res) => {
  res.render("user/add");
};
const user_search_get = (req, res) => {
  res.render("user/search");
};

module.exports = {
  user_index_get,
  user_edit_get,
  user_view_get,
  user_search_post,
  user_add_post,
  user_edit_delete,
  user_edit_put,
  user_add_get,
  user_search_get,
};
