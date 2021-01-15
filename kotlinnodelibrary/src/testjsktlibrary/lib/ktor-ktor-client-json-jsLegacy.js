(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-http-jsLegacy', 'ktor-ktor-client-core-jsLegacy', 'ktor-ktor-io-jsLegacy', 'ktor-ktor-utils-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-jsLegacy'), require('ktor-ktor-client-core-jsLegacy'), require('ktor-ktor-io-jsLegacy'), require('ktor-ktor-utils-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-json-jsLegacy'.");
    }if (typeof this['ktor-ktor-http-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-jsLegacy'. Its dependency 'ktor-ktor-http-jsLegacy' was not found. Please, check whether 'ktor-ktor-http-jsLegacy' is loaded prior to 'ktor-ktor-client-json-jsLegacy'.");
    }if (typeof this['ktor-ktor-client-core-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-jsLegacy'. Its dependency 'ktor-ktor-client-core-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-core-jsLegacy' is loaded prior to 'ktor-ktor-client-json-jsLegacy'.");
    }if (typeof this['ktor-ktor-io-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-jsLegacy'. Its dependency 'ktor-ktor-io-jsLegacy' was not found. Please, check whether 'ktor-ktor-io-jsLegacy' is loaded prior to 'ktor-ktor-client-json-jsLegacy'.");
    }if (typeof this['ktor-ktor-utils-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-jsLegacy'. Its dependency 'ktor-ktor-utils-jsLegacy' was not found. Please, check whether 'ktor-ktor-utils-jsLegacy' is loaded prior to 'ktor-ktor-client-json-jsLegacy'.");
    }root['ktor-ktor-client-json-jsLegacy'] = factory(typeof this['ktor-ktor-client-json-jsLegacy'] === 'undefined' ? {} : this['ktor-ktor-client-json-jsLegacy'], kotlin, this['ktor-ktor-http-jsLegacy'], this['ktor-ktor-client-core-jsLegacy'], this['ktor-ktor-io-jsLegacy'], this['ktor-ktor-utils-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_http_jsLegacy, $module$ktor_ktor_client_core_jsLegacy, $module$ktor_ktor_io_jsLegacy, $module$ktor_ktor_utils_jsLegacy) {
  'use strict';
  var ContentType = $module$ktor_ktor_http_jsLegacy.io.ktor.http.ContentType;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var HttpRequestPipeline = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestPipeline;
  var Unit = Kotlin.kotlin.Unit;
  var http = $module$ktor_ktor_http_jsLegacy.io.ktor.http;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var equals = Kotlin.equals;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var ByteReadChannel = $module$ktor_ktor_io_jsLegacy.io.ktor.utils.io.ByteReadChannel;
  var readRemaining = $module$ktor_ktor_io_jsLegacy.io.ktor.utils.io.readRemaining_3dmw3p$;
  var HttpResponseContainer = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponseContainer;
  var AttributeKey = $module$ktor_ktor_utils_jsLegacy.io.ktor.util.AttributeKey;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HttpClientFeature = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.features.HttpClientFeature;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function JsonFeature$Feature() {
    JsonFeature$Feature_instance = this;
    this.key_nhnsxd$_0 = new AttributeKey('Json');
  }
  var JsonFeature$Feature_instance = null;
  function JsonSerializer() {
  }
  JsonSerializer.prototype.write_za3rmp$ = function (data) {
    return this.write_ydd6c4$(data, ContentType.Application.Json);
  };
  JsonSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'JsonSerializer', interfaces: []};
  var serializersStore;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  var package$json = package$features.json || (package$features.json = {});
  package$json.JsonSerializer = JsonSerializer;
  Object.defineProperty(package$json, 'serializersStore', {get: function () {
    return serializersStore;
  }});
  JsonFeature$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  serializersStore = ArrayList_init();
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-json-jsLegacy.js.map
