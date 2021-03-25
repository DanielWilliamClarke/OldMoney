<?php

require_once "../vendor/autoload.php";

$inputAmount = 0;
$from = "USD";
$to = "GBP";
if (isset($_GET[ "inputAmount" ]))
{
  $inputAmount = $_GET[ "inputAmount" ];
}
if (isset($_GET[ "from" ]))
{
  $from = $_GET[ "from" ];
}
if (isset($_GET[ "to" ]))
{
  $to = $_GET[ "to" ];
}

/* Just an example to show that I am able to use the ExchangeCurrencyDataAccess
 without explicitly requiring the file in at runtime */

$exchangeCurrencyDataAccess = new ExchangeCurrencyDataAccess("0dc88d0fb37942579f93d177ebf4d071");
$outputAmount = $exchangeCurrencyDataAccess->Exchange($inputAmount, $from, $to);
echo json_encode([
  "outputAmount" => $outputAmount
]);
