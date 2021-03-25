<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Developers Get Together Currency Converter Demo</title>

	<!-- Include RequireJS -->
	<script src="libs/RequireJS.2.2.0/require.js"></script>
	<!-- Include RequireJS App Conifg -->
	<script src="require_config.js"></script>

	<!-- Link Style -->
	<link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="style/core.css" type="text/css"/>

</head>
<body>
<div id="current_converter"></div>
<script>
  /* Require jquery and load in currency conversion template and app */
  require(["jquery"], function ($) {
    $(document).ready(function () {
      $("#current_converter").load("template/currency_converter_view.html");
    });
  });
</script>
</body>
</html>