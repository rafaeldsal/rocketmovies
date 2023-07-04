const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const { user_id } = request.params;

    const tags = await knex("movie_tags").where({ user_id });

    return response.status(201).json(tags);
  }
}

module.exports = TagsController;
