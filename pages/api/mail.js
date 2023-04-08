// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);


export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);

  const message = `
   Name: ${body.name}\r\n
   Email: ${body.email}\r\n
   Message: ${body.message}
   `;

  const subject = `${body.subject}`;

   const data= {
    to: 'anna@kwonyounglee.com',
    from: 'anna@kwonyounglee.com',
    subject: subject,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
   };


   mail.send(data);
  res.status(200).json({ status: 'ok'})
}