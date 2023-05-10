const { User } = require("../models");
const { faker } = require("@faker-js/faker");
faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 21; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: "1",
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Authors.");
};
