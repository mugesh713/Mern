var express = require('express');
var app = express();
var mdb = require('mongoose');
var path = require('path');
var User = require('./models/user'); // Ensure proper case for the model
const PORT = 3001;

app.use(express.json());

// Connect to MongoDB
mdb.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Successfully"); 
  })
  .catch((err) => {
    console.log("Error in connection:", err);
  });

// Root Route
app.get('/', (req, res) => {
  res.send("Welcome to backend server");
});

// Static File Route
app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Fixed typo in __dirname
});

// Signup Route
app.post('/signup', async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email } = req.body; // Destructure the request body
  console.log(firstName, lastName, email);

  try {
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email
    });
    await newUser.save(); // Use await to save the new user
    console.log("User added successfully");
    res.status(200).send("User added successfully");
  } catch (err) {
    console.log(err); // Proper error logging
    res.status(500).send("Error adding user");
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Backend server started\nURL: http://localhost:${PORT}`);
});
