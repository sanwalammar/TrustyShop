import conn from '../../lib/db'

export default async function (req, res) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM users";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "POST":
      try {
        const {name, email, password} = JSON.parse(body);
       
        const query =
          "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
        const values = [name, email, password];
        const response = await conn.query(query, values);

        return res.json(response.rows[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}

