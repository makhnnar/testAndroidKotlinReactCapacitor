'use strict';

exports.__esModule = true;
exports["default"] = void 0;

var apiTestLibrary =  function (
    _, 
    Kotlin, 
    $module$kotlinx_coroutines_core, 
    $module$ktor_ktor_client_core_jsLegacy, 
    $module$ktor_ktor_client_json_jsLegacy, 
    $module$ktor_ktor_client_serialization_jsLegacy
  ) {
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var JsonFeature = $module$ktor_ktor_client_json_jsLegacy.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization_jsLegacy.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_f0veat$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var takeFrom = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpStatement;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var HttpResponse = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call.TypeInfo;
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
  function get$lambda($receiver) {
    return Unit;
  }
  var scope;
  function Main() {
    this.jsonClient = HttpClient(Main$jsonClient$lambda);
  }
  Main.prototype.getRandomNumber = function () {
    return Random(32).nextInt();
  };
  function Coroutine$callApiHour_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
  }
  Coroutine$callApiHour_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$callApiHour_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$callApiHour_0.prototype.constructor = Coroutine$callApiHour_0;
  Coroutine$callApiHour_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.jsonClient;
            var urlString = 'http://worldtimeapi.org/api/timezone/America/Argentina/Salta';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, urlString);
            get$lambda($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(TimeResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, TimeResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(TimeResponse), call.JsType, createKType(getKClass(TimeResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(TimeResponse), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, TimeResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, TimeResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Main.prototype.callApiHour_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$callApiHour_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Main$getHour$lambda(this$Main_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Main = this$Main_0;
  }
  Coroutine$Main$getHour$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Main$getHour$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Main$getHour$lambda.prototype.constructor = Coroutine$Main$getHour$lambda;
  Coroutine$Main$getHour$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Main.callApiHour_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var hour = this.result_0;
            return println(hour.unixtime), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Main$getHour$lambda(this$Main_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Main$getHour$lambda(this$Main_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Main.prototype.getHour = function () {
    launch(scope, void 0, void 0, Main$getHour$lambda(this));
  };
  function Main$jsonClient$lambda$lambda($receiver) {
    $receiver.serializer = new KotlinxSerializer();
    return Unit;
  }
  function Main$jsonClient$lambda($receiver) {
    $receiver.install_xlxg29$(JsonFeature.Feature, Main$jsonClient$lambda$lambda);
    return Unit;
  }
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
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
  _.Main = Main;
  _.TimeResponse = TimeResponse;
  _.OperationsHelper = OperationsHelper;
  scope = MainScope();
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
    require('kotlin'),
    require('kotlinx-coroutines-core'),
    require('ktor-ktor-client-core-jslegacy'),
    require('ktor-ktor-client-json-jslegacy'), 
    require('ktor-ktor-client-serialization-jslegacy')
  );
}

instancer(apiTestLibrary, apiTestLibrary);
  
exports["default"] = apiTestLibrary;
module.exports = exports.default;
