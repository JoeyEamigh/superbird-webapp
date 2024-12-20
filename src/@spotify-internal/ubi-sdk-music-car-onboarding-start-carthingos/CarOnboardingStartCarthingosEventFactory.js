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
exports.CarOnboardingStartCarthingosEventFactory = exports.createCarOnboardingStartCarthingosEventFactory = void 0;
var SPECIFICATION_ID = 'car-onboarding-start-carthingos';
var APP = 'music';
var SPECIFICATION_VERSION = '2.0.0';
var SPECIFICATION_MODE = 'default';
var GENERATOR_VERSION = '10.0.2';
function createCarOnboardingStartCarthingosEventFactory(options) {
  return new CarOnboardingStartCarthingosEventFactory(options);
}
exports.createCarOnboardingStartCarthingosEventFactory = createCarOnboardingStartCarthingosEventFactory;
/**
 * Root view for start screen of the onboarding
 */
var CarOnboardingStartCarthingosEventFactory = /** @class */ (function () {
  function CarOnboardingStartCarthingosEventFactory(options) {
    this._path = [
      {
        name: SPECIFICATION_ID,
      },
    ];
    if (options === null || options === void 0 ? void 0 : options.parentAbsoluteLocation) {
      this._parentAbsoluteLocation = options.parentAbsoluteLocation;
    }
  }
  /**
   * @returns A new instance of StartOnboardingButtonEventFactory
   */
  CarOnboardingStartCarthingosEventFactory.prototype.startOnboardingButtonFactory = function () {
    return new CarOnboardingStartCarthingosEventFactory.StartOnboardingButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  CarOnboardingStartCarthingosEventFactory.prototype._getCurrentLocation = function () {
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
  CarOnboardingStartCarthingosEventFactory.prototype.getAbsoluteLocation = function () {
    var _a;
    var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
    return {
      locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
    };
  };
  /**
   * Create impression for CarOnboardingStartCarthingosEventFactory.
   */
  CarOnboardingStartCarthingosEventFactory.prototype.impression = function () {
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
  return CarOnboardingStartCarthingosEventFactory;
})();
exports.CarOnboardingStartCarthingosEventFactory = CarOnboardingStartCarthingosEventFactory;
(function (CarOnboardingStartCarthingosEventFactory) {
  /**
   * Create StartOnboardingButtonEventFactory class with path
   * @param path to this node
   */
  var StartOnboardingButtonEventFactory = /** @class */ (function () {
    function StartOnboardingButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'start_onboarding_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    StartOnboardingButtonEventFactory.prototype._getCurrentLocation = function () {
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
    StartOnboardingButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit ui_navigate action.
     * @param destination the destination field
     */
    StartOnboardingButtonEventFactory.prototype.hitUiNavigate = function (_a) {
      var destination = _a.destination;
      var data = {
        actionParameterNames: ['destination'],
        actionParameterValues: [destination.toString()],
        actionName: 'ui_navigate',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'hit',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    return StartOnboardingButtonEventFactory;
  })();
  CarOnboardingStartCarthingosEventFactory.StartOnboardingButtonEventFactory = StartOnboardingButtonEventFactory;
})(
  (CarOnboardingStartCarthingosEventFactory =
    exports.CarOnboardingStartCarthingosEventFactory || (exports.CarOnboardingStartCarthingosEventFactory = {})),
);
exports.CarOnboardingStartCarthingosEventFactory = CarOnboardingStartCarthingosEventFactory;
