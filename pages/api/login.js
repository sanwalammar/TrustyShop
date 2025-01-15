import jwt from "jsonwebtoken";
import conn from "../../lib/db";

const KEY = "ASDYJLKASFD134HLK4";
export default async function (req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const { email, password } = JSON.parse(body);

        const query = "SELECT * FROM users WHERE email=$1";
        const values = [email];

        const response = await conn.query(query, values);
        if (password === response.rows[0].password) {
          return res.json({
            token: jwt.sign(
              {
                email,
                name: response.rows[0].name,
                userId: response.rows[0].user_id,
                role: response.rows[0].role
              },
              KEY
            ),
          });
        }
        // return res.json(response.rows[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}
