const { Router } = require("express");

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/movie_notes", notesRoutes);
routes.use("/movie_tags", tagsRoutes);

module.exports = routes;
