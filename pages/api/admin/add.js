import conn from '../../../lib/db'

export default async function (req, res) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM products";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "POST":
      try {
        const { title, price, info, imgurl, category} = JSON.parse(body);
       
        const query =
          "INSERT INTO products (title, price, info, imgurl, cat_id ) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [title, price, info, imgurl, category];
        const response = await conn.query(query, values);

        return res.json(response.rows[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}