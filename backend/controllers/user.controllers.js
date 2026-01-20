
import User from "../models/user.models.js";


// Get Current User Controller
export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId is set in req by authentication middleware
    const user = await User.findById(userId).select("-password"); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Handle user not found
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

