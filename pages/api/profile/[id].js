import conn from '../../../lib/db'
import React from 'react'



export default async function (req, res) {
  const { method, body, query } = req;
  switch (method) {
    case "GET":
      try {
        const dbQuery = "SELECT * FROM users WHERE user_id=($1)";
        const values = [query.id];
        const response = await conn.query(dbQuery, values);
        return res.json(response.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
        
        
    case "POST":
      try {
        const { name, age, gender, address, mobile } = JSON.parse(body);
       
        const dbQuery =
          "UPDATE users SET name=$1, age=$2, gender=$3, default_address=$4, mobile_num=$5 WHERE user_id=$6";
        const values = [name, age, gender, address, mobile, query.id];
        const response = await conn.query(dbQuery, values);

        return res.json(response.rows[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}
 
 
