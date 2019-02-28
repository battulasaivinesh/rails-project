import API from "../API";

export default {
  getAllUsers() {
    API.getAllUsers();
  },

  followUser(userId) {
    console.log(userId);
    API.followUser(userId);
  }
};
