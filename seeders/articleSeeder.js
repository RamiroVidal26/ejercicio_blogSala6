const { Article } = require("../models");
const { faker } = require("@faker-js/faker");
faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image: faker.image.imageUrl(800, 400),
      userId: faker.datatype.number({ min: 1, max: 10 }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
