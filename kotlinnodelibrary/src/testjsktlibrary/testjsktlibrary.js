'use strict';

exports.__esModule = true;
exports["default"] = void 0;

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'testjsktlibrary'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'testjsktlibrary'.");
}var testjsktlibrary = function (_, Kotlin) {

  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function getMain() {
    return new Main();
  }
  function getOperationsHelper() {
    return new OperationsHelper();
  }
  function Main() {
  }
  Main.prototype.getRandomNumber = function () {
    return Random(32).nextInt();
  };
  Main.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  function OperationsHelper() {
  }
  OperationsHelper.prototype.getAsArrayOfInts = function (arrayOfInts) {
    var reg = '([\\s|\\,])+';
    var $receiver = Regex_init(reg).split_905azu$(arrayOfInts, 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toInt(item));
    }
    var resAsInts = destination;
    return copyToArray(resAsInts);
  };
  OperationsHelper.prototype.sumValuesInString = function (arrayOfInts) {
    return this.sumValuesInArray(this.getAsArrayOfInts(arrayOfInts));
  };
  OperationsHelper.prototype.sumValuesInArray = function (values) {
    var tmp$;
    var result = 0;
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var value = values[tmp$];
      result = result + value | 0;
    }
    return result;
  };
  OperationsHelper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperationsHelper',
    interfaces: []
  };
  _.getMain = getMain;
  _.getOperationsHelper = getOperationsHelper;
  _.Main = Main;
  _.OperationsHelper = OperationsHelper;
  Kotlin.defineModule('testjsktlibrary', _);
  return _;
}(typeof testjsktlibrary === 'undefined' ? {} : testjsktlibrary, kotlin);

exports["default"] = testjsktlibrary;
module.exports = exports.default;