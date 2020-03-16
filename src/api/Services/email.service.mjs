
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const sgMail = require('@sendgrid/mail');



export async function sendMail(email) {

    sgMail.setApiKey("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");


    const msg = {
        to: email,
        from: 'shopper@shopper.com',
        subject: 'Account Success',
        html: '<div style="background:gray;"><p><strong>You are successfully linked!</strong></p><p><strong>You can now track your shops and your preferences</strong></p><div>',
    };

    sgMail.send(msg);

}
