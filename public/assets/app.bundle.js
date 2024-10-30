webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(86);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Jumbotron = __webpack_require__(597);

Object.defineProperty(exports, 'Jumbotron', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Jumbotron).default;
  }
});

var _NavigationBar = __webpack_require__(598);

Object.defineProperty(exports, 'NavigationBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationBar).default;
  }
});

var _BackToTop = __webpack_require__(351);

Object.defineProperty(exports, 'BackToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BackToTop).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "dev" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(44);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Link> outside a <Router>");

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? Object(__WEBPACK_IMPORTED_MODULE_3_history__["createLocation"])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(124);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(207);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(214);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(126);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(520);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(526);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(527);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(528);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(530);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(531);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(532);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(533);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generatePath__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return __WEBPACK_IMPORTED_MODULE_11__generatePath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matchPath__ = __webpack_require__(535);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_12__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__withRouter__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_13__withRouter__["a"]; });





























/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var appConfig = exports.appConfig = {
  DEV_MODE: true, // flag to fetch mock or real fetch

  api: {
    fakeEndPoint: 'api/somewhere'
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appConfig, 'appConfig', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/config/index.js');
}();

;

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.disconnectUser = disconnectUser;
exports.checkUserIsConnected = checkUserIsConnected;
exports.logUserIfNeeded = logUserIfNeeded;
exports.fetchUserInfoDataIfNeeded = fetchUserInfoDataIfNeeded;

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _config = __webpack_require__(342);

var _userInfosMock = __webpack_require__(570);

var _userInfosMock2 = _interopRequireDefault(_userInfosMock);

var _getLocationOrigin = __webpack_require__(571);

var _getLocationOrigin2 = _interopRequireDefault(_getLocationOrigin);

var _auth = __webpack_require__(88);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// --------------------------------
// CONSTANTS
// --------------------------------
var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';

var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';

var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';

var DISCONNECT_USER = 'DISCONNECT_USER';

// --------------------------------
// REDUCER
// --------------------------------
var initialState = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',

  token: null,
  isAuthenticated: false // authentication status (token based auth)
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = (0, _moment2.default)().format();

  switch (action.type) {

    case CHECK_IF_USER_IS_AUTHENTICATED:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: action.isAuthenticated,
        token: action.token || initialState.token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login: action.user && action.user.login ? action.user.login : initialState.login,
        firstname: action.user && action.user.firstname ? action.user.firstname : initialState.firstname,
        lastname: action.user && action.user.lastname ? action.user.lastname : initialState.firstname
      });

    case DISCONNECT_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname
      });

    // user login (get token and userInfo)
    case REQUEST_LOG_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isLogging: true
      });

    case RECEIVED_LOG_USER:
      var userLogged = action.payload.data;

      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: true,
        token: userLogged.token,
        id: userLogged.id,
        login: userLogged.login,
        firstname: userLogged.firstname,
        lastname: userLogged.lastname,
        isLogging: false
      });

    case ERROR_LOG_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        isLogging: false
      });

    // not used right now:
    case REQUEST_USER_INFOS_DATA:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_USER_INFOS_DATA:
      var userInfos = action.payload.data;

      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname
      });

    case ERROR_USER_INFOS_DATA:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false
      });

    default:
      return state;
  }
};

exports.default = _default;

// --------------------------------
// ACTIONS CREATORS
// --------------------------------
//

/**
 *
 * set user isAuthenticated to false and clear all app localstorage:
 *
 * @export
 * @returns {action} action
 */

function disconnectUser() {
  _auth2.default.clearAllAppStorage();
  return { type: DISCONNECT_USER };
}

/**
 * 
 * check if user is connected by looking at locally stored 
 * - token
 * - user fonrmation
 * 
 * @export
 * @returns {action} action 
 */
function checkUserIsConnected() {
  var token = _auth2.default.getToken();
  var user = _auth2.default.getUserInfo();
  var checkUserHasId = function checkUserHasId(obj) {
    return obj && obj._id;
  };
  var isAuthenticated = token && checkUserHasId(user) ? true : false;

  return _extends({
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token: token
  }, user, {
    isAuthenticated: isAuthenticated
  });
}

/**
 *
 *  user login
 *
 * @param {string} login user login
 * @param {string} password usepasswordr 
 * @returns {Promise<any>} promised action
 */
function logUser(login, password) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var FETCH_TYPE, __SOME_LOGIN_API__, mockResult, url, method, headers, options;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              FETCH_TYPE = _config.appConfig.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
              __SOME_LOGIN_API__ = 'login';
              mockResult = _userInfosMock2.default; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

              url = (0, _getLocationOrigin2.default)() + '/' + __SOME_LOGIN_API__;
              method = 'post';
              headers = {};
              options = {
                credentials: 'same-origin',
                data: {
                  login: login,
                  password: password
                }
              };

              // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)

              return _context.abrupt('return', dispatch({
                type: 'FETCH_MIDDLEWARE',
                fetch: {
                  // common props:
                  type: FETCH_TYPE,
                  actionTypes: {
                    request: REQUEST_LOG_USER,
                    success: RECEIVED_LOG_USER,
                    fail: ERROR_LOG_USER
                  },
                  // mock fetch props:
                  mockResult: mockResult,
                  // real fetch props:
                  url: url,
                  method: method,
                  headers: headers,
                  options: options
                }
              }));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
function logUserIfNeeded(email, password) {
  return function (dispatch, getState) {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }
    return Promise.resolve();
  };
}
function shouldLogUser(state) {
  var isLogging = state.userAuth.isLogging;
  if (isLogging) {
    return false;
  }
  return true;
}

/**
 * fetch user info
 *
 * NOTE: this shows a use-case of fetchMiddleware
 *@param {string} [id=''] user id
 * @returns {Promise<any>} returns fetch promise
 */
function fetchUserInfosData() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (dispatch) {
    var token = _auth2.default.getToken();
    var FETCH_TYPE = _config.appConfig.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';

    var mockResult = _userInfosMock2.default; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    var url = (0, _getLocationOrigin2.default)() + '/' + _config.appConfig.API.users + '/' + id;
    var method = 'get';
    var headers = { authorization: 'Bearer ' + token };
    var options = { credentials: 'same-origin' }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA
        },
        // mock fetch props:
        mockResult: mockResult,
        // real fetch props:
        url: url,
        method: method,
        headers: headers,
        options: options
      }
    });
  };
}

function fetchUserInfoDataIfNeeded() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (dispatch, getState) {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData(id));
    }
    return Promise.resolve();
  };
}

/**
 *
 * determine wether fetching should occur
 *
 * rules:
 * - should not fetch twice when already fetching
 * - ...more rules can be added
 *
 * @param {Immutable.Map} state all redux state (immutable state)
 * @returns {boolean} flag
 */
function shouldFetchUserInfoData(state) {
  var userInfos = state.userAuth;
  if (userInfos.isFetching) {
    return false;
  }
  return true;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(REQUEST_USER_INFOS_DATA, 'REQUEST_USER_INFOS_DATA', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RECEIVED_USER_INFOS_DATA, 'RECEIVED_USER_INFOS_DATA', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(ERROR_USER_INFOS_DATA, 'ERROR_USER_INFOS_DATA', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(REQUEST_LOG_USER, 'REQUEST_LOG_USER', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RECEIVED_LOG_USER, 'RECEIVED_LOG_USER', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(ERROR_LOG_USER, 'ERROR_LOG_USER', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(CHECK_IF_USER_IS_AUTHENTICATED, 'CHECK_IF_USER_IS_AUTHENTICATED', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(DISCONNECT_USER, 'DISCONNECT_USER', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(disconnectUser, 'disconnectUser', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(checkUserIsConnected, 'checkUserIsConnected', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(logUser, 'logUser', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(logUserIfNeeded, 'logUserIfNeeded', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(shouldLogUser, 'shouldLogUser', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(fetchUserInfosData, 'fetchUserInfosData', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(fetchUserInfoDataIfNeeded, 'fetchUserInfoDataIfNeeded', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(shouldFetchUserInfoData, 'shouldFetchUserInfoData', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/userAuth.js');
}();

;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _smoothScroll = __webpack_require__(604);

var _BackToTopButton = __webpack_require__(605);

var _BackToTopButton2 = _interopRequireDefault(_BackToTopButton);

var _reactMotion = __webpack_require__(352);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $:true */
//  weak

var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BackToTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      windowScrollY: 0,
      showBackButton: false
    }, _this.handleWindowScroll = function () {
      var _this2;

      return (_this2 = _this).__handleWindowScroll__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.scrollDone = function () {
      var _this3;

      return (_this3 = _this).__scrollDone__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlesOnBackButtonClick = function () {
      var _this4;

      return (_this4 = _this).__handlesOnBackButtonClick__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleWindowScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var showBackButton = this.state.showBackButton;

      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { x: (0, _reactMotion.spring)(showBackButton ? 0 : 120, _reactMotion.presets.stiff) } },
        function (_ref2) {
          var x = _ref2.x;
          return _react2.default.createElement(_BackToTopButton2.default, {
            position: 'bottom-right',
            onClick: _this5.handlesOnBackButtonClick,
            motionStyle: {
              WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
              transform: 'translate3d(' + x + 'px, 0, 0)'
            }
          });
        }
      );
    }
  }, {
    key: '__handleWindowScroll__REACT_HOT_LOADER__',
    value: function __handleWindowScroll__REACT_HOT_LOADER__() {
      if ($) {
        var windowScrollY = this.state.windowScrollY;
        var minScrollY = this.props.minScrollY;

        var currentWindowScrollY = $(window).scrollTop();

        if (windowScrollY !== currentWindowScrollY) {
          var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;

          this.setState({
            windowScrollY: currentWindowScrollY,
            showBackButton: shouldShowBackButton
          });
        }
      } else {
        /* eslint-disable no-throw-literal*/
        throw 'BackToTop component requires jQuery';
        /* eslint-enable no-throw-literal*/
      }
    }
  }, {
    key: '__scrollDone__REACT_HOT_LOADER__',
    value: function __scrollDone__REACT_HOT_LOADER__() {
      var onScrollDone = this.props.onScrollDone;

      if (onScrollDone) {
        onScrollDone();
      }
    }
  }, {
    key: '__handlesOnBackButtonClick__REACT_HOT_LOADER__',
    value: function __handlesOnBackButtonClick__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      var _props = this.props,
          scrollTo = _props.scrollTo,
          minScrollY = _props.minScrollY;
      var windowScrollY = this.state.windowScrollY;


      if (windowScrollY && windowScrollY > minScrollY) {
        _smoothScroll.smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    }
  }]);

  return BackToTop;
}(_react.Component);

BackToTop.propTypes = {
  minScrollY: _propTypes2.default.number,
  scrollTo: _propTypes2.default.string.isRequired,
  onScrollDone: _propTypes2.default.func
};
BackToTop.defaultProps = {
  minScrollY: 120
};
var _default = BackToTop;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BackToTop, 'BackToTop', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/BackToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/BackToTop.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _reactRouterDom = __webpack_require__(27);

var _Children = __webpack_require__(625);

var _Children2 = _interopRequireDefault(_Children);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Tree = function (_PureComponent) {
  _inherits(Tree, _PureComponent);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

    _this.state = {
      data: [],
      currentSubtreeData: [],
      currentFolderID: ""
    };
    return _this;
  }

  _createClass(Tree, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getFolders();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'getFolders',
    value: function getFolders() {
      var self = this;
      $.ajax({
        // url: args.FBC_URL + "/includes/lib/tree.php?subdomain=" +
        //   args.subdomain + "&app_api=" + args.app_api + "&token=" + args.token + "&wp_abspath=" + args.abspath,
        url: args.FBC_URL + "/includes/lib/tree.php?subdomain=" + args.subdomain,
        type: "POST",
        dataType: 'json',
        data: {
          subdomain: args.subdomain,
          app_api: args.app_api,
          token: args.token,
          wp_abspath: args.abspath
        }
      }).done(function (result) {
        result = JSON.parse(result);
        // self.setState({ data: data.results });
        self.setState({ data: result.results });
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(item, e) {
      var self = this;
      var currentNode = jQuery("#parent_" + item.id);
      var children = jQuery("#parent_" + item.id).find("div").children("ul");
      if (!children.length) {
        currentNode.find("img").removeClass("canto_hidden");
        currentNode.find("i").addClass("canto_hidden");
        $.ajax({
          // url: args.FBC_URL + "/includes/lib/tree.php?subdomain=" +
          //   args.subdomain + "&app_api=" + args.app_api + "&token=" + args.token + "&ablumid=" + item.id + "&wp_abspath=" + args.abspath,
          url: args.FBC_URL + "/includes/lib/tree.php?subdomain=" + args.subdomain,
          type: "POST",
          dataType: 'json',
          data: {
            subdomain: args.subdomain,
            app_api: args.app_api,
            token: args.token,
            ablumid: item.id,
            wp_abspath: args.abspath
          }
        }).done(function (subdata) {
          subdata = JSON.parse(subdata);
          self.setState({
            currentSubtreeData: subdata.results,
            currentFolderID: item.id
          }, function () {
            currentNode.find("img").addClass("canto_hidden");
            currentNode.find("i").removeClass("canto_hidden");
          });
        });
      }
      self.toggleFolder(item.id);
      //e.stopPropagation();
    }
  }, {
    key: 'toggleFolder',
    value: function toggleFolder(id) {
      var children = jQuery("#parent_" + id).find("div").children("ul");
      if (children.is(":visible")) {
        jQuery("#parent_" + id + ">i").removeClass("icon-icn_flight_folder_open3");
        jQuery("#parent_" + id + ">i").addClass("icon-icn_flight_folder_01");
        children.css('display', 'none');
        children.hide('fast');
      } else {
        jQuery("#parent_" + id + ">i").removeClass("icon-icn_flight_folder_01");
        jQuery("#parent_" + id + ">i").addClass("icon-icn_flight_folder_open3");
        children.css('display', 'block');
        children.show('fast');
      }
    }
  }, {
    key: 'showFolders',
    value: function showFolders(data) {
      var _this2 = this;

      var self;
      var folders = [];
      data.map(function (item, index) {
        var id = "parent_" + item.id;
        var loader_white = args.FBC_URL + "/assets/loader_white.gif";
        // if(item.children) {
        // if (Number(item.size)) {
        if (item.scheme == "folder") {
          if (Number(item.size)) {
            var folder = _react2.default.createElement(
              'li',
              { className: 'parent_li first_layer', id: id, key: index },
              _react2.default.createElement('i', { className: 'icon-icn_flight_folder_01', onClick: _this2.handleClick.bind(_this2, item) }),
              _react2.default.createElement('img', { src: loader_white, className: 'folder-loading canto_hidden', alt: 'Loading' }),
              _react2.default.createElement(
                'a',
                { href: 'javascript:;', onClick: _this2.handleClick.bind(_this2, item) },
                item.name
              ),
              _react2.default.createElement(_Children2.default, { item: _this2.state.currentSubtreeData, currentFolderID: _this2.state.currentFolderID, floderID: item.id })
            );
          } else {
            var folder = _react2.default.createElement(
              'li',
              { id: id, key: index },
              _react2.default.createElement('i', { className: 'icon-icn_flight_folder_open3' }),
              item.name
            );
          }
        } else {
          var empty = item.size == 0 ? { color: "#999999" } : {};
          var folder = _react2.default.createElement(
            'li',
            { id: id, key: index },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: { pathname: '/images/' + item.id, state: { albumName: '' + item.name } }, style: empty },
              _react2.default.createElement('i', { className: 'icon-icn_album_01', style: empty }),
              item.name
            )
          );
        }
        folders.push(folder);
      });
      return folders;
    }
  }, {
    key: 'render',
    value: function render() {
      var folderTree = this.state.data.length ? this.showFolders(this.state.data) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('li', null),
        _react2.default.createElement('li', null),
        _react2.default.createElement('li', null),
        _react2.default.createElement('li', null),
        _react2.default.createElement('li', null),
        _react2.default.createElement('li', null),
        _react2.default.createElement('li', null)
      );
      var icon = args.FBC_URL + "/assets/canto-icon.png";
      return _react2.default.createElement(
        'div',
        { id: 'fbc-tree', className: 'collapse' },
        _react2.default.createElement(
          'div',
          { className: 'tree well' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: { pathname: '/images', state: { albumName: 'Main Library' } } },
                _react2.default.createElement('img', { id: 'fbc-icon', src: icon }),
                'Main Library'
              )
            ),
            folderTree
          )
        )
      );
    }
  }]);

  return Tree;
}(_react.PureComponent);

var _default = (0, _reactRouterDom.withRouter)(Tree);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tree, 'Tree', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/tree/Tree.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/tree/Tree.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(25)))

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

// import { withRouter }       from 'react-router-dom';

var AnimatedView = function (_Component) {
  _inherits(AnimatedView, _Component);

  function AnimatedView() {
    _classCallCheck(this, AnimatedView);

    return _possibleConstructorReturn(this, (AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).apply(this, arguments));
  }

  _createClass(AnimatedView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          animated = _props.animated,
          children = _props.children;


      return _react2.default.createElement(
        'section',
        {
          className: (0, _classnames2.default)({
            'content': true,
            'view-enter': animated
          }) },
        children
      );
    }
  }]);

  return AnimatedView;
}(_react.Component);

AnimatedView.propTypes = {
  children: _propTypes2.default.node,
  animated: _propTypes2.default.bool
};
AnimatedView.defaultProps = {
  animated: true
};
var _default = AnimatedView;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AnimatedView, 'AnimatedView', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/animatedView/AnimatedView.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/animatedView/AnimatedView.js');
}();

;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(407);


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactTapEventPlugin = __webpack_require__(192);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _reactHotLoader = __webpack_require__(193);

__webpack_require__(516);

__webpack_require__(25);

__webpack_require__(517);

__webpack_require__(194);

__webpack_require__(518);

var _Root = __webpack_require__(519);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var ELEMENT_TO_BOOTSTRAP = 'root';
// import 'bootstrap/dist/css/bootstrap.min.css';

var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

(0, _reactTapEventPlugin2.default)();

var renderApp = function renderApp(RootComponent) {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(RootComponent, null)
  ), BootstrapedElement);
};

renderApp(_Root2.default);

if (false) {
  module.hot.accept('./Root', function () {
    var RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ELEMENT_TO_BOOTSTRAP, 'ELEMENT_TO_BOOTSTRAP', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/index.js');

  __REACT_HOT_LOADER__.register(BootstrapedElement, 'BootstrapedElement', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/index.js');

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/index.js');
}();

;

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(27);

var _reactRedux = __webpack_require__(56);

var _reactRouterRedux = __webpack_require__(128);

var _configureStore = __webpack_require__(562);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _history = __webpack_require__(44);

var _app = __webpack_require__(595);

var _app2 = _interopRequireDefault(_app);

var _ScrollToTop = __webpack_require__(632);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _login = __webpack_require__(633);

var _login2 = _interopRequireDefault(_login);

var _PageNotFound = __webpack_require__(776);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _LogoutRoute = __webpack_require__(777);

var _LogoutRoute2 = _interopRequireDefault(_LogoutRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

/* eslint-disable no-process-env */

// import PropTypes                from 'prop-types';
// not connected to redux (no index.js)


var history = (0, _history.createBrowserHistory)();
var store = (0, _configureStore2.default)();
var syncedHistory = (0, _reactRouterRedux.syncHistoryWithStore)(history, store);

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.HashRouter,
            { history: syncedHistory },
            _react2.default.createElement(
              _ScrollToTop2.default,
              null,
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _login2.default }),
                _react2.default.createElement(_app2.default, null),
                _react2.default.createElement(_LogoutRoute2.default, { path: '/logout' }),
                _react2.default.createElement(_reactRouterDom.Route, { component: _PageNotFound2.default })
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react.Component);

var _default = Root;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(history, 'history', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/Root.js');

  __REACT_HOT_LOADER__.register(store, 'store', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/Root.js');

  __REACT_HOT_LOADER__.register(syncedHistory, 'syncedHistory', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/Root.js');

  __REACT_HOT_LOADER__.register(Root, 'Root', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/Root.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/Root.js');
}();

;

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(123);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["createBrowserHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(123);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["createHashHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(198);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(197);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  "aria-current": __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(201);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(202);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(203);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(204);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__ = __webpack_require__(125);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__["a" /* default */]);

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(87);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(205);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(126);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(558);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(213);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(213);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(214);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(559);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(126);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(539);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-process-env:0 */
if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__(563);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(32);

var _reduxLogger = __webpack_require__(217);

var _reduxThunk = __webpack_require__(218);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(564);

var _reducers2 = _interopRequireDefault(_reducers);

var _fetchMiddleware = __webpack_require__(575);

var _fetchMiddleware2 = _interopRequireDefault(_fetchMiddleware);

var _reduxDevtoolsExtension = __webpack_require__(594);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var loggerMiddleware = (0, _reduxLogger.createLogger)({
  level: 'info',
  collapsed: true
});

// createStore : enhancer
var enhancer = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, _fetchMiddleware2.default, loggerMiddleware // logger at the end
));

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  if (false) {
    module.hot.accept('../modules/reducers', function () {
      return store.replaceReducer(require('../modules/reducers').default);
    });
  }
  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(loggerMiddleware, 'loggerMiddleware', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/store/configureStore.dev.js');
}();

;

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _reactRouterRedux = __webpack_require__(128);

var _redux = __webpack_require__(32);

var _views = __webpack_require__(57);

var _views2 = _interopRequireDefault(_views);

var _fakeModuleWithFetch = __webpack_require__(567);

var _fakeModuleWithFetch2 = _interopRequireDefault(_fakeModuleWithFetch);

var _userAuth = __webpack_require__(344);

var _userAuth2 = _interopRequireDefault(_userAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = {
  views: _views2.default,
  fakeModuleWithFetch: _fakeModuleWithFetch2.default,
  userAuth: _userAuth2.default
};

var _default = (0, _redux.combineReducers)(_extends({}, reducers, {
  routing: _reactRouterRedux.routerReducer
}));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/reducers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/reducers.js');
}();

;

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.fakeFetchIfNeeded = fakeFetchIfNeeded;

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _fakeAPI = __webpack_require__(568);

var _fakeAPI2 = _interopRequireDefault(_fakeAPI);

var _config = __webpack_require__(342);

var _fetchTools = __webpack_require__(569);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// --------------------------------
// CONSTANTS
// --------------------------------
var REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
var RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
var ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH';

// --------------------------------
// REDUCER
// --------------------------------
var initialState = {
  isFetching: false,
  actionTime: '',
  data: [],
  error: {}
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = (0, _moment2.default)().format();

  switch (action.type) {
    case REQUEST_FAKE_FETCH:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_FAKE_FETCH:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        data: [].concat(_toConsumableArray(action.payload))
      });

    case ERROR_FAKE_FETCH:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        error: action.error ? _extends({}, action.error) : {}
      });

    default:
      return state;
  }
};

exports.default = _default;

// --------------------------------
// ACTIONS CREATORS
// --------------------------------

function fakeFetch() {
  return function (dispatch) {
    var shouldFetchMock = _config.appConfig.DEV_MODE;
    var fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
    var mockResult = _fakeAPI2.default;

    var url = (0, _fetchTools.getLocationOrigin)() + '/' + _config.appConfig.api.fakeEndPoint;
    var method = 'get';
    var options = {};

    // fetch middleware 
    // -> you handles pure front or with back-end asyncs just by disaptching a single object
    //   -> just change config: appConfig.DEV_MODE
    return Promise.resolve(dispatch({
      // type name is not important here since fetchMiddleware will intercept this action:
      type: 'FETCH_MIDDLEWARE',
      // here are fetch middleware props:
      fetch: {
        type: fetchType,
        actionTypes: {
          request: REQUEST_FAKE_FETCH,
          success: RECEIVED_FAKE_FETCH,
          fail: ERROR_FAKE_FETCH
        },
        // props only used when type = FETCH_MOCK:
        mockResult: mockResult,
        // props only used when type = FETCH:
        url: url,
        method: method,
        options: options
      }
    }));
  };
}

function fakeFetchIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }
    return Promise.resolve();
  };
}
function shouldFakeFetch(state) {
  var isFetching = state.fakeModuleWithFetch.isFetching;
  if (isFetching) {
    return false;
  }
  return true;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(REQUEST_FAKE_FETCH, 'REQUEST_FAKE_FETCH', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(RECEIVED_FAKE_FETCH, 'RECEIVED_FAKE_FETCH', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(ERROR_FAKE_FETCH, 'ERROR_FAKE_FETCH', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(fakeFetch, 'fakeFetch', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(fakeFetchIfNeeded, 'fakeFetchIfNeeded', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(shouldFakeFetch, 'shouldFakeFetch', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/fakeModuleWithFetch.js');
}();

;

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = [{"id":1,"label":"item 1"},{"id":2,"label":"item 2"}]

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeBase64 = exports.jsonHeader = exports.defaultOptions = exports.postMethod = exports.getMethod = exports.getLocationOrigin = undefined;

var _jsBase = __webpack_require__(343);

/*
  window.location.origin polyfill
 */
var getLocationOrigin = exports.getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  return window.location.origin;
};

/*
  query options:
 */
//  weak

var getMethod = exports.getMethod = {
  method: 'get'
};

var postMethod = exports.postMethod = {
  method: 'post'
};

var defaultOptions = exports.defaultOptions = {
  credentials: 'same-origin'
};

var jsonHeader = exports.jsonHeader = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    // 'Access-control-Allow-Origin': '*'
  }
};

/*
 general helpers
 */
var encodeBase64 = exports.encodeBase64 = function encodeBase64(stringToEncode) {
  return _jsBase.Base64.encode(stringToEncode);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getLocationOrigin, 'getLocationOrigin', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(getMethod, 'getMethod', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(postMethod, 'postMethod', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(defaultOptions, 'defaultOptions', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(jsonHeader, 'jsonHeader', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(encodeBase64, 'encodeBase64', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/fetchTools.js');
}();

;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.enterHome = enterHome;
exports.leaveHome = leaveHome;
exports.enterComponents = enterComponents;
exports.leaveComponents = leaveComponents;
exports.enterAbout = enterAbout;
exports.leaveAbout = leaveAbout;
exports.enterLogin = enterLogin;
exports.leaveLogin = leaveLogin;
exports.enterProtected = enterProtected;
exports.leaveProtected = leaveProtected;

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
var ENTER_LOGIN_VIEW = 'ENTER_LOGIN_VIEW';
var LEAVE_LOGIN_VIEW = 'LEAVE_LOGIN_VIEW';
var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_COMPONENTS_VIEW = 'ENTER_COMPONENTS_VIEW';
var LEAVE_COMPONENTS_VIEW = 'LEAVE_COMPONENTS_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';
var ENTER_PROTECTED_VIEW = 'ENTER_PROTECTED_VIEW';
var LEAVE_PROTECTED_VIEW = 'LEAVE_PROTECTED_VIEW';

// /////////////////////
// reducer
// /////////////////////
var initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case ENTER_HOME_VIEW:
    case ENTER_COMPONENTS_VIEW:
    case ENTER_ABOUT_VIEW:
    case ENTER_LOGIN_VIEW:
    case ENTER_PROTECTED_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    case LEAVE_HOME_VIEW:
    case LEAVE_COMPONENTS_VIEW:
    case LEAVE_ABOUT_VIEW:
    case LEAVE_LOGIN_VIEW:
    case LEAVE_PROTECTED_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    default:
      return state;
  }
};

exports.default = _default;

// /////////////////////
// action creators
// /////////////////////

function enterHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home',
    enterTime: time,
    leaveTime: null
  };
}

function leaveHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home',
    enterTime: null,
    leaveTime: time
  };
}

function enterComponents() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_COMPONENTS_VIEW,
    currentView: 'components',
    enterTime: time,
    leaveTime: null
  };
}

function leaveComponents() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_COMPONENTS_VIEW,
    currentView: 'components',
    enterTime: null,
    leaveTime: time
  };
}

function enterAbout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_ABOUT_VIEW,
    currentView: 'about',
    enterTime: time,
    leaveTime: null
  };
}

function leaveAbout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_ABOUT_VIEW,
    currentView: 'about',
    enterTime: null,
    leaveTime: time
  };
}

function enterLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: ENTER_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: time,
    leaveTime: null
  };
}

function leaveLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: LEAVE_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: null,
    leaveTime: time
  };
}

function enterProtected() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: ENTER_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: time,
    leaveTime: null
  };
}

function leaveProtected() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: LEAVE_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: null,
    leaveTime: time
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_LOGIN_VIEW, 'ENTER_LOGIN_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_LOGIN_VIEW, 'LEAVE_LOGIN_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_HOME_VIEW, 'ENTER_HOME_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW, 'LEAVE_HOME_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_COMPONENTS_VIEW, 'ENTER_COMPONENTS_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_COMPONENTS_VIEW, 'LEAVE_COMPONENTS_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW, 'ENTER_ABOUT_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW, 'LEAVE_ABOUT_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_PROTECTED_VIEW, 'ENTER_PROTECTED_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_PROTECTED_VIEW, 'LEAVE_PROTECTED_VIEW', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterHome, 'enterHome', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveHome, 'leaveHome', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterComponents, 'enterComponents', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveComponents, 'leaveComponents', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterAbout, 'enterAbout', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveAbout, 'leaveAbout', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterLogin, 'enterLogin', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveLogin, 'leaveLogin', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterProtected, 'enterProtected', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveProtected, 'leaveProtected', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/modules/views.js');
}();

;

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}}

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var getLocationOrigin = exports.getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  return window.location.origin;
};

var _default = getLocationOrigin;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getLocationOrigin, 'getLocationOrigin', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/utils/getLocationOrigin.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/utils/getLocationOrigin.js');
}();

;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(573);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(574);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ 574:
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH = exports.FETCH_MOCK = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _axios = __webpack_require__(345);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_MOCK = exports.FETCH_MOCK = 'FETCH_MOCK';
var FETCH = exports.FETCH = 'FETCH';
//
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//

// FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get',  // lower case, one of 'get', 'post'...
//    headers: {}     // OPTIONAL CONTENT like: data: { someprop: 'value ...}
//    options: {}     // OPTIONAL CONTENT like: Authorization: 'Bearer _A_TOKEN_'
//  }
// }
//
//
//
//
var fetchMiddleware = function fetchMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.fetch) {
        return next(action);
      }

      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
        return next(action);
      }

      if (!action.fetch.actionTypes) {
        return next(action);
      }

      /**
       * fetch mock
       * @type {[type]}
       */
      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult;

        // request

        store.dispatch({ type: request });

        // received successful for mock
        return Promise.resolve(store.dispatch({
          type: success,
          payload: {
            status: 200,
            data: mockResult
          }
        }));
      }

      if (action.fetch.type === FETCH) {
        var _action$fetch2 = action.fetch,
            _action$fetch2$action = _action$fetch2.actionTypes,
            _request = _action$fetch2$action.request,
            _success = _action$fetch2$action.success,
            fail = _action$fetch2$action.fail,
            url = _action$fetch2.url,
            method = _action$fetch2.method,
            headers = _action$fetch2.headers,
            options = _action$fetch2.options;

        // request

        store.dispatch({ type: _request });

        // fetch server (success or fail)
        // returns a Promise
        return _axios2.default.request(_extends({
          method: method,
          url: url,
          withCredentials: true,
          headers: _extends({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Acces-Control-Allow-Origin': '*'
          }, headers)
        }, options)).then(function (data) {
          return store.dispatch({ type: _success, payload: data });
        }).catch(function (err) {
          store.dispatch({ type: fail, error: err });
          return Promise.reject(err);
        });
      }
      return next(action);
    };
  };
};

var _default = fetchMiddleware;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FETCH_MOCK, 'FETCH_MOCK', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(FETCH, 'FETCH', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(fetchMiddleware, 'fetchMiddleware', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/redux/middleware/fetchMiddleware.js');
}();

;

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(32).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _reactRedux = __webpack_require__(56);

var _redux = __webpack_require__(32);

var _views = __webpack_require__(57);

var viewsActions = _interopRequireWildcard(_views);

var _App = __webpack_require__(596);

var _App2 = _interopRequireDefault(_App);

var _reactRouter = __webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, viewsActions), dispatch);
};

// IMPORTANT: witRouter is "needed here" to avoid blocking routing:

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App2.default));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/containers/app/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/containers/app/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/containers/app/index.js');
}();

;

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(130);

var _navigation = __webpack_require__(614);

var _navigation2 = _interopRequireDefault(_navigation);

var _MainRoutes = __webpack_require__(615);

var _MainRoutes2 = _interopRequireDefault(_MainRoutes);

var _Tree = __webpack_require__(358);

var _Tree2 = _interopRequireDefault(_Tree);

var _Search = __webpack_require__(631);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navModel: _navigation2.default
    }, _this.handleLeftNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRightNavItemClick = function () {
      var _this3;

      return (_this3 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'toggle',
    value: function toggle(e) {
      var tree = jQuery('#fbc-tree');
      if (tree.is(':visible')) {
        tree.animate({ "left": "-250px" }, "slow").hide();
        jQuery('#hideShow>i').addClass('fa-bars');
        jQuery('#hideShow>i').removeClass('fa-close');
        jQuery('#__attachments-view-fbc').css({ 'padding-left': '0px' });
      } else {
        tree.animate({ "left": "0px" }, "slow").show();
        jQuery('#hideShow>i').removeClass('fa-bars');
        jQuery('#hideShow>i').addClass('fa-close');
        jQuery('#__attachments-view-fbc').css({ 'padding-left': '250px' });
      }
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(e) {
      this.setState({
        search: e,
        filter: '',
        album: { name: "Recent Images" },
        type: 'search'
      });
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(e) {
      this.setState({
        filter: e,
        type: 'filter'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var navModel = this.state.navModel;


      return _react2.default.createElement(
        'div',
        { id: 'fbc-react' },
        _react2.default.createElement(_Tree2.default, { load: true }),
        _react2.default.createElement(
          'div',
          { className: 'searchRow' },
          _react2.default.createElement(
            'a',
            { className: 'btn', id: 'hideShow', onClick: this.toggle },
            _react2.default.createElement('i', { className: 'fa fa-bars' })
          ),
          _react2.default.createElement(
            'p',
            { id: 'fbc-results' },
            _react2.default.createElement(
              'strong',
              { id: 'fbc-res' },
              'Album:'
            ),
            ' ',
            _react2.default.createElement(
              'span',
              { id: 'fbc-album' },
              'Main Library'
            ),
            ' \xA0\xA0\xA0',
            _react2.default.createElement(
              'strong',
              null,
              'Files:'
            ),
            ' ',
            _react2.default.createElement('span', { id: 'fbc-currentCnt' }),
            ' / ',
            _react2.default.createElement('span', { id: 'fbc-found' })
          ),
          _react2.default.createElement(_Search2.default, { load: true })
        ),
        _react2.default.createElement('div', { id: 'fbc-loop' }),
        _react2.default.createElement(_MainRoutes2.default, null)
      );
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event, viewName) {
      // something to do here?
    }
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event, viewName) {
      // something to do here?
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string

};
var _default = App;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/containers/app/App.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var Jumbotron = function Jumbotron(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jumbotron' },
    props.children
  );
};

Jumbotron.propTypes = {
  children: _propTypes2.default.node
};

var _default = Jumbotron;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Jumbotron, 'Jumbotron', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/jumbotron/Jumbotron.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/jumbotron/Jumbotron.js');
}();

;

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Humburger = __webpack_require__(599);

var _Humburger2 = _interopRequireDefault(_Humburger);

var _LeftNav = __webpack_require__(600);

var _LeftNav2 = _interopRequireDefault(_LeftNav);

var _RightNav = __webpack_require__(602);

var _RightNav2 = _interopRequireDefault(_RightNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationBar = function NavigationBar(_ref) {
  var brand = _ref.brand,
      navModel = _ref.navModel,
      handleLeftNavItemClick = _ref.handleLeftNavItemClick,
      handleRightNavItemClick = _ref.handleRightNavItemClick;

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default' },
    _react2.default.createElement(
      'div',
      { className: 'containersCustom' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(_Humburger2.default, null),
        _react2.default.createElement(
          'a',
          { className: 'navbar-brand' },
          brand
        )
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'collapse navbar-collapse',
          id: 'bs-example-navbar-collapse-1' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav' },
          _react2.default.createElement(_LeftNav2.default, {
            leftLinks: navModel.leftLinks,
            onLeftNavButtonClick: handleLeftNavItemClick
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right' },
          _react2.default.createElement(_RightNav2.default, {
            rightLinks: navModel.rightLinks,
            onRightNavButtonClick: handleRightNavItemClick
          })
        )
      )
    )
  );
}; //  weak

NavigationBar.propTypes = {
  brand: _propTypes2.default.string,
  handleLeftNavItemClick: _propTypes2.default.func,
  handleRightNavItemClick: _propTypes2.default.func,
  navModel: _propTypes2.default.shape({
    leftLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      link: _propTypes2.default.string.isRequired
    })).isRequired,
    rightLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      link: _propTypes2.default.string.isRequired
    })).isRequired
  })
};

NavigationBar.defaultProps = {
  brand: 'brand'
};

var _default = NavigationBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavigationBar, 'NavigationBar', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/NavigationBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/NavigationBar.js');
}();

;

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes    from 'prop-types';

var Humburger = function Humburger() {
  return _react2.default.createElement(
    "button",
    {
      className: "navbar-toggle collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1" },
    _react2.default.createElement(
      "span",
      { className: "sr-only" },
      "Toggle navigation"
    ),
    _react2.default.createElement("span", { className: "icon-bar" }),
    _react2.default.createElement("span", { className: "icon-bar" }),
    _react2.default.createElement("span", { className: "icon-bar" })
  );
};

var _default = Humburger;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Humburger, "Humburger", "C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/humburger/Humburger.js");

  __REACT_HOT_LOADER__.register(_default, "default", "C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/humburger/Humburger.js");
}();

;

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LeftNavButton = __webpack_require__(601);

var _LeftNavButton2 = _interopRequireDefault(_LeftNavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftNav = function LeftNav(_ref) {
  var leftLinks = _ref.leftLinks,
      onLeftNavButtonClick = _ref.onLeftNavButtonClick;

  return _react2.default.createElement(
    'ul',
    { className: 'nav navbar-nav' },
    leftLinks.map(function (aLinkBtn, index) {
      return _react2.default.createElement(_LeftNavButton2.default, {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onLeftNavButtonClick
      });
    })
  );
}; //  weak

LeftNav.propTypes = {
  leftLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    link: _propTypes2.default.string,
    label: _propTypes2.default.string,
    viewName: _propTypes2.default.string
  })),
  onLeftNavButtonClick: _propTypes2.default.func
};

var _default = LeftNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/leftNav/LeftNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/leftNav/LeftNav.js');
}();

;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var LeftNavButton = function (_PureComponent) {
  _inherits(LeftNavButton, _PureComponent);

  function LeftNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: this.handleLeftNavItemClick },
          label
        )
      );
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          viewName = _props2.viewName;

      onClick(event, viewName);
    }
  }]);

  return LeftNavButton;
}(_react.PureComponent);

LeftNavButton.propTypes = {
  link: _propTypes2.default.string,
  label: _propTypes2.default.string,
  viewName: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var _default = LeftNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNavButton, 'LeftNavButton', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
}();

;

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RightNavButton = __webpack_require__(603);

var _RightNavButton2 = _interopRequireDefault(_RightNavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightNav = function RightNav(_ref) {
  var rightLinks = _ref.rightLinks,
      onRightNavButtonClick = _ref.onRightNavButtonClick;

  return _react2.default.createElement(
    'ul',
    { className: 'nav navbar-nav navbar-right' },
    rightLinks.map(function (aLinkBtn, index) {
      return _react2.default.createElement(_RightNavButton2.default, {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onRightNavButtonClick
      });
    })
  );
}; //  weak

RightNav.propTypes = {
  rightLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    link: _propTypes2.default.string,
    label: _propTypes2.default.string,
    viewName: _propTypes2.default.string
  })),
  onRightNavButtonClick: _propTypes2.default.func
};

var _default = RightNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNav, 'RightNav', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/rightNav/RightNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/rightNav/RightNav.js');
}();

;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var RightNavButton = function (_PureComponent) {
  _inherits(RightNavButton, _PureComponent);

  function RightNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: this.handleRightNavItemClick },
          label
        )
      );
    }
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          viewName = _props2.viewName;

      onClick(event, viewName);
    }
  }]);

  return RightNavButton;
}(_react.PureComponent);

RightNavButton.propTypes = {
  link: _propTypes2.default.string,
  label: _propTypes2.default.string,
  viewName: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var _default = RightNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNavButton, 'RightNavButton', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
}();

;

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var smoothScroll = exports.smoothScroll = {
  timer: null,

  stop: function stop() {
    clearTimeout(this.timer);
  },
  scrollTo: function scrollTo(id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function outQuint(x, t, b, c, d) {
          /* eslint-disable no-param-reassign*/
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          /* eslint-enable no-param-reassign*/
        }
      }
    };
    var percentage = void 0;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

    var startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll = void 0;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(smoothScroll, "smoothScroll", "C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/lib/smoothScroll.js");
}();

;

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _UpIcon = __webpack_require__(606);

var _UpIcon2 = _interopRequireDefault(_UpIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor
};

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return _react2.default.createElement(
    'button',
    {
      style: buttonStyle,
      className: (0, _classnames2.default)({
        'btn': true
      }),
      onClick: onClick },
    !children && _react2.default.createElement(
      'div',
      { style: { marginRight: '10px' } },
      _react2.default.createElement(_UpIcon2.default, { color: '#F1F1F1' })
    ),
    !!children && children
  );
};

BackToTopButton.propTypes = {
  position: _propTypes2.default.oneOf(['bottom-left', 'bottom-right']),
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node,
  motionStyle: _propTypes2.default.object
};

BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

function setPosition() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;

  var style = _extends({}, refStyle);

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}

var _default = BackToTopButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultBackGroundColor, 'defaultBackGroundColor', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(sideOffset, 'sideOffset', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(bottomOffset, 'bottomOffset', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultWidth, 'defaultWidth', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultZindex, 'defaultZindex', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultOpacity, 'defaultOpacity', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultStyle, 'defaultStyle', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(BackToTopButton, 'BackToTopButton', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(setPosition, 'setPosition', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
}();

;

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;

  return _react2.default.createElement(
    'svg',
    {
      width: '24px',
      height: '24px',
      viewBox: '0 0 512 512',
      fill: '' + color },
    _react2.default.createElement('path', { d: 'M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\r c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z' })
  );
};

UpIcon.propTypes = {
  color: _propTypes2.default.string
};

UpIcon.defaultProps = {
  color: '#F1F1F1'
};

var _default = UpIcon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UpIcon, 'UpIcon', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/UpIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/backToTop/backToTopButton/UpIcon.js');
}();

;

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = {"brand":"Flight by Canto Wordpress Plugin","leftLinks":[],"rightLinks":[{"label":"Home","link":"/home","view":"home","isRouteBtn":true},{"label":"Protected","link":"/protected","view":"protected","isRouteBtn":true},{"label":"Foo","link":"/foo","view":"foo","isRouteBtn":true},{"label":"Images","link":"/images","view":"images","isRouteBtn":true},{"label":"Disconnect","link":"/login","view":"login","isRouteBtn":true}]}

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(90);

var _images = __webpack_require__(616);

var _images2 = _interopRequireDefault(_images);

var _home = __webpack_require__(626);

var _home2 = _interopRequireDefault(_home);

var _PrivateRoute = __webpack_require__(628);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _protected = __webpack_require__(629);

var _protected2 = _interopRequireDefault(_protected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var MainRoutes = function MainRoutes() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', render: function render() {
        return _react2.default.createElement(_reactRouter.Redirect, { to: '/images' });
      } }),
    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/images', key: '/images', component: _images2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/images/:album', key: '/images/:album', component: _images2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/search/:keyword', key: '/search/:keyword', component: _images2.default })
  );
};

var _default = MainRoutes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainRoutes, 'MainRoutes', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/routes/MainRoutes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/routes/MainRoutes.js');
}();

;

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(56);

var _redux = __webpack_require__(32);

var _views = __webpack_require__(57);

var viewsActions = _interopRequireWildcard(_views);

var _Images = __webpack_require__(617);

var _Images2 = _interopRequireDefault(_Images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views
    enterAbout: viewsActions.enterAbout,
    leaveAbout: viewsActions.leaveAbout
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Images2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/images/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/images/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/images/index.js');
}();

;

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _BackToTop = __webpack_require__(351);

var _BackToTop2 = _interopRequireDefault(_BackToTop);

var _reactRouterDom = __webpack_require__(27);

var _reactModal = __webpack_require__(136);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Item = __webpack_require__(624);

var _Item2 = _interopRequireDefault(_Item);

var _Tree = __webpack_require__(358);

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Images = function (_PureComponent) {
  _inherits(Images, _PureComponent);

  function Images(props) {
    _classCallCheck(this, Images);

    var _this = _possibleConstructorReturn(this, (Images.__proto__ || Object.getPrototypeOf(Images)).call(this, props));

    var keyword = props.match.params.keyword ? props.match.params.keyword : null;
    jQuery('#fbc-found').text("-");
    jQuery('#fbc-currentCnt').text("-");

    _this.state = {
      item: [],
      images: [],
      xhrPool: [],
      start: 0,
      processingCount: 0,
      modalIsOpen: false,
      album: props.match.params.album ? props.match.params.album : null,
      keyword: keyword,
      isLoadFinish: false
    };

    _this.getItem = _this.getItem.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);

    if (props.location.state) {
      var name = props.location.state.albumName ? props.location.state.albumName : "Main Library";
      jQuery('#fbc-res').text("Album:");
      jQuery('#fbc-album').text(name);
    }
    if (keyword) {
      jQuery('#fbc-res').text("Search:");
      jQuery('#fbc-album').text(keyword);
    }

    return _this;
  }

  _createClass(Images, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      var self = this;
      jQuery('#fbc-found').text("-");
      jQuery('#fbc-currentCnt').text("-");

      $.each(self.state.xhrPool, function (idx, jqXHR) {
        jqXHR.abort();
      });

      var album = newProps.match.params.album;
      var keyword = newProps.match.params.keyword;

      var name = "Main Library";
      var text = newProps.location.state;
      if (text) {
        var name = newProps.location.state.albumName ? newProps.location.state.albumName : "Main Library";
      }
      jQuery('#fbc-res').text("Album:");
      jQuery('#fbc-album').text(name);

      if (keyword) {
        jQuery('#fbc-res').text("Search:");
        jQuery('#fbc-album').text(keyword);
      }

      this.setState({
        item: [],
        images: [],
        xhrPool: [],
        album: album,
        keyword: keyword,
        start: 0,
        modalIsOpen: false,
        processingCount: 0,
        isLoadFinish: false
      }, function () {
        _this2.getList();
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterAbout = this.props.enterAbout;

      enterAbout();

      window.addEventListener("scroll", this.handleScroll);

      this.getList();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveAbout = this.props.leaveAbout;

      leaveAbout();
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: 'setResults',
    value: function setResults(album, found) {
      jQuery('#fbc-album').text(album);
      jQuery('#fbc-found').text(found);
    }
  }, {
    key: 'getList',
    value: function getList() {
      jQuery('#loader').show();
      jQuery('#scroll-to-load').hide();

      var self = this;
      self.setState({ isLoadFinish: false });

      var start = this.state.start > 0 ? this.state.start : 0;
      // var album = (this.state.album != null) ? "&album=" + this.state.album : "";
      var album = this.state.album != null ? this.state.album : "";
      // var keyword = (this.state.keyword != null) ? "&keyword=" + this.state.keyword : "";
      var keyword = this.state.keyword != null ? this.state.keyword : "";
      var uri = args.FBC_URL + "/includes/lib/get.php?subdomain=" + args.subdomain + "&app_api=" + args.app_api + "&token=" + args.token + album + keyword + "&limit=60&start=" + start + "&wp_abspath=" + args.abspath;

      $.ajax({
        // url: uri,
        beforeSend: function beforeSend(jqXHR, settings) {
          self.state.xhrPool.push(jqXHR);
        },
        url: args.FBC_URL + "/includes/lib/get.php?subdomain=" + args.subdomain,
        type: "POST",
        dataType: 'json',
        data: {
          subdomain: args.subdomain,
          app_api: args.app_api,
          token: args.token,
          album: album,
          keyword: keyword,
          limit: 60,
          start: start,
          wp_abspath: args.abspath
        }
      }).done(function (result) {
        var data = JSON.parse(result);
        var count = data && data.found ? data.found : 0;
        jQuery('#fbc-found').text(count);
        // var cnt = 0;
        self.setState({
          items: data.results,
          found: data.found
        });
        if (data.found > 0) {
          $.each(data.results, function (k, v) {
            self.getImages(v, data.results.length, data.found);
          });
        } else {
          jQuery('#loader').hide();
          jQuery('#fbc-found').text(0);
          jQuery('#fbc-currentCnt').text(0);
        }
      });
    }
  }, {
    key: 'getImages',
    value: function getImages(item, length, found) {
      var self = this;

      // let docImg = args.FBC_URL + '/assets/document-icon.png';
      // var directUrl = (item.scheme == 'image' || item.scheme == 'video' || item.scheme == 'audio') ? item.url.directUrlPreview : docImg;
      var directUrl800 = item.url.directUrlPreview;
      var directUrl320 = directUrl800.slice(0, -3) + '320';

      var image = {
        "id": item.id,
        "scheme": item.scheme,
        "name": item.name,
        "owner": item.owner,
        "ownerName": item.ownerName,
        "size": item.size,
        "time": item.time,
        "directUrlPreview": directUrl320,
        "directUrlDetail": directUrl800,
        "description": item.description,
        "directUrlOriginal": item.url.directUrlOriginal,
        "preview": item.url.preview
      };

      var arr = self.state.images.slice();
      arr.push(image);
      self.setState({ images: arr });

      var currentCount = self.state.processingCount + 1;
      jQuery('#fbc-currentCnt').text(currentCount);
      self.setState({ processingCount: currentCount });
      if (currentCount == self.state.start + length) {
        jQuery('#loader').hide();
        if (currentCount != found) {
          jQuery('#scroll-to-load').show();
          self.setState({ isLoadFinish: true });
        }

        self.setState({ start: currentCount });
      }

      // });
    }
  }, {
    key: 'getItem',
    value: function getItem(item) {
      this.setState({
        item: item,
        modalIsOpen: true
      });
    }
  }, {
    key: 'handleModal',
    value: function handleModal(e) {
      this.setState({
        modalIsOpen: e
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var self = this;
      var zoom = self.detectZoom();

      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body;
      var html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      var windowBottom = (windowHeight + window.pageYOffset) / (zoom / 100);

      if (windowBottom >= docHeight && this.state.isLoadFinish) {
        this.getList();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {}
  }, {
    key: 'detectZoom',
    value: function detectZoom() {
      var ratio = 0,
          screen = window.screen,
          ua = navigator.userAgent.toLowerCase();

      if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
      } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
          ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
      } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
      }

      if (ratio) {
        ratio = Math.round(ratio * 100);
      }

      return ratio;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var modal = this.state.modalIsOpen ? _react2.default.createElement(_Item2.default, { item: this.state.item, modalIsOpen: true, handleModal: this.handleModal.bind(this) }) : '';

      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        modal,
        _react2.default.createElement(
          'div',
          { className: 'attachments row', id: '__attachments-view-fbc' },
          this.state.images.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { className: 'col-lg-2 col-md-3 col-sm-4 col-xs-6', style: { opacity: "1", height: "190px", paddingLeft: "0px" }, onClick: _this3.getItem.bind(_this3, item), key: index },
              _react2.default.createElement(
                'div',
                { className: 'canto-attachment-preview' },
                _react2.default.createElement('img', {
                  alt: item.name,
                  src: item.directUrlPreview
                  // src={item.directUrlOriginal}
                  , className: "canto-image"
                })
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { id: 'scroll-to-load' },
          _react2.default.createElement(
            'button',
            { onClick: this.getList.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-down' }),
            ' Click or scroll down to load more'
          )
        ),
        _react2.default.createElement(_BackToTop2.default, {
          minScrollY: 40,
          scrollTo: 'fbc-react'
        })
      );
    }
  }]);

  return Images;
}(_react.PureComponent);

Images.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string.isRequired,
  enterAbout: _propTypes2.default.func.isRequired,
  leaveAbout: _propTypes2.default.func.isRequired
};
var _default = Images;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Images, 'Images', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/images/Images.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/images/Images.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(25)))

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _reactRouterDom = __webpack_require__(27);

var _reactModal = __webpack_require__(136);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 99
  },
  content: {
    top: "60px",
    maxWidth: "1140px",
    margin: "0 auto"
  }
};

var Item = function (_PureComponent) {
  _inherits(Item, _PureComponent);

  function Item(props) {
    _classCallCheck(this, Item);

    //console.log(props.match.params.file);
    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {
      modalIsOpen: props.modalIsOpen ? props.modalIsOpen : false,
      item: props.item,
      img: null,
      imgClass: 'blur',
      details: null,
      sizes: null,
      error: false
    };

    _this.closeModal = _this.closeModal.bind(_this);
    _this.getSizes = _this.getSizes.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    jQuery("#fbc-react").css("overflow-y", "hidden");
    jQuery("#fbc-react").css("height", "100vh");
    return _this;
  }

  _createClass(Item, [{
    key: 'closeModal',
    value: function closeModal() {
      //this.setState({modalIsOpen: false});
      jQuery('#loader').hide();
      this.props.handleModal(false);
      jQuery("#fbc-react").css("overflow-y", "scroll");
      jQuery("#fbc-react").css("height", "auto");
    }
  }, {
    key: 'fbc_media_send_to_editor',
    value: function fbc_media_send_to_editor(htmlString) {
      /*
       * TO DO: Featured Image option.
       * This will append the image to the Thumbnail and set as Featured Image on save
       */
      /*
      if(htmlString.attachment_id != -1) {
        window.parent.jQuery('#_thumbnail_id').val(htmlString.attachment_id);
        window.parent.jQuery("#postimagediv").find(".inside").find(".hide-if-no-js").find("img").remove();
        window.parent.jQuery("#postimagediv").find(".inside").find(".hide-if-no-js").prepend(htmlString.attachment);
      }
      */
      var win = window.dialogArguments || opener || parent || top;
      console.log("send_to_editor ---- " + htmlString.attachment);
      console.log("send_to_editor ---- " + win.send_to_editor);
      try {
        win.send_to_editor(htmlString.attachment);
      } catch (e) {
        console.log(e);
      }

      //document.getElementById("loader").style.display = "none";
      console.log("send_to_editor ---- hide loader");
      jQuery('#loader').hide();
      console.log("send_to_editor ---- closeModal" + this);
      this.closeModal();
    }
  }, {
    key: 'loadingHandler',
    value: function loadingHandler(event) {
      event.preventDefault();
    }
  }, {
    key: 'uploadImage',
    value: function uploadImage(event) {
      console.log("Copy-media start-------");
      var self = this;
      var win = window || opener || parent || top;
      jQuery('#loader').show();
      event.preventDefault();
      var target = jQuery(event.target);
      var form = jQuery('#library-form');

      var action = args.FBC_URL + "/includes/lib/copy-media.php?type=file&tab=library";

      $.ajax({
        url: action,
        type: form.attr('method'),
        dataType: 'json',
        data: form.serialize() + '&' + encodeURIComponent(target.attr('id')) + '=true&chromeless=1'
      }).done(function (results) {
        console.log("Copy-media complete-------");
        if (results.error) {
          console.log(results);
          self.setState({ error: results.error });
          jQuery('#loader').hide();
        } else {
          self.setState({ error: null });
          console.log("Copy-media -------no error");
          console.log("Copy-media -------" + args.wp_editor);
          if (args.wp_editor === 'gutenberg') {
            var wp = win.top.wp;
            var blocks = wp.blocks;
            var dispatch = wp.data.dispatch('core/editor');
            console.log("Copy-media-------dispatch.updateBlockAttributes");
            dispatch.updateBlockAttributes(wpBlockClientId, {
              mediaID: results.attachment_id,
              mediaURL: results.attachment_url
            });
            console.log("Copy-media-------switch");
            switch (results.attachment_mime) {
              case 'image':
                var theBlock = blocks.createBlock('core/image', {
                  id: results.attachment_id,
                  url: results.attachment_url
                });
                break;
              case 'video':
                var theBlock = blocks.createBlock('core/video', {
                  id: results.attachment_id,
                  src: results.attachment_url
                });
                break;
              case 'audio':
                var theBlock = blocks.createBlock('core/audio', {
                  id: results.attachment_id,
                  src: results.attachment_url
                });
                break;
              default:
                var theBlock = blocks.createBlock('core/file', {
                  id: results.attachment_id,
                  href: results.attachment_url,
                  fileName: results.attachment_url,
                  textLinkHref: results.attachment_url
                });
                break;
            }
            console.log("Copy-media-------insertBlocks");
            dispatch.insertBlocks(theBlock, wpBlockIndex);
            console.log("Copy-media-------updateBlockAttributes");
            // dispatch.moveBlockToPosition(theBlock.clientId, wpBlockIndex);
            dispatch.updateBlockAttributes(wpBlockClientId, { isOpen: false });
            console.log("Copy-media-------hide loader");
            jQuery('#loader').hide();
          } else {
            console.log("Copy-media-------else fbc_media_send_to_editor");
            self.fbc_media_send_to_editor(results);
            jQuery('#loader').hide();
          }
        }
      });
      /*
      .fail(function(xhr, status, error) {
        console.log("error");
        console.log(xhr.status);
        console.log(xhr.responseText);
      });
      */
    }
  }, {
    key: 'readableFileSize',
    value: function readableFileSize(size) {
      var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = 0;
      if (size >= 1024) {
        while (size >= 1024) {
          size /= 1024;
          ++i;
        }
        return size.toFixed(1) + ' ' + units[i];
      } else {
        return size + ' ' + units[0];
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // jQuery('#loader').show();
      // this.getImage();
      this.setState({ imgClass: 'blur lazyloaded' });
      this.getDetails();
      this.getSizes();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'getDetails',
    value: function getDetails() {
      var self = this;
      $.ajax({
        // url: args.FBC_URL + "/includes/lib/detail.php?id=" + this.state.item.id + "&app_api=" + args.app_api +
        //   "&scheme=" + this.state.item.scheme + "&subdomain=" + args.subdomain + "&token=" + args.token + "&wp_abspath=" + args.abspath,
        url: args.FBC_URL + "/includes/lib/detail.php?subdomain=" + args.subdomain,
        type: "POST",
        dataType: 'json',
        data: {
          subdomain: args.subdomain,
          app_api: args.app_api,
          token: args.token,
          wp_abspath: args.abspath,
          id: this.state.item.id,
          scheme: this.state.item.scheme
        }
      }).done(function (result) {
        result = JSON.parse(result);
        var updateTime = result.default["Date modified"] ? result.default["Date modified"].substring(0, 4) + "-" + result.default["Date modified"].substring(4, 6) + "-" + result.default["Date modified"].substring(6, 8) : "-";
        var details = {
          "id": result.id,
          "scheme": result.scheme,
          "title": result.name,
          "alt": result.name,
          "name": result.name,
          "owner": result.owner,
          "ownerName": result.ownerName,
          "dimensions": result.default["Dimensions"],
          "size": self.readableFileSize(result.size),
          "time": result.time.substring(0, 4) + "-" + result.time.substring(4, 6) + "-" + result.time.substring(6, 8),
          "updated": updateTime,
          "description": result.description,
          "copyright": result.copyright,
          "terms": result.termsAndConditions,
          "termsAndConditions": result.termsAndConditions
        };
        self.setState({ details: details });
      });
    }
  }, {
    key: 'getSizes',
    value: function getSizes() {
      var self = this;
      $.ajax({
        // url: args.FBC_URL + "/includes/lib/sizes.php?abspath=" + args.abspath
        url: args.FBC_URL + "/includes/lib/sizes.php",
        type: "POST",
        dataType: 'json',
        data: {
          abspath: args.abspath
        }
      }).done(function (e) {
        // var e = JSON.parse(e);
        self.setState({ sizes: e });
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var self = this;
      this.setState({
        details: _extends({}, self.state.details, _defineProperty({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var hideGutenberg = args.wp_editor === 'gutenberg' ? 'none' : 'block';
      var content = this.state.details ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'Attachment Details'
        ),
        _react2.default.createElement(
          'div',
          { className: 'attachment-info' },
          _react2.default.createElement(
            'div',
            { className: 'details', style: { lineHeight: "20px" } },
            _react2.default.createElement(
              'div',
              { className: 'filename' },
              this.state.details.name
            ),
            _react2.default.createElement(
              'div',
              { className: 'uploaded' },
              this.state.details.updated
            ),
            _react2.default.createElement(
              'div',
              { className: 'filesize' },
              this.state.details.size
            ),
            _react2.default.createElement(
              'div',
              { className: 'dimensions' },
              this.state.details.dimensions != null ? this.state.details.dimensions.replace('*', ' x ') : ''
            ),
            _react2.default.createElement(
              'div',
              { className: 'owner' },
              this.state.details.owner
            )
          )
        ),
        _react2.default.createElement(
          'form',
          { encType: 'multipart/form-data', method: 'post', action: args.action, className: '', id: 'library-form', style: { display: "block", margin: "0 0 0 20px", position: "relative" } },
          _react2.default.createElement('input', { id: 'post_id', name: 'post_id', type: 'hidden', value: args.postID }),
          _react2.default.createElement('input', { id: 'fbc_id', name: 'fbc_id', type: 'hidden', value: this.state.item.id }),
          _react2.default.createElement('input', { id: 'fbc_scheme', name: 'fbc_scheme', type: 'hidden', value: this.state.item.scheme }),
          _react2.default.createElement('input', { id: 'abspath', name: 'abspath', type: 'hidden', value: args.abspath }),
          _react2.default.createElement('input', { id: 'fbc_flight_domain', name: 'fbc_flight_domain', type: 'hidden', value: args.subdomain }),
          _react2.default.createElement('input', { id: 'fbc_app_token', name: 'fbc_app_token', type: 'hidden', value: args.token }),
          _react2.default.createElement('input', { id: 'fbc_app_api', name: 'fbc_app_api', type: 'hidden', value: args.app_api }),
          _react2.default.createElement(
            'div',
            { id: 'media-items', style: { display: '' + hideGutenberg } },
            _react2.default.createElement(
              'div',
              { tabIndex: '0', 'data-id': '0', className: 'fbc attachment-details save-ready' },
              _react2.default.createElement(
                'label',
                { 'data-setting': 'title', className: 'setting' },
                _react2.default.createElement(
                  'span',
                  { className: 'name' },
                  'Title'
                ),
                _react2.default.createElement('input', { type: 'text', id: 'title', name: 'title', value: this.state.details.title.replace(/\.[^.$]+$/, ''), onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'label',
                { 'data-setting': 'caption', className: 'setting' },
                _react2.default.createElement(
                  'span',
                  { className: 'name' },
                  'Caption'
                ),
                _react2.default.createElement('textarea', { id: 'caption', name: 'caption' })
              ),
              _react2.default.createElement(
                'label',
                { 'data-setting': 'alt', className: 'setting' },
                _react2.default.createElement(
                  'span',
                  { className: 'name' },
                  'Alt Text'
                ),
                _react2.default.createElement('input', { type: 'text', id: 'alt-text', name: 'alt', value: this.state.details.alt.replace(/\.[^.$]+$/, ''), onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'label',
                { 'data-setting': 'description', className: 'setting' },
                _react2.default.createElement(
                  'span',
                  { className: 'name' },
                  'Description'
                ),
                _react2.default.createElement('textarea', { id: 'description', name: 'description', value: this.state.details.description, onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'label',
                { 'data-setting': 'copyright', className: 'setting' },
                _react2.default.createElement(
                  'span',
                  { className: 'name' },
                  'Copyright'
                ),
                _react2.default.createElement('input', { type: 'text', id: 'copyright', name: 'copyright', value: this.state.details.copyright, onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'label',
                { 'data-setting': 'terms', className: 'setting' },
                _react2.default.createElement(
                  'span',
                  { className: 'name' },
                  'Terms Conditions'
                ),
                _react2.default.createElement('textarea', { id: 'terms', name: 'terms', value: this.state.details.terms, onChange: this.handleChange })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'attachment-display-settings', style: { display: '' + hideGutenberg } },
              _react2.default.createElement(
                'h5',
                null,
                'Attachment Display Settings'
              ),
              _react2.default.createElement(
                'label',
                { className: 'setting' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Alignment'
                ),
                _react2.default.createElement(
                  'select',
                  { 'data-user-setting': 'align', name: 'align', 'data-setting': 'align', className: 'alignment' },
                  _react2.default.createElement(
                    'option',
                    { value: 'left' },
                    'Left'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'center' },
                    'Center'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'right' },
                    'Right'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'none' },
                    'None'
                  )
                )
              ),
              _react2.default.createElement(
                'label',
                { className: 'setting' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Link To'
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'link', className: 'link-to', 'data-setting': 'link', 'data-user-setting': 'urlbutton' },
                  _react2.default.createElement(
                    'option',
                    { value: 'none' },
                    'None'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'file' },
                    'Media File'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'post' },
                    'Attachment Page'
                  )
                ),
                _react2.default.createElement('input', { type: 'text', className: 'link-to-custom canto_hidden', 'data-setting': 'linkUrl' })
              ),
              _react2.default.createElement(
                'label',
                { className: 'setting' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Size'
                ),
                _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.sizes } })
              )
            )
          ),
          _react2.default.createElement('p', { className: 'ml-submit' }),
          _react2.default.createElement('br', null),
          this.state.error && _react2.default.createElement(
            'div',
            { className: 'alert alert-danger' },
            _react2.default.createElement(
              'strong',
              null,
              'Error'
            ),
            ' ',
            this.state.error
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3 text-left' },
              _react2.default.createElement(
                'button',
                { className: 'button-secondary', onClick: this.closeModal.bind(this) },
                'Cancel'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8 text-left' },
              _react2.default.createElement(
                'button',
                { className: 'button-primary', id: 'insertAttachment', onClick: this.uploadImage.bind(this) },
                'Insert into Post'
              )
            )
          )
        )
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { style: { display: "block", margin: "0 0 0 20px", position: "relative" } },
          _react2.default.createElement(
            'div',
            { id: 'media-items' },
            _react2.default.createElement(
              'div',
              { tabIndex: '0', 'data-id': '0', className: 'fbc attachment-details save-ready' },
              _react2.default.createElement(
                'h5',
                null,
                'Attachment Details'
              ),
              _react2.default.createElement(
                'div',
                { className: 'attachment-info' },
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'filename' }),
                  _react2.default.createElement('div', { className: 'uploaded' }),
                  _react2.default.createElement('div', { className: 'filesize' }),
                  _react2.default.createElement('div', { className: 'dimensions' }),
                  _react2.default.createElement('div', { className: 'owner' })
                )
              )
            )
          ),
          _react2.default.createElement('p', { className: 'ml-submit' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3 text-left' },
              _react2.default.createElement(
                'button',
                { onClick: this.closeModal.bind(this) },
                'Cancel'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8 text-left' },
              _react2.default.createElement(
                'button',
                { onClick: this.loadingHandler.bind(this) },
                'Loading ...'
              )
            )
          )
        )
      );

      return _react2.default.createElement(
        _reactModal2.default,
        {
          isOpen: this.state.modalIsOpen,
          contentLabel: 'Attachment',
          style: modalStyle },
        _react2.default.createElement(
          'div',
          { className: 'canto-class' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement('img', { src: this.state.item.directUrlDetail, className: 'img-responsive center-block ' + this.state.imgClass })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4' },
            content
          )
        )
      );
    }
  }]);

  return Item;
}(_react.PureComponent);

var _default = Item;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(modalStyle, 'modalStyle', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/item/Item.js');

  __REACT_HOT_LOADER__.register(Item, 'Item', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/item/Item.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/item/Item.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(25)))

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _reactRouterDom = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Children = function (_PureComponent) {
  _inherits(Children, _PureComponent);

  function Children(props) {
    _classCallCheck(this, Children);

    //console.log(props.match.params.file);
    var _this = _possibleConstructorReturn(this, (Children.__proto__ || Object.getPrototypeOf(Children)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(Children, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ data: this.props.item });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextProps.currentFolderID != this.props.currentFolderID) {
        if (nextProps.currentFolderID === this.props.floderID) {
          this.setState({ data: nextProps.item });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'handleClick',
    value: function handleClick(item, e) {
      var children = jQuery("#parent_" + item.id).children("ul");
      if (children.is(":visible")) {
        jQuery("#parent_" + item.id + ">i").removeClass("icon-icn_flight_folder_open3");
        jQuery("#parent_" + item.id + ">i").addClass("icon-icn_flight_folder_01");
        children.css('display', 'none');
        children.hide('fast');
      } else {
        jQuery("#parent_" + item.id + ">i").removeClass("icon-icn_flight_folder_01");
        jQuery("#parent_" + item.id + ">i").addClass("icon-icn_flight_folder_open3");
        children.css('display', 'block');
        children.show('fast');
      }
      //e.stopPropagation();
    }
  }, {
    key: 'getChildren',
    value: function getChildren(data) {
      var _this2 = this;

      var self = this;
      var folders = [];
      data.map(function (item, index) {
        var id = "parent_" + item.id;
        if (item.scheme == "album") {
          var empty = item.size == 0 ? { color: "#999999" } : {};
          var folder = _react2.default.createElement(
            'li',
            { id: id, key: index },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: { pathname: '/images/' + item.id, state: { albumName: '' + item.name } }, style: empty },
              _react2.default.createElement('i', { className: 'icon-icn_album_01', style: empty }),
              item.name
            )
          );
        } else if (item.children) {
          var chillen = item.children ? self.getChildren(item.children) : null;
          var folder = _react2.default.createElement(
            'li',
            { className: 'parent_li', id: id, key: index },
            _react2.default.createElement('i', { className: 'icon-icn_flight_folder_01', onClick: _this2.handleClick.bind(_this2, item) }),
            _react2.default.createElement(
              'a',
              { href: 'javascript:;', onClick: _this2.handleClick.bind(_this2, item) },
              item.name
            ),
            _react2.default.createElement(
              'ul',
              null,
              chillen
            )
          );
        } else {
          var folder = _react2.default.createElement(
            'li',
            { id: id, key: index },
            _react2.default.createElement('i', { className: 'icon-icn_flight_folder_open3' }),
            item.name
          );
        }
        folders.push(folder);
      });
      //this.setState({folders: folders});
      return folders;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var self = this;
      return _react2.default.createElement(
        'div',
        null,
        this.state.data.map(function (item, index) {
          var id = "parent_" + item.id;
          var children = [];

          if (item.scheme == "album") {
            var empty = item.size == 0 ? { color: "#999999" } : {};
            var folder = _react2.default.createElement(
              'li',
              { key: index },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: { pathname: '/images/' + item.id, state: { albumName: '' + item.name } }, style: empty },
                _react2.default.createElement('i', { className: 'icon-icn_album_01', style: empty }),
                item.name
              )
            );
          } else if (item.children) {
            for (var i = 0; i < item.children.length; i++) {
              var id = "parent_" + item.children[i].id;
              if (item.children[i].scheme == "album") {
                var empty = item.size == 0 ? { color: "#999999" } : {};
                var folder = _react2.default.createElement(
                  'li',
                  { id: id, key: i },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: { pathname: '/images/' + item.children[i].id, state: { albumName: '' + item.children[i].name } }, style: empty },
                    _react2.default.createElement('i', { className: 'icon-icn_album_01', style: empty }),
                    item.children[i].name
                  )
                );
                //var icon = "icon-icn_album_01";
                //var click = self.props.onClick.bind(this,item.children[i]);
              } else {
                var chillen = item.children[i].children ? self.getChildren(item.children[i].children) : null;
                var folder = _react2.default.createElement(
                  'li',
                  { id: id, key: i },
                  _react2.default.createElement('i', { className: 'icon-icn_flight_folder_01', onClick: _this3.handleClick.bind(_this3, item.children[i]) }),
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', onClick: _this3.handleClick.bind(_this3, item.children[i]) },
                    item.children[i].name
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    chillen
                  )
                );
              }

              children.push(folder);
            }
            var id = "parent_" + item.id;
            var folder = _react2.default.createElement(
              'li',
              { id: id, key: index },
              _react2.default.createElement('i', { className: 'icon-icn_flight_folder_01', onClick: self.handleClick.bind(_this3, item) }),
              _react2.default.createElement(
                'a',
                { href: 'javascript:;', onClick: self.handleClick.bind(_this3, item) },
                item.name
              ),
              _react2.default.createElement(
                'ul',
                { key: index },
                children
              )
            );
          } else {
            var folder = _react2.default.createElement(
              'li',
              { key: index },
              _react2.default.createElement('i', { className: 'icon-icn_flight_folder_open3' }),
              item.name
            );
          }

          return _react2.default.createElement(
            'ul',
            { key: index },
            folder
          );
        })
      );
    }
  }]);

  return Children;
}(_react.PureComponent);

var _default = Children;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Children, 'Children', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/children/Children.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/children/Children.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(56);

var _redux = __webpack_require__(32);

var _views = __webpack_require__(57);

var viewsActions = _interopRequireWildcard(_views);

var _Home = __webpack_require__(627);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views
    enterHome: viewsActions.enterHome,
    leaveHome: viewsActions.leaveHome
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Home2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/home/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/home/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/home/index.js');
}();

;

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(130);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _reactRouterDom = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterHome = this.props.enterHome;

      enterHome();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveHome = this.props.leaveHome;

      leaveHome();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: { marginTop: "150px" } },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/images' },
            'Go to About'
          )
        )
      );
    }
  }]);

  return Home;
}(_react.PureComponent);

Home.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string.isRequired,
  enterHome: _propTypes2.default.func.isRequired,
  leaveHome: _propTypes2.default.func.isRequired
};
var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/home/Home.js');
}();

;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(27);

var _auth = __webpack_require__(88);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var PrivateRoute = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          InnerComponent = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      var location = this.props.location;


      var isUserAuthenticated = this.isAuthenticated();
      var isTokenExpired = this.isExpired();

      return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: function render(props) {
          return !isTokenExpired && isUserAuthenticated ? _react2.default.createElement(InnerComponent, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: location } } });
        }
      }));
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      var checkUserHasId = function checkUserHasId(user) {
        return user && user.id;
      };
      var user = _auth2.default.getUserInfo() ? _auth2.default.getUserInfo() : null;
      var isAuthenticated = _auth2.default.getToken() && checkUserHasId(user) ? true : false;
      return isAuthenticated;
    }
  }, {
    key: 'isExpired',
    value: function isExpired() {
      // comment me:
      console.log('token expires: ', _auth2.default.getTokenExpirationDate(_auth2.default.getToken()));

      return _auth2.default.isExpiredToken(_auth2.default.getToken());
    }
  }]);

  return PrivateRoute;
}(_react.Component);

PrivateRoute.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  component: _propTypes2.default.any.isRequired,
  path: _propTypes2.default.string
};

var _default = (0, _reactRouterDom.withRouter)(PrivateRoute);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PrivateRoute, 'PrivateRoute', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/privateRoute/PrivateRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/privateRoute/PrivateRoute.js');
}();

;

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(56);

var _redux = __webpack_require__(32);

var _views = __webpack_require__(57);

var viewsActions = _interopRequireWildcard(_views);

var _Protected = __webpack_require__(630);

var _Protected2 = _interopRequireDefault(_Protected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views
    enterProtected: viewsActions.enterProtected,
    leaveProtected: viewsActions.leaveProtected
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Protected2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/protected/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/protected/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/protected/index.js');
}();

;

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Protected = function (_PureComponent) {
  _inherits(Protected, _PureComponent);

  function Protected() {
    _classCallCheck(this, Protected);

    return _possibleConstructorReturn(this, (Protected.__proto__ || Object.getPrototypeOf(Protected)).apply(this, arguments));
  }

  _createClass(Protected, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterProtected = this.props.enterProtected;

      enterProtected();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveProtected = this.props.leaveProtected;

      leaveProtected();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Protected view'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'If you can read, it means you are authenticated'
        )
      );
    }
  }]);

  return Protected;
}(_react.PureComponent);

Protected.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string.isRequired,
  enterProtected: _propTypes2.default.func.isRequired,
  leaveProtected: _propTypes2.default.func.isRequired
};
var _default = Protected;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Protected, 'Protected', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/protected/Protected.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/protected/Protected.js');
}();

;

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _reactRouterDom = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Search = function (_PureComponent) {
  _inherits(Search, _PureComponent);

  function Search(props) {
    _classCallCheck(this, Search);

    //console.log(props.match.params.file);
    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      keyword: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'submit',
    value: function submit(e) {
      e.preventDefault();
      this.props.history.push({
        pathname: '/search/' + this.state.keyword
      });
      this.refs.search.value = '';
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ keyword: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { id: 'searchForm', onSubmit: this.submit.bind(this) },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { type: 'text', id: 'search', ref: 'search', className: 'form-control', onChange: this.onChange.bind(this), placeholder: 'Global Search', autoComplete: 'off' }),
          _react2.default.createElement('i', { className: 'fa fa-search', onClick: this.submit.bind(this) })
        )
      );
    }
  }]);

  return Search;
}(_react.PureComponent);

var _default = (0, _reactRouterDom.withRouter)(Search);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Search, 'Search', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/search/Search.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/search/Search.js');
}();

;

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (window) {
        var prevLocation = prevProps.location;
        var nextLocation = this.props.location;


        if (prevLocation !== nextLocation) {
          window.scrollTo(0, 0);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return ScrollToTop;
}(_react.Component);

ScrollToTop.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  children: _propTypes2.default.node
};

var _default = (0, _reactRouter.withRouter)(ScrollToTop);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ScrollToTop, 'ScrollToTop', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/scrollToTop/ScrollToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/scrollToTop/ScrollToTop.js');
}();

;

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _redux = __webpack_require__(32);

var _reactRedux = __webpack_require__(56);

var _views = __webpack_require__(57);

var viewsActions = _interopRequireWildcard(_views);

var _userAuth = __webpack_require__(344);

var userAuthActions = _interopRequireWildcard(_userAuth);

var _Login = __webpack_require__(634);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views:
    currentView: state.views.currentView,

    // useAuth:
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, viewsActions, userAuthActions), dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/login/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/login/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/login/index.js');
}();

;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(359);

var _auth = __webpack_require__(88);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

// import { Link }       from 'react-router-dom';

var Login = function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    var _ref,
        _this4 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.handlesOnEmailChange = function () {
      var _this2;

      return (_this2 = _this).__handlesOnEmailChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handlesOnPasswordChange = function () {
      var _this3;

      return (_this3 = _this).__handlesOnPasswordChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlesOnLogin = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _this$props, history, logUserIfNeeded, _this$state, email, password, userLogin, response, _response$payload$dat, token, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                _this$props = _this.props, history = _this$props.history, logUserIfNeeded = _this$props.logUserIfNeeded;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                userLogin = {
                  login: email,
                  password: password
                };
                _context.prev = 4;
                _context.next = 7;
                return logUserIfNeeded(userLogin);

              case 7:
                response = _context.sent;
                _response$payload$dat = response.payload.data, token = _response$payload$dat.token, user = _response$payload$dat.user;


                _auth2.default.setToken(token);
                _auth2.default.setUserInfo(user);

                history.push({ pathname: '/' }); // back to Home
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](4);

                /* eslint-disable no-console */
                console.log('login went wrong..., error: ', _context.t0);
                /* eslint-enable no-console */

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4, [[4, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.goHome = function () {
      var _this5;

      return (_this5 = _this).__goHome__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          enterLogin = _props.enterLogin,
          disconnectUser = _props.disconnectUser;


      disconnectUser(); // diconnect user: remove token and user info 
      enterLogin();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveLogin = this.props.leaveLogin;

      leaveLogin();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          email = _state.email,
          password = _state.password;
      var isLogging = this.props.isLogging;


      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            {
              md: 4,
              mdOffset: 4,
              xs: 10,
              xsOffset: 1
            },
            _react2.default.createElement(
              'form',
              {
                className: 'form-horizontal',
                noValidate: true },
              _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(
                  'legend',
                  null,
                  'Login'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'inputEmail',
                      className: 'col-lg-2 control-label' },
                    'Email'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      id: 'inputEmail',
                      placeholder: 'Email',
                      value: email,
                      onChange: this.handlesOnEmailChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'inputPassword',
                      className: 'col-lg-2 control-label' },
                    'Password'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    _react2.default.createElement('input', {
                      type: 'password',
                      className: 'form-control',
                      id: 'inputPassword',
                      placeholder: 'Password',
                      value: password,
                      onChange: this.handlesOnPasswordChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    {
                      lg: 10,
                      lgOffset: 2
                    },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        className: 'login-button btn-block',
                        bsStyle: 'primary',
                        disabled: isLogging,
                        onClick: this.handlesOnLogin },
                      isLogging ? _react2.default.createElement(
                        'span',
                        null,
                        'login in... \xA0',
                        _react2.default.createElement('i', {
                          className: 'fa fa-spinner fa-pulse fa-fw'
                        })
                      ) : _react2.default.createElement(
                        'span',
                        null,
                        'Login'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            {
              md: 4,
              mdOffset: 4,
              xs: 10,
              xsOffset: 1
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsStyle: 'primary',
                onClick: this.goHome
              },
              'back to home'
            )
          )
        )
      );
    }
  }, {
    key: '__handlesOnEmailChange__REACT_HOT_LOADER__',
    value: function __handlesOnEmailChange__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ email: event.target.value.trim() });
    }
  }, {
    key: '__handlesOnPasswordChange__REACT_HOT_LOADER__',
    value: function __handlesOnPasswordChange__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ password: event.target.value.trim() });
    }
  }, {
    key: '__goHome__REACT_HOT_LOADER__',
    value: function __goHome__REACT_HOT_LOADER__(event) {
      if (event) {
        event.preventDefault();
      }
      var history = this.props.history;

      history.push({ pathname: '/' });
    }
  }]);

  return Login;
}(_react.PureComponent);

Login.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views props:
  currentView: _propTypes2.default.string.isRequired,
  enterLogin: _propTypes2.default.func.isRequired,
  leaveLogin: _propTypes2.default.func.isRequired,

  // userAuth:
  isAuthenticated: _propTypes2.default.bool,
  isFetching: _propTypes2.default.bool,
  isLogging: _propTypes2.default.bool,
  disconnectUser: _propTypes2.default.func.isRequired,
  logUserIfNeeded: _propTypes2.default.func.isRequired
};
Login.defaultProps = {
  isFetching: false,
  isLogging: false
};
var _default = Login;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/login/Login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/login/Login.js');
}();

;

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(130);

var _AnimatedView = __webpack_require__(37);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

// import PropTypes      from 'prop-types';


var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          _components.Jumbotron,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Sorry this page does not exists...'
          )
        )
      );
    }
  }]);

  return PageNotFound;
}(_react.PureComponent);

var _default = PageNotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/pageNotFound/PageNotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/views/pageNotFound/PageNotFound.js');
}();

;

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(27);

var _auth = __webpack_require__(88);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var LogoutRoute = function (_PureComponent) {
  _inherits(LogoutRoute, _PureComponent);

  function LogoutRoute() {
    _classCallCheck(this, LogoutRoute);

    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
  }

  _createClass(LogoutRoute, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _auth2.default.clearAllAppStorage();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Route,
        this.props,
        _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login' } })
      );
    }
  }]);

  return LogoutRoute;
}(_react.PureComponent);

LogoutRoute.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(LogoutRoute);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LogoutRoute, 'LogoutRoute', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/logoutRoute/LogoutRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/components/logoutRoute/LogoutRoute.js');
}();

;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _jwtDecode = __webpack_require__(572);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOKEN_KEY = 'token';

var USER_INFO = 'userInfo';

var APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

var parse = JSON.parse;
var stringify = JSON.stringify;

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
var auth = exports.auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getToken: function getToken() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && localStorage.getItem(tokenKey) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && sessionStorage.getItem(tokenKey) || null;
    }
    // default:
    return null;
  },


  /**
  * set the token value into localstorage (managed by localforage)
  *
  * @param {string} [value=''] token value
  * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
  * @param {any} [tokenKey='token'] token key
  * @returns {boolean} success/failure flag
  */
  setToken: function setToken() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TOKEN_KEY;

    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
      }
    }
  },


  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to protected routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
   */
  isAuthenticated: function isAuthenticated() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage && localStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage && sessionStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }
    // default:
    return false;
  },


  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken: function clearToken() {
    var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },


  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate: function getTokenExpirationDate(encodedToken) {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    var token = (0, _jwtDecode2.default)(encodedToken);
    if (!token.exp) {
      return new Date(0); // is expired
    }

    var expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },


  /**
   * tell is token is expired (compared to now)
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {bool} returns true if expired else false
   */
  isExpiredToken: function isExpiredToken(encodedToken) {
    var expirationDate = this.getTokenExpirationDate(encodedToken);
    var rightNow = (0, _moment2.default)();
    var isExpiredToken = (0, _moment2.default)(rightNow).isAfter((0, _moment2.default)(expirationDate));

    return isExpiredToken;
  },


  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////
  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getUserInfo: function getUserInfo() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_INFO;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && parse(localStorage.getItem(userInfoKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && parse(sessionStorage.getItem(userInfoKey)) || null;
    }
    // default:
    return null;
  },


  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
  setUserInfo: function setUserInfo() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : USER_INFO;

    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },


  /**
   * delete userInfo
   *
   * @param {string} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
  clearUserInfo: function clearUserInfo() {
    var userInfoKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_INFO;

    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
    }
  },


  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage: function clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};

var _default = auth;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOKEN_KEY, 'TOKEN_KEY', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(USER_INFO, 'USER_INFO', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(APP_PERSIST_STORES_TYPES, 'APP_PERSIST_STORES_TYPES', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(parse, 'parse', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(stringify, 'stringify', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(auth, 'auth', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Development/Canto/Development/New Backend Pull/backend/WordPress/WPfrontend/src/app/services/auth/index.js');
}();

;

/***/ })

},[406]);
//# sourceMappingURL=app.bundle.js.map