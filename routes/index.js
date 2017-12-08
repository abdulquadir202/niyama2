module.exports.index = index;

function index (req, res) {
	res.render('index', {
		layout:'layout',
		title:'home page'
	});
};

module.exports.services = services;

function services (req, res) {
	res.render('services', {
		layout:'layout2',
		title:'services page'
	});
};

module.exports.about = about;

function about (req, res) {
	res.render('about', {
		layout:'layout2',
		title:'about page'
	});
};

module.exports.blog = blog;

function blog (req, res) {
	res.render('blog', {
		layout:'layout2',
		title:'blog page'
	});
};

module.exports.contact = contact;

function contact (req, res) {
	res.render('contact', {
		layout:'layout2',
		title:'contact page'
	});
};

module.exports.booking = booking;

function booking (req, res) {
	res.render('booking', {
		layout:'layout2',
		title:'booking page'
	});
};

module.exports.trainer = trainer;

function trainer (req, res) {
	res.render('trainer', {
		layout:'layout2',
		title:'trainer page'
	});
};