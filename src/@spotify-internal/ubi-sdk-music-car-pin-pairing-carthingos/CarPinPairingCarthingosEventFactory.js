'use strict';
// DO NOT EDIT THIS FILE!
// This file was generated by UBI-generators.
// For support contact us on the #ubi slack channel.
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CarPinPairingCarthingosEventFactory = exports.createCarPinPairingCarthingosEventFactory = void 0;
var SPECIFICATION_ID = 'car-pin-pairing-carthingos';
var APP = 'music';
var SPECIFICATION_VERSION = '2.0.0';
var SPECIFICATION_MODE = 'default';
var GENERATOR_VERSION = '10.0.2';
function createCarPinPairingCarthingosEventFactory(options) {
  return new CarPinPairingCarthingosEventFactory(options);
}
exports.createCarPinPairingCarthingosEventFactory = createCarPinPairingCarthingosEventFactory;
/**
 * A modal shown when a Bluetooth pairing attempt is started
 */
var CarPinPairingCarthingosEventFactory = /** @class */ (function () {
  function CarPinPairingCarthingosEventFactory(options) {
    this._path = [
      {
        name: SPECIFICATION_ID,
      },
    ];
    if (options === null || options === void 0 ? void 0 : options.parentAbsoluteLocation) {
      this._parentAbsoluteLocation = options.parentAbsoluteLocation;
    }
  }
  CarPinPairingCarthingosEventFactory.prototype._getCurrentLocation = function () {
    return {
      pathNodes: this._path,
      specMode: __spreadArrays(
        [SPECIFICATION_MODE],
        __spreadArrays(Array(this._path.length - 1)).map(function () {
          return '';
        }),
      ),
      specVersion: __spreadArrays(
        [SPECIFICATION_VERSION],
        __spreadArrays(Array(this._path.length - 1)).map(function () {
          return '';
        }),
      ),
    };
  };
  CarPinPairingCarthingosEventFactory.prototype.getAbsoluteLocation = function () {
    var _a;
    var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
    return {
      locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
    };
  };
  /**
   * Create impression for CarPinPairingCarthingosEventFactory.
   */
  CarPinPairingCarthingosEventFactory.prototype.impression = function () {
    var data = {
      app: APP,
      generatorVersion: GENERATOR_VERSION,
      specificationVersion: SPECIFICATION_VERSION,
      specificationMode: SPECIFICATION_MODE,
      annotatorConfigurationVersion: '',
      annotatorVersion: '',
      location: this._getCurrentLocation(),
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    };
    return data;
  };
  return CarPinPairingCarthingosEventFactory;
})();
exports.CarPinPairingCarthingosEventFactory = CarPinPairingCarthingosEventFactory;
