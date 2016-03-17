Meteor.startup(function() {
	let smtp = {
		username: 'phuc.ng.dev.test@gmail.com',
		password: 'C0nM3oTr3oC@y',
		port: 465
	};
    process.env.MAIL_URL = "smtp://" + encodeURIComponent(smtp.username) + ":" + encodeURIComponent(smtp.password) + "@smtp.gmail.com:" + smtp.port + "/";
})
