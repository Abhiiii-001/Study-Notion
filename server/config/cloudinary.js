const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		})
		// .then(() =>  console.log("Cloudinay Connected Successfully"))
		// .catch( (error) => {
		// 	 console.log("Cloudinay Connection Failed");
		// 	console.error(error);
		// 	process.exit(1);
		// } )
	} catch (error) {
		 console.log(error);
	}
};