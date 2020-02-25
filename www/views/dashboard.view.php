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
    <body class="body-dashboard">

    <header class="header-dashboard">

        <nav class="sidebar-left">
            <div class="logo">
                <img src="./public/img/TradeCoin.png" alt="Logo">
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

    </header>

    <div class="container-dashboard">

        <div class='some-page-wrapper'>

            <h1>Dashboard</h1>

            <div class="row-dashboard">
                <div class='column'>
                    <div class='histo'>
                        <div class="title-histo">
                            <h2>Historique</h2>
                        </div>
                        <div class="table-histo">
                            <table class="histo-table">
                                <tr>
                                    <td><i class="fas fa-user-graduate"></i></td>
                                    <td>New course add</td>
                                    <td>Name : FIBONACI</td>
                                    <td>Level : Intermédiare</td>
                                    <td>Author : fujyn</td>
                                    <td>06/11/2019</td>
                                    <td class="play-button"><i class="fas fa-play-circle"></i></td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-user-graduate"></i></td>
                                    <td>New course add</td>
                                    <td>Name : FIBONACI</td>
                                    <td>Level : Intermédiare</td>
                                    <td>Author : fujyn</td>
                                    <td>06/11/2019</td>
                                    <td class="play-button"><i class="fas fa-play-circle"></i></td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-user-graduate"></i></td>
                                    <td>New course add</td>
                                    <td>Name : FIBONACI</td>
                                    <td>Level : Intermédiare</td>
                                    <td>Author : fujyn</td>
                                    <td>06/11/2019</td>
                                    <td><i class="fas fa-play-circle"></i></td>
                                </tr>
                            </table>
                            <div class="num-page">
                                <i class="fas fa-chevron-left"></i>
                                <a href="#"><div class="cercle">1</div></a>
                                <a href="#"><div class="cercle">2</div></a>
                                <a href="#"><div class="cercle">3</div></a>
                                <a href="#"><div class="cercle">4</div></a>
                                <a href="#"><div class="cercle">5</div></a>
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-dashboard">
                <div class="column">
                    <div class="stat-header">
                        <div class="time">
                            <span class="jours">Jours</span>
                            <span class="semaines">Semaines</span>
                            Mois
                            Années
                        </div>
                        <div class="check-graph">
                            <i class="far fa-check-square"></i> <span class="visiteur-check">Visiteurs</span>
                            <i class="far fa-check-square"></i> <span class="abonne-check">Abonnés</span>
                            <i class="far fa-square"></i> <span class="commentaire-check">Commentaires</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-dashboard">
                <div class='column'>
                    <div class='stat'>
                        <canvas id="myChart" width="1200px" height="170px"></canvas>
                        <script src="./public/js/chartdashboard.js"></script>
                        <div class="count">
                            <span class="count-visiteur">Visiteurs : 352 </span>
                            <span class="count-abonnee">Abonnés : 247 </span>
                            <span class="count-commentaire">Commentaires : 126</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-dashboard">
                <div class='column'>
                    <div class='box'>
                        <h3 class="courses-rating">Courses rating</h3>
                        <div class="text center">
                            ICHIMOKU
                        </div>
                        <div class="note">
                            5/5
                        </div>
                        <div class="rating-star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
                <div class='column'>
                    <div class='box'>
                        <h3 class="courses-rating">Pages rating</h3>
                        <div class="lm">
                            <i class="fas fa-file"></i> <a href="#documentation/ichimoku">.../documentation/ichimoku</a>
                        </div>
                        <div class="visitor-div center-visitor">
                            <span class="visitor">visitor </span><span class="eyes">150 <i class="fas fa-eye"></i></span>
                        </div>
                    </div>
                </div>
                <div class='column'>
                    <div class='box'>
                        <h3 class="courses-rating">Anomalies</h3>
                        <div class="reporting">
                            Users Reporting
                        </div>
                        <div class="ano-div center-ano">
                            <i class="fas fa-user-circle"></i><span class="visitor">visitor </span><span class="eyes">150 <i class="fas fa-eye"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="./dist/bundle.js"></script>
    </body>
</html>