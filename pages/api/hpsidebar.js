import conn from '../../lib/db'

export default async function (req, res) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM categories";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
      default:
        return res.status(400).json({ message: "Method are not supported" });
    }
  }