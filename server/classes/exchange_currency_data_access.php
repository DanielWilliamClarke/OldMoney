<?php

/* Just an example to show that I am able to use the PHP classes, namespaces and aliasing
 without explicitly requiring the files in at runtime */

use Moltin\Currency\Currency as Currency;
use Moltin\Currency\Format\Runtime as RuntimeFormat;
use Moltin\Currency\Exchange\OpenExchangeRates as OpenExchange;

class ExchangeCurrencyDataAccess
{
  private $currency;
  public function __construct($apiKey)
  {
    $this->currency = new Currency(new OpenExchange($apiKey), new RuntimeFormat());
  }

  public function Exchange($inputAmount, $from, $to)
  {
    return $this->currency->convert($inputAmount)->from($from)->to($to)->value();
  }
}