const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Routes for /api/users
router
  .route("/")
  .get(getAllUsers) // GET all users
  .post(createUser); // POST new user

// Routes for /api/users/:id
router
  .route("/:id")
  .get(getUserById) // GET a single user by _id
  .put(updateUser) // PUT update a user by _id
  .delete(deleteUser); // DELETE remove a user by _id

// Routes for /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriend) // POST add a friend
  .delete(removeFriend); // DELETE remove a friend

module.exports = router;
