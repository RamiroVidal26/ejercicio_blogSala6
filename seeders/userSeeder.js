const { User } = require("../models");
const { faker } = require("@faker-js/faker");
faker.locale = "es";
//instalarbcrypt.js
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 21; i++) {
    const randomPassword = faker.internet.password();
    const hashedPassword = bcrypt.hashSync(randomPassword, 10);
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Authors.");
};
