<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Claim Coin Panel</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

</head>

<body>

    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#" id="navFunction" data-content='introduction'>Auto Faucet Panel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#captcha" id="navFunction" data-content='captcha'>Captcha</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#wallet" id="navFunction" data-content='wallet'>Wallet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#server" id="navFunction" data-content='server'>Server</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#site_claim" id="navFunction" data-content='site_claim'>Site-claim</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#statistics" id="navFunction" data-content='statistics'>Thống kê</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#setting" id="navFunction" data-content='setting'>Setting</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/auth/logout.php" id="navFunction" data-content='logout'>Logout</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container mt-3">
        <div id="message_result"></div>
        <hr>
        <div id="renderContent" class="content">
   
        </div>
    </div>


    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">© 2024 Hec Tran</p>
                </div>
            </div>
        </div>
    </footer>

    <noscript>Sorry, your browser does not support JavaScript!</noscript>



    <script src="js/utils/stylePage.js"></script>
    <script src="js/utils/support.js"></script>
    <script src="js/init.js"></script>
    <script src="js/passwordCheck.js"></script>
    <script src="js/getPageLoader.js"></script>
    <script src="js/events.js"></script>


    <!-- page script --> 
    <script src="js/captchaPageData.js"></script>
    <script src="js/walletPageData.js"></script>
    <script src="js/settingPageData.js"></script>
    <script src="js/serverPageData.js"></script>
    <script src="js/siteClaimPageData.js"></script>


</body>

</html>
