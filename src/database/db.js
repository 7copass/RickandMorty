const mongoose = require('mongoose');
const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://7copas:13022000@rickmorty.9qhqjom.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('MongoDB has been connected');
    })
    .catch((error) => {
      return console.log(`Connection to database ERROR: ${error}`);
    });
};

module.exports = connectToDatabase;
