'use strict';

exports.__esModule = true;
exports["default"] = void 0;

var apiTestLibrary =  function (_, Kotlin) {

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
  Main.prototype.getHour = function () {
  };
  Main.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  function TimeResponse(unixtime, utc_datetime) {
    this.unixtime = unixtime;
    this.utc_datetime = utc_datetime;
  }
  TimeResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeResponse',
    interfaces: []
  };
  TimeResponse.prototype.component1 = function () {
    return this.unixtime;
  };
  TimeResponse.prototype.component2 = function () {
    return this.utc_datetime;
  };
  TimeResponse.prototype.copy_a4hdmt$ = function (unixtime, utc_datetime) {
    return new TimeResponse(unixtime === void 0 ? this.unixtime : unixtime, utc_datetime === void 0 ? this.utc_datetime : utc_datetime);
  };
  TimeResponse.prototype.toString = function () {
    return 'TimeResponse(unixtime=' + Kotlin.toString(this.unixtime) + (', utc_datetime=' + Kotlin.toString(this.utc_datetime)) + ')';
  };
  TimeResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.unixtime) | 0;
    result = result * 31 + Kotlin.hashCode(this.utc_datetime) | 0;
    return result;
  };
  TimeResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.unixtime, other.unixtime) && Kotlin.equals(this.utc_datetime, other.utc_datetime)))));
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
  _.TimeResponse = TimeResponse;
  _.OperationsHelper = OperationsHelper;
  Kotlin.defineModule('testlibrarykotlinktor', _);
  return _;
};

/**
 * 
 * @param {*raiz a exportar} root 
 * @param {*el metodo que construye nuestra raiz a exportar} factory 
 * Nota: root y factory son los mismos. una es la instancia y el otro la definicion
 */
var instancer = function (root, factory) {
  factory(
    root,
    require('./lib/kotlin.js')
  );
}

instancer(apiTestLibrary, apiTestLibrary);
  
exports["default"] = apiTestLibrary;
module.exports = exports.default;
