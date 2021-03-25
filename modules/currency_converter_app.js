
define("currencyConverterApp", // <- The Module Name
  ["knockout", "jquery", "currencyConverterRatesMapping", "currencyConverterViewModel"], // <- This Modules Dependency Requirements
  function (ko, $, currencyConverterRatesMapping, currencyConverterViewModel) { // <- Loaded Modules Dependency References

  var Load = function () {
    /* Call back end to pick up currency rates,
     * Async Ajax request so we pass a function to run
     * when data is delivered to the browser */
    currencyConverterRatesMapping.GetRates("GBP", function (baseCurrencies) {
      var denominations = baseCurrencies.map(function(currency) {
        return currency.currency;
      });

      /* Create view model with starting currencies and currency rates */
      var viewModel = currencyConverterViewModel.ConstructViewModel(denominations, baseCurrencies);
      /* Pick up the currency converter dom element */
      var dom = $("#currency_converter");
      /* Bind view and view model together */
      ko.applyBindings(viewModel, dom[0]);
    })
  };

  /* Here we return anything that we wish to be exposed to external uses of this model */
  return {
    Load: Load
  };
});