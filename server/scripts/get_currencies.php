<?php

/* require the generated autoload file */
require_once "../vendor/autoload.php";

$base = "GBP";
if(isset($_GET["base"]))
{
  $base = $_GET["base"];
}

$openExchange = new OpenExchangeDownloader("0dc88d0fb37942579f93d177ebf4d071", $base);

/* Just an example to show that I am able to use the CurrencyRatesDataAccess
 without explicitly requiring the file in at runtime */

$currencyRatesDataAccess = new CurrencyRatesDataAccess($openExchange);
echo json_encode($currencyRatesDataAccess->Download());