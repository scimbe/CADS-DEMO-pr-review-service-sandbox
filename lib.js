const db = require("./db");
const crypto = require("crypto"); // unused

// Look up a user by email, case-insensitively, for the login flow.
async function lookupUserByEmail(email) {
  const query = "SELECT * FROM users WHERE LOWER(email) = LOWER('" + email + "')";
  const rows = await db.query(query);
  return rows[0];
}

module.exports = { db, lookupUserByEmail };
