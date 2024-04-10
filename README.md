# faucetClaimManager
Manage resources when claiming coins on a large quantity faucet<br>
The whole project is written in normal PHP and Javascript, so it won't be difficult to deploy on your hosting!
<hr>
<b>Adjust admin password in config.php</b><br>
<pre>


    $passwordAdmin = '<your password admin>';


    // db config
    $dbHost = 'localhost';
    $username = 'root';
    $password_db = '';
    $dbName = 'claimcoin';
</pre>
<hr>
<hr>
<h1>These include:</h1><br>
- Captcha: manage your captcha solving key (customize it yourself if you want to use another party's service)<br>
- Wallet: manage wallets used to claim, you can use it as a way to store information about wallets or accounts. You can get that information through the API (instructions are in the demo_script folder).<br>
- Server: manages the servers used to run the claim process<br>
- Site claim: is a todo to manage sites and faucet that are in the process of development<br>
- Statistics: This is statistics, I think you should develop it yourself because I don't have many ideas for this section.<br>
- Logout: log out
