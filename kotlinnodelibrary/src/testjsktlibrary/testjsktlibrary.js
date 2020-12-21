'use strict';

exports.__esModule = true;
exports["default"] = void 0;

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'testjsktlibrary'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'testjsktlibrary'.");
}
var testjsktlibrary = function (_, Kotlin) {
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function getMain() {
    return new Main();
  }
  function Main() {
  }
  Main.prototype.getRandomNumber = function () {
    return Random(32).nextInt();
  };
  Main.prototype.sumValues = function (values) {
    var tmp$;
    var result = 0;
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var value = values[tmp$];
      result = result + value | 0;
    }
    return result;
  };
  Main.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  _.getMain = getMain;
  _.Main = Main;
  Kotlin.defineModule('testjsktlibrary', _);
  return _;
}(typeof testjsktlibrary === 'undefined' ? {} : testjsktlibrary, kotlin);

exports["default"] = testjsktlibrary;
module.exports = exports.default;