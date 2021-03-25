define("currencyConverterViewModel",
  ["knockout", "currencyConverterRatesMapping"], function (ko, currencyConverterRatesMapping) {

    var currencyConverterViewModel = function (denominations, baseCurrenies) {

      /* Here we place the "this" reference inside the "self" variable,
       * this allow us to refer to the public variables of the view model inside private functions
        * so we can always access view model scoped variables */
      var self = this;

      /* Observables are variables that are used by Knockout that allow for two way data bindings */
      self.inputAmount = ko.observable(0).extend({ensureNumeric: 2}); // <- formats this variable to always be numeric
      self.outputAmount = ko.observable(0);
      self.selectedInputCurrency = ko.observable("GBP");
      self.selectedOutputCurrency = ko.observable("USD");

      self.availableCurrencies = ko.observableArray(denominations);
      self.selectedBaseCurrency = ko.observable("GBP");
      self.baseRates = ko.observableArray(baseCurrenies).extend({notify: 'always'}); // <- ensures that subscribers are always notified of any change to this array

      /* A computed variables is a variable that recomputes its value when any observables used within it are changed */
      self.sortedBaseRates = ko.computed(function () {
        var selectedRate = self.baseRates().filter(function (rate) {
          return rate.currency === self.selectedBaseCurrency();
        });
        var otherRates = self.baseRates().filter(function (rate) {
          return rate.currency !== self.selectedBaseCurrency();
        });
        return selectedRate.concat(otherRates);
      });

      /* a subscription is a callback that will be run when the variable the subscription is attached to updates */
      self.selectedBaseCurrency.subscribe(function (newCurrency) {
        currencyConverterRatesMapping.GetRates(newCurrency, self.baseRates);
      });

      /* The same method can be used as a callback to multiple observable variables */
      var ExchangeCurrency = function () {
        currencyConverterRatesMapping.ExchangeCurrency(self.inputAmount(),
          self.selectedInputCurrency(),
          self.selectedOutputCurrency(),
          self.outputAmount);
      };
      self.inputAmount.subscribe(ExchangeCurrency);
      self.selectedInputCurrency.subscribe(ExchangeCurrency);
      self.selectedOutputCurrency.subscribe(ExchangeCurrency);
    };

    /* Here we hide the construction of the view model class from outside users of this module */
    var ConstructViewModel = function (denominations, baseCurrenies) {
      return new currencyConverterViewModel(denominations, baseCurrenies);
    };

    return {
      ConstructViewModel: ConstructViewModel
    };
  });