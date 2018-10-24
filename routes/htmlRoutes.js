module.exports = function (app) {
	// Load index page
	app.get("/", function (req, res) {
		res.render("index");
	});

	// Load example page and pass in an example by id
	app.get("/colourpicker", function (req, res) {
		res.render("colourpicker");

	});
	app.get("/about", function (req, res) {
		res.render("about");

	});
	app.get("/back-end", function (req, res) {
		res.render("back-end");

	});

	// Render 404 page for any unmatched routes
	app.get("*", function (req, res) {
		res.render("404");
	});
};