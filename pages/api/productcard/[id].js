import conn from '../../../lib/db'

export default async function (req, res) {
  const { method, query } = req;
  switch (method) {
    case "GET":
      try {
        const dbquery = query.id === 'all'? "SELECT * FROM products" : "SELECT * FROM products WHERE cat_id=($1)";
        const value = query.id === 'all'? [] : [query.id];
        const response = await conn.query(dbquery, value);
        return res.json(response.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
      case "DELETE":
        try {
          const dbquery = "DELETE FROM products WHERE product_id=($1)";
          const value = [query.id];
          await conn.query(dbquery, value);
          return res.json({success: true});
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      default:
        return res.status(400).json({ message: "Method are not supported" });
    }
  }