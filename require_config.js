/* this file does not need to hardcoded, this config can be auto generated in a build step */
requirejs.config({
  paths: {
    /* Link third party packages */
    "knockout-3.4.1": "libs/Knockout.js.3.4.1/knockout-3.4.1",
    "jquery": "libs/jQuery.2.1.4/jquery-2.1.4",

    /* Link app RequireJS modules */
    "knockout": "modules/knockout",
    "knockoutFormatBindings": "modules/knockout_format_bindings",
    "currencyConverterApp": "modules/currency_converter_app",
    "currencyConverterViewModel": "modules/currency_converter_view_model",
    "currencyConverterRatesDataAccess": "modules/currency_converter_rates_data_access",
    "currencyConverterRatesMapping": "modules/currency_converter_rates_mapping"
  }
});