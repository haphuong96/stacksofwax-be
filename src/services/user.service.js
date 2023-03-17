const db = require('../utils/db-execution.util');
const passwordUtil = require('../utils/password-hash.util');

async function createUser(userData) {
    try {
        // unbox userData
        const { username, email_address, password } = userData;

        // Reject any registration with email address already existed
        const findEmailQuery = `SELECT * FROM user WHERE email_address = ?`;
        const findEmail = await db.execute(findEmailQuery, [email_address]);

        if (findEmail.length === 1) {
            throw new Error("This email address already existed!")
        }

        // Reject any username already existed
        const findUsernameQuery = `SELECT * FROM user WHERE username = ?`;
        const findUsername = await db.execute(findUsernameQuery, [username]);

        if (findUsername.length === 1) {
            throw new Error("This username already existed!")
        }

        // hash password
        const hashedPassword = passwordUtil.hash(password);

        // Create new user
        const query = `INSERT INTO user (username, email_address, password) VALUES (?, ?, ?);
                    SELECT * FROM user WHERE id = LAST_INSERT_ID();`;

        const data = await db.execute(query, [username, email_address, hashedPassword]);

        return data[1];
    } catch (err) {
        throw err;
    }
}

async function getUserById() {

}

module.exports = { createUser };