const db = require("../utils/db-execution.util");
const passwordUtil = require("../utils/password-hash.util");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

async function createUser(userData) {
  // unbox userData
  const { username, email_address, password } = userData;

  // Reject any registration with email address already existed
  const findEmailQuery = `SELECT * FROM user WHERE email_address = ?`;
  const findEmail = await db.execute(findEmailQuery, [email_address]);

  if (findEmail.length > 0) {
    throw new createError.BadRequest("This email address already existed!");
  }

  // Reject any username already existed
  const findUsernameQuery = `SELECT * FROM user WHERE username = ?`;
  const findUsername = await db.execute(findUsernameQuery, [username]);

  if (findUsername.length > 0) {
    throw new createError.BadRequest("This username already existed!");
  }

  // hash password
  const hashedPassword = passwordUtil.hash(password);

  // Create new user
  const query = `INSERT INTO user (username, email_address, password) VALUES (?, ?, ?);
                    SELECT * FROM user WHERE id = LAST_INSERT_ID();`;

  const data = await db.execute(query, [
    username,
    email_address,
    hashedPassword,
  ]);

  return data[1][0];
}

async function updateProfileImage(userId, profileImage) {
  try {
    const updateQuery = `UPDATE user SET img_path = ? WHERE id = ?`;
    await db.execute(updateQuery, [profileImage, userId]);
    return true;
  } catch (error) {
    return false;
  }
}

async function authenticate(userData) {
  // unbox userData
  const { username, password } = userData;

  // find user with their input username, which could be either username or email
  const findUserQuery = `SELECT id, password FROM user WHERE username = ? OR email_address = ?`;
  const findUser = await db.execute(findUserQuery, [username, username]);

  let successLogin = false;
  if (findUser.length > 0) {
    const storedPw = findUser[0].password.toString();
    const salt = storedPw.substring(0, 32);

    const hashPw = passwordUtil.hash(password, salt);
    if (hashPw === storedPw) {
      // create JWT token
      const token = jwt.sign(
        {
          userId: findUser[0].id,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.SECRET_KEY,
        {
          algorithm: "HS256",
          audience: "member",
        }
      );
      successLogin = true;
      return { access_token: token };
    }
  }

  if (!successLogin) {
    throw new createError.Unauthorized(
      "Incorrect username or password. Please try again."
    );
  }
}

async function findUserById(userId) {
  const query = ` SELECT id as user_id, username, email_address, created_datetime, last_active, img_path FROM user WHERE id = ?`;
  const findUser = await db.execute(query, [userId]);
  return findUser[0];
}

module.exports = {
  createUser,
  authenticate,
  findUserById,
  updateProfileImage,
};
