'use strict';
let exports = {};
// DO NOT EDIT THIS FILE!
// This file was generated by UBI-generators.
// For support contact us on the #ubi slack channel.
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CarPresetsCarthingosEventFactory = exports.createCarPresetsCarthingosEventFactory = void 0;
var SPECIFICATION_ID = 'car-presets-carthingos';
var APP = 'music';
var SPECIFICATION_VERSION = '2.0.0';
var SPECIFICATION_MODE = 'default';
var GENERATOR_VERSION = '10.0.2';
function createCarPresetsCarthingosEventFactory(options) {
  return new CarPresetsCarthingosEventFactory(options);
}
exports.createCarPresetsCarthingosEventFactory = createCarPresetsCarthingosEventFactory;
/**
 * Shows the user's presets and their interactions with them on Car Thing
 */
var CarPresetsCarthingosEventFactory = /** @class */ (function () {
  function CarPresetsCarthingosEventFactory(options) {
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
   * @returns A new instance of PresetOneButtonEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.presetOneButtonFactory = function () {
    return new CarPresetsCarthingosEventFactory.PresetOneButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @returns A new instance of PresetTwoButtonEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.presetTwoButtonFactory = function () {
    return new CarPresetsCarthingosEventFactory.PresetTwoButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @returns A new instance of PresetThreeButtonEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.presetThreeButtonFactory = function () {
    return new CarPresetsCarthingosEventFactory.PresetThreeButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @returns A new instance of PresetFourButtonEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.presetFourButtonFactory = function () {
    return new CarPresetsCarthingosEventFactory.PresetFourButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @returns A new instance of BackButtonEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.backButtonFactory = function () {
    return new CarPresetsCarthingosEventFactory.BackButtonEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @param position of the DialEventFactory
   * @param uri of the DialEventFactory
   * @returns A new instance of DialEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.dialFactory = function (data) {
    return new CarPresetsCarthingosEventFactory.DialEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
      data: data,
    });
  };
  /**
   * @param position of the PresetCardEventFactory
   * @param uri of the PresetCardEventFactory
   * @returns A new instance of PresetCardEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.presetCardFactory = function (data) {
    return new CarPresetsCarthingosEventFactory.PresetCardEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
      data: data,
    });
  };
  /**
   * @returns A new instance of UnplayablePresetCardEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.unplayablePresetCardFactory = function () {
    return new CarPresetsCarthingosEventFactory.UnplayablePresetCardEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    });
  };
  /**
   * @param position of the PlaceholderPresetCardEventFactory
   * @returns A new instance of PlaceholderPresetCardEventFactory
   */
  CarPresetsCarthingosEventFactory.prototype.placeholderPresetCardFactory = function (data) {
    return new CarPresetsCarthingosEventFactory.PlaceholderPresetCardEventFactory({
      path: this._path,
      parentAbsoluteLocation: this._parentAbsoluteLocation,
      data: data,
    });
  };
  CarPresetsCarthingosEventFactory.prototype._getCurrentLocation = function () {
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
  CarPresetsCarthingosEventFactory.prototype.getAbsoluteLocation = function () {
    var _a;
    var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
    return {
      locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
    };
  };
  /**
   * Create interaction for swipe ui_reveal action.
   */
  CarPresetsCarthingosEventFactory.prototype.swipeUiReveal = function () {
    var data = {
      actionName: 'ui_reveal',
      actionVersion: 1,
      app: APP,
      generatorVersion: GENERATOR_VERSION,
      interactionType: 'swipe',
      specificationMode: SPECIFICATION_MODE,
      specificationVersion: SPECIFICATION_VERSION,
      annotatorConfigurationVersion: '',
      annotatorVersion: '',
      location: this._getCurrentLocation(),
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    };
    return data;
  };
  /**
   * Create interaction for swipe ui_hide action.
   */
  CarPresetsCarthingosEventFactory.prototype.swipeUiHide = function () {
    var data = {
      actionName: 'ui_hide',
      actionVersion: 1,
      app: APP,
      generatorVersion: GENERATOR_VERSION,
      interactionType: 'swipe',
      specificationMode: SPECIFICATION_MODE,
      specificationVersion: SPECIFICATION_VERSION,
      annotatorConfigurationVersion: '',
      annotatorVersion: '',
      location: this._getCurrentLocation(),
      parentAbsoluteLocation: this._parentAbsoluteLocation,
    };
    return data;
  };
  /**
   * Create impression for CarPresetsCarthingosEventFactory.
   */
  CarPresetsCarthingosEventFactory.prototype.impression = function () {
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
  return CarPresetsCarthingosEventFactory;
})();
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create PresetOneButtonEventFactory class with path
   * @param path to this node
   */
  var PresetOneButtonEventFactory = /** @class */ (function () {
    function PresetOneButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'preset_one_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    PresetOneButtonEventFactory.prototype._getCurrentLocation = function () {
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
    PresetOneButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for key_stroke play action.
     * @param item_to_be_played Item (context, track or episode) the user wants to play
     */
    PresetOneButtonEventFactory.prototype.keyStrokePlay = function (_a) {
      var itemToBePlayed = _a.itemToBePlayed;
      var data = {
        actionParameterNames: ['item_to_be_played'],
        actionParameterValues: [itemToBePlayed.toString()],
        actionName: 'play',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for key_stroke ui_reveal action.
     */
    PresetOneButtonEventFactory.prototype.keyStrokeUiReveal = function () {
      var data = {
        actionName: 'ui_reveal',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for long_hit save_preset_content action.
     * @param content_to_be_preset Playable content uri that will be saved for preset play later
     */
    PresetOneButtonEventFactory.prototype.longHitSavePresetContent = function (_a) {
      var contentToBePreset = _a.contentToBePreset;
      var data = {
        actionParameterNames: ['content_to_be_preset'],
        actionParameterValues: [contentToBePreset.toString()],
        actionName: 'save_preset_content',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'long_hit',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    return PresetOneButtonEventFactory;
  })();
  CarPresetsCarthingosEventFactory.PresetOneButtonEventFactory = PresetOneButtonEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create PresetTwoButtonEventFactory class with path
   * @param path to this node
   */
  var PresetTwoButtonEventFactory = /** @class */ (function () {
    function PresetTwoButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'preset_two_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    PresetTwoButtonEventFactory.prototype._getCurrentLocation = function () {
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
    PresetTwoButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for key_stroke play action.
     * @param item_to_be_played Item (context, track or episode) the user wants to play
     */
    PresetTwoButtonEventFactory.prototype.keyStrokePlay = function (_a) {
      var itemToBePlayed = _a.itemToBePlayed;
      var data = {
        actionParameterNames: ['item_to_be_played'],
        actionParameterValues: [itemToBePlayed.toString()],
        actionName: 'play',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for key_stroke ui_reveal action.
     */
    PresetTwoButtonEventFactory.prototype.keyStrokeUiReveal = function () {
      var data = {
        actionName: 'ui_reveal',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for long_hit save_preset_content action.
     * @param content_to_be_preset Playable content uri that will be saved for preset play later
     */
    PresetTwoButtonEventFactory.prototype.longHitSavePresetContent = function (_a) {
      var contentToBePreset = _a.contentToBePreset;
      var data = {
        actionParameterNames: ['content_to_be_preset'],
        actionParameterValues: [contentToBePreset.toString()],
        actionName: 'save_preset_content',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'long_hit',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    return PresetTwoButtonEventFactory;
  })();
  CarPresetsCarthingosEventFactory.PresetTwoButtonEventFactory = PresetTwoButtonEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create PresetThreeButtonEventFactory class with path
   * @param path to this node
   */
  var PresetThreeButtonEventFactory = /** @class */ (function () {
    function PresetThreeButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'preset_three_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    PresetThreeButtonEventFactory.prototype._getCurrentLocation = function () {
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
    PresetThreeButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for key_stroke play action.
     * @param item_to_be_played Item (context, track or episode) the user wants to play
     */
    PresetThreeButtonEventFactory.prototype.keyStrokePlay = function (_a) {
      var itemToBePlayed = _a.itemToBePlayed;
      var data = {
        actionParameterNames: ['item_to_be_played'],
        actionParameterValues: [itemToBePlayed.toString()],
        actionName: 'play',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for key_stroke ui_reveal action.
     */
    PresetThreeButtonEventFactory.prototype.keyStrokeUiReveal = function () {
      var data = {
        actionName: 'ui_reveal',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for long_hit save_preset_content action.
     * @param content_to_be_preset Playable content uri that will be saved for preset play later
     */
    PresetThreeButtonEventFactory.prototype.longHitSavePresetContent = function (_a) {
      var contentToBePreset = _a.contentToBePreset;
      var data = {
        actionParameterNames: ['content_to_be_preset'],
        actionParameterValues: [contentToBePreset.toString()],
        actionName: 'save_preset_content',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'long_hit',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    return PresetThreeButtonEventFactory;
  })();
  CarPresetsCarthingosEventFactory.PresetThreeButtonEventFactory = PresetThreeButtonEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create PresetFourButtonEventFactory class with path
   * @param path to this node
   */
  var PresetFourButtonEventFactory = /** @class */ (function () {
    function PresetFourButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'preset_four_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    PresetFourButtonEventFactory.prototype._getCurrentLocation = function () {
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
    PresetFourButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for key_stroke play action.
     * @param item_to_be_played Item (context, track or episode) the user wants to play
     */
    PresetFourButtonEventFactory.prototype.keyStrokePlay = function (_a) {
      var itemToBePlayed = _a.itemToBePlayed;
      var data = {
        actionParameterNames: ['item_to_be_played'],
        actionParameterValues: [itemToBePlayed.toString()],
        actionName: 'play',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for key_stroke ui_reveal action.
     */
    PresetFourButtonEventFactory.prototype.keyStrokeUiReveal = function () {
      var data = {
        actionName: 'ui_reveal',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for long_hit save_preset_content action.
     * @param content_to_be_preset Playable content uri that will be saved for preset play later
     */
    PresetFourButtonEventFactory.prototype.longHitSavePresetContent = function (_a) {
      var contentToBePreset = _a.contentToBePreset;
      var data = {
        actionParameterNames: ['content_to_be_preset'],
        actionParameterValues: [contentToBePreset.toString()],
        actionName: 'save_preset_content',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'long_hit',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    return PresetFourButtonEventFactory;
  })();
  CarPresetsCarthingosEventFactory.PresetFourButtonEventFactory = PresetFourButtonEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create BackButtonEventFactory class with path
   * @param path to this node
   */
  var BackButtonEventFactory = /** @class */ (function () {
    function BackButtonEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'back_button',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    BackButtonEventFactory.prototype._getCurrentLocation = function () {
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
    BackButtonEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit ui_hide action.
     */
    BackButtonEventFactory.prototype.hitUiHide = function () {
      var data = {
        actionName: 'ui_hide',
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
    return BackButtonEventFactory;
  })();
  CarPresetsCarthingosEventFactory.BackButtonEventFactory = BackButtonEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create DialEventFactory class with path
   * @param path to this node
   */
  var DialEventFactory = /** @class */ (function () {
    function DialEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat(__assign(__assign({}, data), { name: 'dial' }));
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    DialEventFactory.prototype._getCurrentLocation = function () {
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
    DialEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for key_stroke play action.
     * @param item_to_be_played Item (context, track or episode) the user wants to play
     */
    DialEventFactory.prototype.keyStrokePlay = function (_a) {
      var itemToBePlayed = _a.itemToBePlayed;
      var data = {
        actionParameterNames: ['item_to_be_played'],
        actionParameterValues: [itemToBePlayed.toString()],
        actionName: 'play',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'key_stroke',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    /**
     * Create interaction for rotate ui_select action.
     */
    DialEventFactory.prototype.rotateUiSelect = function () {
      var data = {
        actionName: 'ui_select',
        actionVersion: 1,
        app: APP,
        generatorVersion: GENERATOR_VERSION,
        interactionType: 'rotate',
        specificationMode: SPECIFICATION_MODE,
        specificationVersion: SPECIFICATION_VERSION,
        annotatorConfigurationVersion: '',
        annotatorVersion: '',
        location: this._getCurrentLocation(),
        parentAbsoluteLocation: this._parentAbsoluteLocation,
      };
      return data;
    };
    return DialEventFactory;
  })();
  CarPresetsCarthingosEventFactory.DialEventFactory = DialEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create PresetCardEventFactory class with path
   * @param path to this node
   */
  var PresetCardEventFactory = /** @class */ (function () {
    function PresetCardEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat(__assign(__assign({}, data), { name: 'preset_card' }));
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    PresetCardEventFactory.prototype._getCurrentLocation = function () {
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
    PresetCardEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit play action.
     * @param item_to_be_played Item (context, track or episode) the user wants to play
     */
    PresetCardEventFactory.prototype.hitPlay = function (_a) {
      var itemToBePlayed = _a.itemToBePlayed;
      var data = {
        actionParameterNames: ['item_to_be_played'],
        actionParameterValues: [itemToBePlayed.toString()],
        actionName: 'play',
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
    return PresetCardEventFactory;
  })();
  CarPresetsCarthingosEventFactory.PresetCardEventFactory = PresetCardEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create UnplayablePresetCardEventFactory class with path
   * @param path to this node
   */
  var UnplayablePresetCardEventFactory = /** @class */ (function () {
    function UnplayablePresetCardEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat({
        name: 'unplayable_preset_card',
      });
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    UnplayablePresetCardEventFactory.prototype._getCurrentLocation = function () {
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
    UnplayablePresetCardEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit no_action action.
     */
    UnplayablePresetCardEventFactory.prototype.hitNoAction = function () {
      var data = {
        actionName: 'no_action',
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
    /**
     * Create impression for UnplayablePresetCardEventFactory.
     */
    UnplayablePresetCardEventFactory.prototype.impression = function () {
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
    return UnplayablePresetCardEventFactory;
  })();
  CarPresetsCarthingosEventFactory.UnplayablePresetCardEventFactory = UnplayablePresetCardEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
(function (CarPresetsCarthingosEventFactory) {
  /**
   * Create PlaceholderPresetCardEventFactory class with path
   * @param path to this node
   */
  var PlaceholderPresetCardEventFactory = /** @class */ (function () {
    function PlaceholderPresetCardEventFactory(_a) {
      var path = _a.path,
        parentAbsoluteLocation = _a.parentAbsoluteLocation,
        data = _a.data;
      this._path = path.concat(__assign(__assign({}, data), { name: 'placeholder_preset_card' }));
      if (parentAbsoluteLocation) {
        this._parentAbsoluteLocation = parentAbsoluteLocation;
      }
    }
    PlaceholderPresetCardEventFactory.prototype._getCurrentLocation = function () {
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
    PlaceholderPresetCardEventFactory.prototype.getAbsoluteLocation = function () {
      var _a;
      var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
      return {
        locations: __spreadArrays(parentLocations || [], [this._getCurrentLocation()]),
      };
    };
    /**
     * Create interaction for hit no_action action.
     */
    PlaceholderPresetCardEventFactory.prototype.hitNoAction = function () {
      var data = {
        actionName: 'no_action',
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
    /**
     * Create impression for PlaceholderPresetCardEventFactory.
     */
    PlaceholderPresetCardEventFactory.prototype.impression = function () {
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
    return PlaceholderPresetCardEventFactory;
  })();
  CarPresetsCarthingosEventFactory.PlaceholderPresetCardEventFactory = PlaceholderPresetCardEventFactory;
})(
  (CarPresetsCarthingosEventFactory =
    exports.CarPresetsCarthingosEventFactory || (exports.CarPresetsCarthingosEventFactory = {})),
);
exports.CarPresetsCarthingosEventFactory = CarPresetsCarthingosEventFactory;
export { CarPresetsCarthingosEventFactory, createCarPresetsCarthingosEventFactory };
