/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/app.js":
/*!***********************!*\
  !*** ./Source/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\"#theMusic\")[0].volume = 0.0;\r\n\r\nfunction ToogleMusic() {\r\n    if ($(\"#musicOff\").css(\"visibility\") === \"hidden\") {\r\n        $(\"#musicOn\").css(\"visibility\", \"hidden\");\r\n        $(\"#musicOff\").css(\"visibility\", \"visible\");\r\n        FadeOutMusic();\r\n    }\r\n    else {\r\n        $(\"#musicOn\").css(\"visibility\", \"visible\");\r\n        $(\"#musicOff\").css(\"visibility\", \"hidden\");\r\n        FadeInMusic();\r\n    }\r\n}\r\n\r\nwindow.fadeInMusicTimer = null;\r\nwindow.fadeOutMusicTimer = null;\r\n\r\nfunction FadeInMusic(pVolumeDelta, pTimeDelta) {\r\n    gtag(\"event\", \"FadeInMusic\", {\r\n        \"event_category\": \"music\",\r\n    });\r\n\r\n    pVolumeDelta = pVolumeDelta ? pVolumeDelta : 0.03;\r\n    pTimeDelta = pTimeDelta ? pTimeDelta : 100;\r\n    var theMusic = $(\"#theMusic\")[0];\r\n    var startVolume = theMusic.volume;\r\n    var endVolume = 0.9;\r\n    window.clearInterval(window.fadeOutMusicTimer);\r\n    theMusic.play();\r\n    window.fadeInMusicTimer = setInterval(function () {\r\n        startVolume += pVolumeDelta;\r\n        if (startVolume >= endVolume) {\r\n            startVolume = endVolume;\r\n            clearInterval(window.fadeInMusicTimer);\r\n        }\r\n        theMusic.volume = startVolume;\r\n    }, pTimeDelta);\r\n}\r\n\r\nfunction FadeOutMusic(pVolumeDelta, pTimeDelta) {\r\n    gtag(\"event\", \"FadeOutMusic\", {\r\n        \"event_category\": \"music\",\r\n    });\r\n\r\n    pVolumeDelta = pVolumeDelta ? pVolumeDelta : 0.03;\r\n    pTimeDelta = pTimeDelta ? pTimeDelta : 100;\r\n    var theMusic = $(\"#theMusic\")[0];\r\n    var startVolume = theMusic.volume || 0.9;\r\n    var endVolume = 0.0;\r\n    theMusic.volume = startVolume;\r\n    window.clearInterval(window.fadeInMusicTimer);\r\n    window.fadeOutMusicTimer = setInterval(function () {\r\n        startVolume -= pVolumeDelta;\r\n        if (startVolume <= endVolume) {\r\n            startVolume = endVolume;\r\n            clearInterval(window.fadeOutMusicTimer);\r\n            theMusic.pause();\r\n        }\r\n        theMusic.volume = startVolume;\r\n    }, pTimeDelta);\r\n}\r\n\r\nfunction OpenNewWindow(url, isTab) {\r\n    gtag('event', 'click', {\r\n        \"event_category\": 'Outbound Link',\r\n        \"event_label\": url\r\n    });\r\n\r\n    if (isTab)\r\n        window.open(url, \"_blank\");\r\n    else\r\n        window.location.href = url;\r\n}\r\n\r\n$(\"#GotoFacebook\").click((e) => { OpenNewWindow(\"https://www.facebook.com/thetilliwilli\", e.ctrlKey); })\r\n$(\"#GotoVK\").click((e) => { OpenNewWindow(\"https://vk.com/tilliwilli\", e.ctrlKey); })\r\n$(\"#GotoInstagram\").click((e) => { OpenNewWindow(\"https://www.instagram.com/thetilliwilli\", e.ctrlKey); })\r\n$(\"#GotoEMail\").click((e) => { OpenNewWindow(\"mailto:tilliwilli@gmail.com\", e.ctrlKey); })\r\n$(\"#GotoGithub\").click((e) => { OpenNewWindow(\"https://github.com/thetilliwilli\", e.ctrlKey); })\r\n\r\nObject.assign(window, {\r\n    ToogleMusic,\r\n    \r\n});\n\n//# sourceURL=webpack:///./Source/app.js?");

/***/ }),

/***/ "./Source/bgMover.js":
/*!***************************!*\
  !*** ./Source/bgMover.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { VLen, VNorm, VMul, VClone } = __webpack_require__(/*! ./vector.js */ \"./Source/vector.js\");\r\n\r\n//positions\r\nvar oldX = 0, oldY = 0;\r\nvar newX = 0, newY = 0;\r\n\r\n//Wind force - natural\r\nvar windVector = { x: 1, y: 0.2 };\r\nvar isAffectedByUser = false;\r\nvar timeDelta = 1000 / 120;\r\nvar bgHeader;\r\nvar windVelocity = 20; //px per second\r\nvar curWindVelocity = windVelocity;\r\n\r\n//User interact - artificial\r\nvar userVector = { x: 0, y: 0 };\r\nvar sensivity = -0.3;\r\nvar interactDuration = 25;\r\nwindow.interactTimer = null;\r\n\r\n//timing\r\nvar lastMoveTime = Date.now();\r\n\r\n\r\n$(document).ready(function () {\r\n    bgHeader = $(\"#header\").children()[0];\r\n    bgHeader.style.backgroundPosition = \"0px 0px\";\r\n    document.onmousemove = function (pEvent) {\r\n        window.clearTimeout(window.interactTimer);\r\n        isAffectedByUser = true;\r\n        userVector.x = pEvent.movementX * sensivity;\r\n        userVector.y = pEvent.movementY * sensivity;\r\n        window.interactTimer = window.setTimeout(function () {\r\n            isAffectedByUser = false;\r\n            ChangeDirection();\r\n        }, interactDuration);\r\n    };\r\n\r\n    var prevTouchScreenX = 0;\r\n    var prevTouchScreenY = 0;\r\n    document.addEventListener(\"touchmove\", function(event){\r\n        window.clearTimeout(window.interactTimer);\r\n        isAffectedByUser = true;\r\n        var theTouch = event.changedTouches[0];\r\n        if(theTouch)\r\n        {\r\n\r\n            userVector.x = (prevTouchScreenX - theTouch.screenX) * sensivity;\r\n            userVector.y = (prevTouchScreenY - theTouch.screenY) * sensivity;\r\n            prevTouchScreenX = theTouch.screenX;\r\n            prevTouchScreenY = theTouch.screenY;\r\n        }\r\n        window.interactTimer = window.setTimeout(function () {\r\n            isAffectedByUser = false;\r\n            ChangeDirection();\r\n        }, interactDuration);\r\n    });\r\n\r\n    \r\n\r\n    lastMoveTime = window.performance.now();\r\n    window.requestAnimationFrame(BGAnimationTick);\r\n});\r\n\r\nfunction BGAnimationTick(timeNow) {\r\n    var delta = { x: 0, y: 0 };\r\n\r\n    if (isAffectedByUser)\r\n        delta = { x: userVector.x, y: userVector.y };\r\n    else\r\n        delta = ApplyTimeDeltaIndependentCorrection(VClone(windVector), timeNow);\r\n\r\n    MoveBG(delta.x, delta.y);\r\n\r\n    window.requestAnimationFrame(BGAnimationTick);\r\n}\r\n\r\nfunction MoveBG(deltaX, deltaY) {\r\n\r\n    newX = oldX + deltaX;\r\n    newY = oldY + deltaY;\r\n    bgHeader.style.backgroundPosition = `${newX}px ${newY}px`;\r\n    oldX = newX;\r\n    oldY = newY;\r\n}\r\n\r\nfunction ApplyTimeDeltaIndependentCorrection(vector, timeNow) {\r\n    vector = VClone(vector);\r\n    var vnorm = VNorm(vector);\r\n    var correction = ((timeNow - lastMoveTime) / 1000);\r\n    lastMoveTime = timeNow;\r\n    var vreal = VMul(vnorm, curWindVelocity * correction);\r\n    return vreal;\r\n}\r\n\r\nfunction ChangeDirection() {\r\n    windVector.x = userVector.x;\r\n    windVector.y = userVector.y;\r\n    curWindVelocity = VLen(userVector);\r\n    tsChangeDiretionStartVelocity = curWindVelocity;\r\n\r\n    tsChangeDirectionStartTime = Date.now();\r\n    // tsChangeDirectionTimer = window.setInterval(ChangeDirectionTrans, 16);\r\n    window.requestAnimationFrame(ChangeDirectionTrans);\r\n}\r\nvar tsChangeDirectionTimer = null;\r\nvar tsChangeDirectionStartTime = Date.now();\r\nvar tsChangeDirectionDuration = 200;\r\nvar tsChangeDiretionStartVelocity = 1;\r\n\r\nfunction ChangeDirectionTrans() {\r\n    if (isAffectedByUser) {\r\n        window.clearInterval(tsChangeDirectionTimer);\r\n        return;\r\n    }\r\n\r\n    timeElapsed = Date.now() - tsChangeDirectionStartTime;\r\n\r\n    if (timeElapsed >= tsChangeDirectionDuration) {\r\n        window.clearInterval(tsChangeDirectionTimer);\r\n        curWindVelocity = windVelocity;\r\n        windVector.x = userVector.x;\r\n        windVector.y = userVector.y;\r\n        return;\r\n    }\r\n    else {\r\n        var xTime = timeElapsed / tsChangeDirectionDuration;\r\n        curWindVelocity = windVelocity - (windVelocity - tsChangeDiretionStartVelocity) * (1 - xTime);\r\n    }\r\n    window.requestAnimationFrame(ChangeDirectionTrans);\r\n}\n\n//# sourceURL=webpack:///./Source/bgMover.js?");

/***/ }),

/***/ "./Source/index.js":
/*!*************************!*\
  !*** ./Source/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./principlesRandomGenerator.js */ \"./Source/principlesRandomGenerator.js\");\r\n__webpack_require__(/*! ./principlesSequenceGenerator.js */ \"./Source/principlesSequenceGenerator.js\");\r\n__webpack_require__(/*! ./bgMover.js */ \"./Source/bgMover.js\");\r\n__webpack_require__(/*! ./app.js */ \"./Source/app.js\");\n\n//# sourceURL=webpack:///./Source/index.js?");

/***/ }),

/***/ "./Source/principlesRandomGenerator.js":
/*!*********************************************!*\
  !*** ./Source/principlesRandomGenerator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var principles = [\"From heart\", \"Awesome\", \"About future\", \"Today is tomorrow\", \"Like pandas\", \"Just do it\"];\r\n$(document).ready(function(){\r\n    var firstTime = true;\r\n    var welcomeText = \"TilliWilli\";\r\n    var currentPrinciples = Array.from(principles);\r\n    $(\"#header h1\")[0].onmouseenter = function(pEvent){\r\n        if(firstTime)\r\n        {\r\n            firstTime = false;\r\n            pEvent.target.innerHTML = welcomeText;\r\n        }\r\n        else\r\n        {\r\n            if(currentPrinciples.length === 0)\r\n                currentPrinciples = Array.from(principles);\r\n            var currIndex = parseInt(currentPrinciples.length*Math.random());\r\n            pEvent.target.innerHTML = currentPrinciples[currIndex];\r\n            currentPrinciples.splice(currIndex, 1);\r\n            console.log(currentPrinciples);\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./Source/principlesRandomGenerator.js?");

/***/ }),

/***/ "./Source/principlesSequenceGenerator.js":
/*!***********************************************!*\
  !*** ./Source/principlesSequenceGenerator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var principles = [\r\n    \"TilliWilli Production\",\r\n    \"and <u>PandaHead</u> studio\",\r\n    \"presents\",\r\n    \"from heart\",\r\n    \"awesome\",\r\n    // \"About future\",\r\n    \"Some Super Stuff\",\r\n    \"wich will make ur day\",\r\n    \"and it will\",\r\n    \"be...\",\r\n    \"<i class=\\\"em em-panda_face\\\"></i>The Panda Head\",\r\n    \"<i class=\\\"em em-panda_face\\\"></i>Thx for watching\",\r\n    \"<i class=\\\"em em-panda_face\\\"></i>One more time?\"\r\n    ];\r\n$(document).ready(function(){\r\n    var currentPrinciples = Array.from(principles);\r\n\r\n    function ShowNewPrincipe(pEvent){\r\n        if(currentPrinciples.length === 0)\r\n                currentPrinciples = Array.from(principles);\r\n        var currIndex = 0;\r\n        $(\"#header h1\")[0].innerHTML = currentPrinciples[currIndex];\r\n        currentPrinciples.splice(currIndex, 1);\r\n    };\r\n    \r\n    $(\"#header h1\")[0].onmouseenter = ShowNewPrincipe;\r\n\r\n    document.addEventListener(\"touchstart\", ShowNewPrincipe);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./Source/principlesSequenceGenerator.js?");

/***/ }),

/***/ "./Source/vector.js":
/*!**************************!*\
  !*** ./Source/vector.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function VLen(v){\r\n    return Math.sqrt(v.x*v.x + v.y*v.y);\r\n}\r\n\r\nfunction VNorm(v){\r\n    var vlen = VLen(VClone(v));\r\n    return {\r\n        x: v.x/vlen,\r\n        y: v.y/vlen\r\n    };\r\n}\r\n\r\nfunction VMul(v, scalar){\r\n    v = VClone(v);\r\n    return {\r\n        x: v.x*scalar,\r\n        y: v.y*scalar,\r\n    }\r\n}\r\n\r\nfunction VClone(v){\r\n    return JSON.parse(JSON.stringify(v));\r\n}\r\n\r\nmodule.exports = { VLen, VNorm, VMul, VClone };\n\n//# sourceURL=webpack:///./Source/vector.js?");

/***/ })

/******/ });