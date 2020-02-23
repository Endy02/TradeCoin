<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/565e332a46.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>

    <title>Dashboard</title>
</head>
<body>
<header>
    <nav class="sidebar-left">
        <div class="logo">
            <img src="./public/img/logo_blanc.png" alt="Logo">
        </div>
        <ul>
            <a class="a-nav" href="#Dashboard">Dashboard</a>
            <a class="a-nav" href="#Cours">Cours</a>
            <a class="a-nav" href="#Pages">Pages</a>
            <a class="a-nav" href="#Categories">Categories</a>
            <a class="a-nav" href="#User">User</a>
            <a class="a-nav" href="#Apparence">Apparence</a>
            <a class="a-nav" href="#Tradline">Tradline</a>
        </ul>
    </nav>
    <nav class="sidebar-right">
        <ul>
            <a class="a-nav" href="#Dashboard"><i class="far fa-file-alt"></i></a>
            <hr>
            <a class="a-nav" href="#Cours"><i class="fas fa-font"></i></a>
            <hr>
            <a class="a-nav" href="#Pages"><i class="far fa-image"></i></a>
            <hr>
            <a class="a-nav" href="#Categories"><i class="far fa-file"></i></a>
            <hr>
            <a class="a-nav" href="#User"><i class="far fa-user-circle"></i></a>
            <hr>
            <a class="a-nav" href="#Apparence"><i class="fas fa-globe"></i></a>
            <hr>
            <a class="a-nav" href="#Tradline"><i class="fas fa-map-marked-alt"></i></a>
        </ul>
    </nav>
</header>

<div class="container">
    <div class='some-page-wrapper'>

        <h1>Dashboard</h1>

        <div class="row">
            <div class='double-column'>
                <div class='stat'>
                    Statistiques
                    <canvas id="myChart" width="700px" height="180px"></canvas>
                    <script src="./public/js/chartdashboard.js"></script>
                </div>
            </div>
            <div class='column'>
                <div class='ano'>
                    Anomalies
                </div>
            </div>
        </div>

        <div class="row">
            <div class='column'>
                <div class='histo'>
                    Historique
                </div>
            </div>
        </div>

        <div class="row">
            <div class='column'>
                <div class='box'>
                    Box 1
                </div>
            </div>
            <div class='column'>
                <div class='box'>
                    Box 2
                </div>
            </div>
            <div class='column'>
                <div class='box'>
                    Box 3
                </div>
            </div>
        </div>

    </div>
</div>

<script src="./dist/bundle.js"></script>
</body>
</html>