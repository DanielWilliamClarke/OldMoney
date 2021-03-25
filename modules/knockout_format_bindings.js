define("knockoutFormatBindings", ["knockout-3.4.1"], function (ko) {

  //Intercept to ensure only numbers and '.' are entered.
  ko.extenders.ensureNumeric = function (target, precision) {
    //create a writeable computed observable to intercept writes to our observable
    var result = ko.computed({
      read: target,  //always return the original observables value
      write: function (newValue) {
        var current = target();
        var valueToWrite = formatToNumber(newValue, precision);

        //only write if it changed
        if (valueToWrite !== current) {
          target(valueToWrite);
        } else {
          if (newValue !== current) {
            target.notifySubscribers(valueToWrite);
          }
        }
      }
    }).extend({notify: 'always'});
    //initialize with current value to make sure it is rounded appropriately
    result(target());

    //return the new computed observable
    return result;
  };

  function formatToNumber(str, decimals) {
    var roundingMultiplier = Math.pow(10, decimals);

    //Strip out everything except numbers and decimals (also strip out '%' and 'R')
    var newValueAsNum = new String(str).replace(/[^0-9\.]/g, '');
    if (isNaN(newValueAsNum)) {
      //can happen with two decimals.
      newValueAsNum = 0;
    }
    var valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

    return valueToWrite;
  }

  return ko;
});