//const sgMail = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('your_API_KEY');

//You can now use the send() method of sgMail to send emails...
const msg={
    to: 'ashok1668.v@gmail.com',
    from: "velpula-ashok@outlook.com",
    subject: "im coming from send grid",
    text: 'this is the test mail coming form the send grid!!!!!!'
}

sgMail.send(msg).then(req,resp =>{
    resp.status=200;
    console.log('mail send!!!!!');
}).catch(error =>{
     console.log('error in the send grid!!!!!!!');
})