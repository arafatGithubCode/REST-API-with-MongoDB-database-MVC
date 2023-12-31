require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    ulr: process.env.DB_URL || " mongodb://localhost:27017",
  },
};

module.exports = dev;
