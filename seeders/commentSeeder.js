const { Comment } = require("../models");
const { faker } = require("@faker-js/faker");
faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 400; i++) {
    comments.push({
      user: faker.name.firstName() + " " + faker.name.lastName(),
      content: faker.lorem.paragraph(),
      articleId: faker.datatype.number({ min: 1, max: 30 }),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
