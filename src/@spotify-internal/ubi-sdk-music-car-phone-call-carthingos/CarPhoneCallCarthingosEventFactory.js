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
exports.CarPhoneCallCarthingosEventFactory = exports.createCarPhoneCallCarthingosEventFactory = void 0;
var SPECIFICATION_ID = 'car-phone-call-carthingos';
var APP = 'music';
var SPECIFICATION_VERSION = '2.0.0';
var SPECIFICATION_MODE = 'default';
var GENERATOR_VERSION = '10.0.2';
function createCarPhoneCallCarthingosEventFactory(options) {
  return new CarPhoneCallCarthingosEventFactory(options);
}
exports.createCarPhoneCallCarthingosEventFactory = createCarPhoneCallCarthingosEventFactory;
/**
 * Show user incoming phone call view and their interactions with it
 */
var CarPhoneCallCarthingosEventFactory = /** @class */ (function () {
  function CarPhoneCallCarthingosEventFactory(options) {
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
   * @returns A new instance of AnswerButtonEventFactory
   */
  CarPhoneCallCarthingosEventFactory.prototype.answerButtonFactory = function () {
    return new CarPhoneCallCarthingosEventFactory.AnswerButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @returns A new instance of DeclineButtonEventFactory
   */
  CarPhoneCallCarthingosEventFactory.prototype.declineButtonFactory = function () {
    return new CarPhoneCallCarthingosEventFactory.DeclineButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @returns A new instance of HangUpButtonEventFactory
   */
  CarPhoneCallCarthingosEventFactory.prototype.hangUpButtonFactory = function () {
    return new CarPhoneCallCarthingosEventFactory.HangUpButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  CarPhoneCallCarthingosEventFactory.prototype._getCurrentLocation = function () {
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
  CarPhoneCallCarthingosEventFactory.prototype.getAbsoluteLocation = function () {
    var _a;
    var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
    return {
      locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
    };
  };
  /**
   * Create impression for CarPhoneCallCarthingosEventFactory.
   */
  CarPhoneCallCarthingosEventFactory.prototype.impression = function () {
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
  return CarPhoneCallCarthingosEventFactory;
})();
exports.CarPhoneCallCarthingosEventFactory = CarPhoneCallCarthingosEventFactory;
(function (CarPhoneCallCarthingosEventFactory) {
  /**
   * Create AnswerButtonEventFactory class with path
   * @param path to this node
   */
  var AnswerButtonEventFactory = /** @class */ (function () {
    function AnswerButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'answer_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    AnswerButtonEventFactory.prototype._getCurrentLocation = function () {
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
    AnswerButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit answer_phone_call action.
     */
    AnswerButtonEventFactory.prototype.hitAnswerPhoneCall = function () {
      var data = {
        actionName: 'answer_phone_call',
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
    return AnswerButtonEventFactory;
  })();
  CarPhoneCallCarthingosEventFactory.AnswerButtonEventFactory = AnswerButtonEventFactory;
})(
  (CarPhoneCallCarthingosEventFactory =
    exports.CarPhoneCallCarthingosEventFactory || (exports.CarPhoneCallCarthingosEventFactory = {})),
);
exports.CarPhoneCallCarthingosEventFactory = CarPhoneCallCarthingosEventFactory;
(function (CarPhoneCallCarthingosEventFactory) {
  /**
   * Create DeclineButtonEventFactory class with path
   * @param path to this node
   */
  var DeclineButtonEventFactory = /** @class */ (function () {
    function DeclineButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'decline_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    DeclineButtonEventFactory.prototype._getCurrentLocation = function () {
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
    DeclineButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit decline_phone_call action.
     */
    DeclineButtonEventFactory.prototype.hitDeclinePhoneCall = function () {
      var data = {
        actionName: 'decline_phone_call',
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
    return DeclineButtonEventFactory;
  })();
  CarPhoneCallCarthingosEventFactory.DeclineButtonEventFactory = DeclineButtonEventFactory;
})(
  (CarPhoneCallCarthingosEventFactory =
    exports.CarPhoneCallCarthingosEventFactory || (exports.CarPhoneCallCarthingosEventFactory = {})),
);
exports.CarPhoneCallCarthingosEventFactory = CarPhoneCallCarthingosEventFactory;
(function (CarPhoneCallCarthingosEventFactory) {
  /**
   * Create HangUpButtonEventFactory class with path
   * @param path to this node
   */
  var HangUpButtonEventFactory = /** @class */ (function () {
    function HangUpButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'hang_up_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    HangUpButtonEventFactory.prototype._getCurrentLocation = function () {
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
    HangUpButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit hang_up_phone_call action.
     */
    HangUpButtonEventFactory.prototype.hitHangUpPhoneCall = function () {
      var data = {
        actionName: 'hang_up_phone_call',
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
    return HangUpButtonEventFactory;
  })();
  CarPhoneCallCarthingosEventFactory.HangUpButtonEventFactory = HangUpButtonEventFactory;
})(
  (CarPhoneCallCarthingosEventFactory =
    exports.CarPhoneCallCarthingosEventFactory || (exports.CarPhoneCallCarthingosEventFactory = {})),
);
exports.CarPhoneCallCarthingosEventFactory = CarPhoneCallCarthingosEventFactory;