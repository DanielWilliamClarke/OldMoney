define("currencyConverterRatesDataAccess", ["jquery"], function ($) {

  var GetRates = function (baseValue, onComplete) {
    $.get("server/scripts/get_currencies.php", {base: baseValue}, onComplete, "json");
  };

  var ConvertValue = function (inputAmount, from, to, onComplete) {
    $.get("server/scripts/exchange_currency.php", {inputAmount: inputAmount, from: from, to: to}, onComplete, "json");
  };

  return {
    GetRates: GetRates,
    ConvertValue: ConvertValue
  };
});