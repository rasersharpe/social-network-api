const express = require("express");
const mongoose = require("mongoose");

// Import routes
const userRoutes = require("./routes/api/userRoutes");
const thoughtRoutes = require("./routes/api/thoughtRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API routes
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/socialNetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log MongoDB queries being executed
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
