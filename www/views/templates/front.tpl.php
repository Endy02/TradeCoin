<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- ICONS FONTAWESOME -->
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <!-- GOOGLE FONTS -->
        <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">

        <!-- WEBPACK BUNDLE.JS-->
        <script src="./dist/bundle.js" async></script>
        <!-- CAROUSEL JS -->
        <script src="./public/js/carousel.js" async></script>
        <!-- SCROLL REVEAL JS -->
        <script src="./public/js/scroll-reveal.js" async></script>

        <title>TradeCoin</title>
    </head>

    <body>
       <?php include("views/".$this->view.".view.php");  ?>
    </body>
</html>