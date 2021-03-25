<?php

/* Just an example to show that I am able to use the PHP classes, interfaces, namespaces and aliasing
 without explicitly requiring the files in at runtime */

use Moltin\Currency\Exchange\OpenExchangeRates as OpenExchange;

class OpenExchangeDownloader extends OpenExchange implements ICurrencyRatesDownloader
{
  public function __construct($appId, $base = "USD")
  {
    parent::__construct($appId);
    $this->base = $base;
  }

  public function Download()
  {
    parent::download();
    return $this->stored;
  }
}