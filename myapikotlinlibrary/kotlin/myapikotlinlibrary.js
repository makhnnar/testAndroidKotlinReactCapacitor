'use strict';

exports.__esModule = true;
exports["default"] = void 0;

var instancer = function (root, factory) {
    factory(
      root, 
      require('kotlin'), 
      require('ktor-ktor-http-jsLegacy'), 
      require('ktor-ktor-client-core-jsLegacy'), 
      require('kotlinx-coroutines-core'), 
      require('ktor-ktor-client-json-jsLegacy'),
      require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'),
      require('ktor-ktor-client-serialization-jsLegacy')
    );
}

var myapikotlinlibrary = function (
  _, 
  Kotlin,
  $module$ktor_ktor_http_jsLegacy, 
  $module$ktor_ktor_client_core_jsLegacy, 
  $module$kotlinx_coroutines_core, 
  $module$ktor_ktor_client_json_jsLegacy, 
  $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, 
  $module$ktor_ktor_client_serialization_jsLegacy
) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpMethod = $module$ktor_ktor_http_jsLegacy.io.ktor.http.HttpMethod;
  var Unit = Kotlin.kotlin.Unit;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var JsonFeature = $module$ktor_ktor_client_json_jsLegacy.io.ktor.client.features.json.JsonFeature;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.json.Json_x26noe$;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization_jsLegacy.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_f0veat$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_g8iu3v$;
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
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
  function request$lambda($receiver) {
    return Unit;
  }
  function Main() {
    this.scope_0 = MainScope();
    this.client = HttpClient(Main$client$lambda);
  }
  Main.prototype.getRandomNumber = function () {
    return Random(32).nextInt();
  };
  function Main$callApiHour$lambda($receiver) {
    $receiver.method = HttpMethod.Companion.Get;
    return Unit;
  }
  function Coroutine$callApiHour($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
  }
  Coroutine$callApiHour.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$callApiHour.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$callApiHour.prototype.constructor = Coroutine$callApiHour;
  Coroutine$callApiHour.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client;
            var urlString = 'http://worldtimeapi.org/api/timezone/America/Argentina/Salta';
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            Main$callApiHour$lambda($receiver_1);
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
  Main.prototype.callApiHour = function (continuation_0, suspended) {
    var instance = new Coroutine$callApiHour(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Main$getHour$lambda(this$Main_0, closure$callback_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Main = this$Main_0;
    this.local$closure$callback = closure$callback_0;
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
            this.result_0 = this.local$this$Main.callApiHour(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var hour = this.result_0;
            return this.local$closure$callback(hour.unixtime.toString());
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
  function Main$getHour$lambda(this$Main_0, closure$callback_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Main$getHour$lambda(this$Main_0, closure$callback_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Main.prototype.getHour = function (callback) {
    launch(this.scope_0, void 0, void 0, Main$getHour$lambda(this, callback));
  };
  function Main$client$lambda$lambda$lambda($receiver) {
    $receiver.prettyPrint = true;
    $receiver.isLenient = true;
    $receiver.ignoreUnknownKeys = true;
    return Unit;
  }
  function Main$client$lambda$lambda($receiver) {
    $receiver.serializer = new KotlinxSerializer(Json(void 0, Main$client$lambda$lambda$lambda));
    return Unit;
  }
  function Main$client$lambda($receiver) {
    $receiver.install_xlxg29$(JsonFeature.Feature, Main$client$lambda$lambda);
    return Unit;
  }
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
  OperationsHelper.prototype.sumValues = function (arrayOfInts) {
    return this.sumValues_9mvhws$(this.getAsArrayOfInts(arrayOfInts));
  };
  OperationsHelper.prototype.sumValues_9mvhws$ = function (values) {
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
  function TimeResponse(unixtime, utc_datetime) {
    TimeResponse$Companion_getInstance();
    this.unixtime = unixtime;
    this.utc_datetime = utc_datetime;
  }
  function TimeResponse$Companion() {
    TimeResponse$Companion_instance = this;
  }
  TimeResponse$Companion.prototype.serializer = function () {
    return TimeResponse$$serializer_getInstance();
  };
  TimeResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeResponse$Companion_instance = null;
  function TimeResponse$Companion_getInstance() {
    if (TimeResponse$Companion_instance === null) {
      new TimeResponse$Companion();
    }return TimeResponse$Companion_instance;
  }
  function TimeResponse$$serializer() {
    this.descriptor_3xpadv$_0 = new PluginGeneratedSerialDescriptor('TimeResponse', this, 2);
    this.descriptor.addElement_ivxn3r$('unixtime', false);
    this.descriptor.addElement_ivxn3r$('utc_datetime', false);
    TimeResponse$$serializer_instance = this;
  }
  Object.defineProperty(TimeResponse$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_3xpadv$_0;
    }
  });
  TimeResponse$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeLongElement_j0o2mv$(this.descriptor, 0, value.unixtime);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.utc_datetime);
    output.endStructure_24f42q$(this.descriptor);
  };
  TimeResponse$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeLongElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return TimeResponse_init(bitMask0, local0, local1, null);
  };
  TimeResponse$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer];
  };
  TimeResponse$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var TimeResponse$$serializer_instance = null;
  function TimeResponse$$serializer_getInstance() {
    if (TimeResponse$$serializer_instance === null) {
      new TimeResponse$$serializer();
    }return TimeResponse$$serializer_instance;
  }
  function TimeResponse_init(seen1, unixtime, utc_datetime, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(TimeResponse.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('unixtime');
    else
      $this.unixtime = unixtime;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('utc_datetime');
    else
      $this.utc_datetime = utc_datetime;
    return $this;
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
  function getMain() {
    return new Main();
  }
  function getOperationsHelper() {
    return new OperationsHelper();
  }
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
  _.Main = Main;
  _.OperationsHelper = OperationsHelper;
  Object.defineProperty(TimeResponse, 'Companion', {
    get: TimeResponse$Companion_getInstance
  });
  Object.defineProperty(TimeResponse, '$serializer', {
    get: TimeResponse$$serializer_getInstance
  });
  _.TimeResponse_init_wok9wd$ = TimeResponse_init;
  _.TimeResponse = TimeResponse;
  _.getMain = getMain;
  _.getOperationsHelper = getOperationsHelper;
  TimeResponse$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  TimeResponse$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Kotlin.defineModule('myapikotlinlibrary', _);
  return _;
};

instancer(myapikotlinlibrary,myapikotlinlibrary);

exports["default"] = myapikotlinlibrary;
module.exports = exports.default;

//# sourceMappingURL=myapikotlinlibrary.js.map
