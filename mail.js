// require=('dotenv').configure();
const nodemailer=require('nodemailer');
const mailGun=require('nodemailer-mailgun-transport');

const auth={
    auth:{
        api_key:'fc747d9ca8bc971efae668d5364caea2-9b1bf5d3-6e368f55',
        domain:'sandbox777d6ddde71a4dfb974ab8e6f14cff20.mailgun.org'
    }
};
const transporter=nodemailer.createTransport(mailGun(auth));
//Data that will be sent from the form
//Text
//Subject
//Email from
const sendMail=(email,subject,text,cb)=>{
    const mailOptions={
        from:email,
        to:'ksagrawal143@gmail.com',
        subject,
        text,
    };
    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            cb(err,null);
        }
        else{
            cb(null,data)
        }
    });
}
module.exports=sendMail;