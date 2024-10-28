require("dotenv").config();
const SMSClass = require('./SMSClass');
const Registration = require('../models/registrationFormModel');
const sms = new SMSClass();

const peid = process.env.PEID;
const templateID = process.env.TEMPLATEID;

const options = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
let currentTime = new Date().toLocaleString('en-IN', options)

let otp=''
exports.sendOtp = async (req, res) => {
    const { mobile_no, region } = req.body;
     otp = sms.getotp(6);
    const sms_texts = `Your OTP (One time password) for CORS Registration Portal is ${otp} - Team CORS GRB`;



    try {
        const otpdata = await Registration.findOne({ where: { mobile_no, region } });
        if (!otpdata) {
            let date = new Date()
            date.setMinutes(date.getMinutes() + 5)
            const otpExpiry = date.toLocaleString('en-IN', options)

         

            const response = await sms.send_sms(mobile_no, sms_texts, peid, templateID);

            return res.status(200).json({ message: `New OTP has been sent to your mobile no ${mobile_no}`, response, otp,otpExpiry,success:true });
        } else if (otpdata.mobile_no && !otpdata.region) {
            let date = new Date()
            date.setMinutes(date.getMinutes() + 5)
            const otpExpiry = date.toLocaleString('en-IN', options)


            const response = await sms.send_sms(mobile_no, sms_texts, peid, templateID);

            return res.status(200).json({ message: `New OTP has been sent to your mobile no ${mobile_no}`, response,otp,otpExpiry,success:true });



        } else {
            return res.status(400).json({ message: `This mobile number is already registered for ${region}!!!`, success: false });
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to send OTP' });
    }
}

exports.verifyOTP = async (req, res) => {
    // const otpMatch = sms.getotp(6);
    const otpMatch = otp;

    console.log(otpMatch)
    const{userEnteredOtp}=req.body
    // const mobileNo = req.cookies.mobile_no;
    // const otpExpiry = req.cookies.otpExpiry;
    // console.log(otpExpiry);


    try {


        if (otpMatch!==userEnteredOtp) {
    console.log(otpMatch)
        }
            res.status(200).json({ message: "OTP verified successfully.", success: "true",ty8:userEnteredOtp,efeg:otpMatch });


        // const { otp: storedOtp, otpExpiry } = storedData;


        // if (currentTime > otpExpiry) {
        //     global.localStorage.delete(mobile_no);
        //     return res.status(400).json({ message: "OTP has expired. Please request a new one." });
        // }

        // if (otp === storedOtp.toString()) {
        //     global.localStorage.delete(mobile_no);

        //     res.status(200).json({ message: "OTP verified successfully.", success: "true" });

        // } else {
        //     res.status(400).json({ message: "Invalid OTP. Please try again." });
        // }
    } catch (error) {
        // console.log(error);
        res.status(500).json({ message: "Failed to verify OTP", error });
    }
};