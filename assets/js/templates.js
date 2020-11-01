function head(title){
    return  `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>`+title+`</title>

            <!-- CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <link rel="stylesheet" href="assets/css/main.css">
            <!-- JS -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script src="assets/js/inc/navbar.inc.js"></script>
            <script src="assets/js/activeNavbar.js"></script>
            `;
}

var navBar = 
`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed;top: 0;left: 0;right: 0;z-index: 10;">
    <a class="navbar-brand" href="./">Paulcinet</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="./jour.html">Actus du jour</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./semaine.html">Actus de la semaine</a>
            </li>
        </ul>
    </div>
</nav>
`;