<!doctype html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <script src="https://kit.fontawesome.com/565e332a46.js" crossorigin="anonymous"></script>
        <script src="./dist/bundle.js" async></script>

        <title>Dashboard</title>
    </head>
    <body class="body-dashboard">
        <header class="header-dashboard">
            <nav class="sidebar-left">
                <div class="logo">
                    <a class="back-home" href="<?= helpers::getUrl("default", "default") ?>">
                        <img src="./public/img/TradeCoin.png" alt="Logo">
                    </a>
                </div>
                <ul>
                    <li>
                        <a class="a-nav" href="<?= helpers::getUrl("user", "dashboardBack") ?>"">Dashboard</a>
                    </li>
                    <li>
                        <a class="a-nav" href="#Cours">Cours</a>
                    </li>
                    <li>
                        <a class="a-nav" href="<?= helpers::getUrl("user", "allPage") ?>">Pages</a>
                    </li>
                    <li>
                        <a class="a-nav" href="#Categories">Categories</a>
                    </li>
                    <li>
                        <a class="a-nav" href="#User">User</a>
                    </li>
                    <li>
                        <a class="a-nav" href="#Apparence">Apparence</a>
                    </li>
                    <li>
                        <a class="a-nav" href="#Tradline">Tradline</a>
                    </li>
                </ul>
            </nav>
        </header>

        <?php include("views/".$this->view.".view.php"); ?>
    </body>
</html>