define("currencyConverterRatesMapping", ["currencyConverterRatesDataAccess"], function (currencyConverterRatesDataAccess) {

  /* just a mapping to class to reduce complexity in the view model */

  var GetRates = function (baseValues, receivingObservable) {
    currencyConverterRatesDataAccess.GetRates(baseValues, function (ratesData) {
      var mappedRates = Object.keys(ratesData.rates).map(function (key) {
        return {
          currency: key,
          baseValue: ratesData.rates[key].toFixed(3)
        };
      });
      receivingObservable(mappedRates);
    });
  };

  var ExchangeCurrency = function (inputAmount, from ,to, receivingObservable) {
    currencyConverterRatesDataAccess.ConvertValue(inputAmount, from ,to, function (convertedValue) {
      receivingObservable(convertedValue.outputAmount);
    });
  };

  return {
    GetRates: GetRates,
    ExchangeCurrency: ExchangeCurrency
  };
});