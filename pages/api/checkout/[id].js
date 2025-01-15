import conn from '../../../lib/db'
import emailjs from '@emailjs/nodejs';

const accountSid = 'ACdce8bda3bfb40f8fc1dfbe852437f1e4';
const authToken = 'ccd868606e545f083b5c5c0629e3d601';
const client = require('twilio')(accountSid, authToken);

export default async function (req, res) {
  const { method, query } = req;
  try {
    const dbquery = "SELECT * FROM users WHERE user_id=($1)";
    const value = [query.id];
    const response = await conn.query(dbquery, value);
    const userMobileNum = '+' + response.rows[0].mobile_num
    const body = `Hi Mr. ${response.rows[0].name}, Your purchase from Trusty Shop was successful and your order 
                    has been confirmed. Order will be delivered at your address: ${response.rows[0].default_address}`
    emailjs.send("service_8mytr58", "template_aivx79l", {
      from_name: "Trusty Shop",
      message: body,
      to_email: response.rows[0].email
    }, { publicKey: '7hRAucp6qWD9Ovk8q', privateKey: 'gqthXzvjhUuwS4PhFILTI' });

    client.messages
    .create({
        body: body,
        from: '+19092749947',
        to: userMobileNum
    })
    .then(message => console.log(message.sid));
    return res.json(response.rows[0]);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}