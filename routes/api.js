/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  console.log(req.params.name);
  res.json({
  	name: req.params.name
  });
};