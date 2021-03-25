<?php

/* Just an example to show that I am able to use the PHP classes and interfaces
 without explicitly requiring the files in at runtime */

class CurrencyRatesDataAccess
{
  private $currencyRatesDownloader;

  public function __construct(ICurrencyRatesDownloader $currencyRatesDownloader)
  {
    $this->currencyRatesDownloader = $currencyRatesDownloader;
  }

  public function Download()
  {
    return $this->currencyRatesDownloader->Download();
  }
}