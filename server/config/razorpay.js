const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	oauthToken : "shivam",
	key_secret: process.env.RAZORPAY_SECRET,
});
