<!DOCTYPE html>
<html lang="en">

<head>
    
	<meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap Core CSS -->
    <link href="static/assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="static/assets/css/portfolio-item.css" rel="stylesheet">

    <title>AngularTestApp</title>

</head>
<body ng-app="mainApp" ng-controller="MainCtrl as ctrl">

<div ng-include src="'static/HTML_Partial/header.html'"></div>
<div ng-include src="'static/HTML_Partial/sidebar.html'" onload="ctrl.getModelNames()"></div>

<div ng-include src="'static/HTML_Partial/studentGrid.html'"></div>

<div ng-include src="'static/HTML_Partial/createModal.html'"></div>
<div ng-include src="'static/HTML_Partial/editModal.html'"></div>
<div ng-include src="'static/HTML_Partial/deleteModal.html'"></div>


<script src="static/assets/js/angular.min.js"></script>
<script src="static/assets/js/jquery.js"></script>
<script src="static/assets/js/bootstrap.min.js"></script>
<script src="static/customJS/mainApp.js"></script>




<script type="text/javascript">
    console.log("angular object",angular);
</script>
</body>
</html>
