// Set up the mail driver
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


class Mail {
    async sendPriceToMail(to, price) {
        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: 'update',
            text: price.toString(),
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Message sent: %s', info.messageId);
            }
        });
    }

}
module.exports = Mail