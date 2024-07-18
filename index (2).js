const express = require("express");
const fb = require("fbkey");
const app = express();
const port = 8000; // Specify the port directly

// Health check endpoint for Uptime Robot
app.get("/health", (req, res) => {
  res.send("OK");
});

// First, we need to get your Facebook token by logging into your account 
const email = "cispividru@gufum.com";
const password = "Jrbusaco010624";

async function main() { 
  try {
    const token = await fb.getKey(email, password);
    await fb.share({
      length: 1000000, // share count set to 1 million
      url: "https://www.facebook.com/photo.php?fbid=394001636996238&set=a.115094441553627&type=3&mibextid=rS40aB7S9Ucbxw6v", // link of your post
      token: token.EAAD6V7
    });
  } catch (error) {
    console.error("Error sharing the post:", error);
  }
}

// Start the web server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  main(); // Run the main function when the server starts
});
  
