const mongoose = require('mongoose');
// const { MONGODB_URI } = process.env;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Successfully connected to database");
})
.catch((error) => {
  console.log("database connection failed. exiting now...");
  console.error(error);
  process.exit(1);
});

// const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;

// exports.connect = () => {
//   // Connecting to the database
//   mongoose
//     .connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("Successfully connected to database");
//     })
//     .catch((error) => {
//       console.log("database connection failed. exiting now...");
//       console.error(error);
//       process.exit(1);
//     });
// };


// module.exports = con;