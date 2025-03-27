/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/magic-research-2-modding-sdk/index.js":
/*!************************************************************!*\
  !*** ./node_modules/magic-research-2-modding-sdk/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minGameVersion: () => (/* binding */ minGameVersion)
/* harmony export */ });
const minGameVersion = (__webpack_require__(/*! ./package.json */ "./node_modules/magic-research-2-modding-sdk/package.json").minGameVersion);



/***/ }),

/***/ "./node_modules/magic-research-2-modding-sdk/package.json":
/*!****************************************************************!*\
  !*** ./node_modules/magic-research-2-modding-sdk/package.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"magic-research-2-modding-sdk","version":"1.8.1","minGameVersion":"1.8.1","description":"Type declarations for Magic Research 2 modding","main":"index.js","types":"modding-decs/backend/modding/Modding.d.ts","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/mcolotto/magic-research-2-modding-sdk.git"},"author":"maticolotto","license":"MIT","bugs":{"url":"https://github.com/mcolotto/magic-research-2-modding-sdk/issues"},"homepage":"https://github.com/mcolotto/magic-research-2-modding-sdk#readme","dependencies":{"react-native":"^0.74.3"}}');

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"dependencies":{"magic-research-2-modding-sdk":"^1.7.5","moment":"^2.30.1","react":"^18.3.1","typescript":"^5.5.3"},"devDependencies":{"@callstack/react-theme-provider":"^3.0.9","@expo/webpack-config":"^19.0.1","@types/react":"^18.3.3","@webpack-cli/generators":"^3.0.7","expo":"^51.0.22","expo-linear-gradient":"^13.0.2","react-native-draggable-flatlist":"^4.0.1","react-native-paper":"5.7.2","react-native-reanimated":"~2.14.4","react-native-gesture-handler":"~2.9.0","react-native-safe-area-context":"^4.10.8","ts-loader":"^9.5.1","undici-types":"^6.19.2","url-loader":"^4.1.1","webpack":"^5.93.0"},"name":"mr2-wizardsGatherMana-mod","description":"Wizards Gather Mana Mod","version":"1.0.0","scripts":{"build":"webpack --node-env=production","build:dev":"webpack --node-env=development","build:prod":"webpack --node-env=production","watch":"webpack --watch","upgrade-sdk":"yarn upgrade --latest magic-research-2-modding-sdk"}}');

/***/ }),

/***/ "./src/code/fungus.png":
/*!*****************************!*\
  !*** ./src/code/fungus.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAW5JREFUWIXllzFLw0AUx/8Rv0EHEZylBrFkcOxWKggWNz+BnaQ49Qu4dSqlUz+FWBAs2Tp2CILEII6FksGv0Dhcnu17pLlDinfqfwnJvbvc//fuvRAvyzLY1I7VtwPYTe+uvjWxOYqN0E3avlc2bp9AZ1YxCkyiKXN8c3EJAGjtvwEA9nzuJY2XAFakqkG9kIR9ApsG9I7f8xHlgRw/LA7ZOtWgwtaTJNwjQDudtH0A67lVjtMY+XXJ5knn4fzDaAPuEdCJiGzKuXSeRFMAv7EKyFkLxXVO99c+nQ06E5xIEpVvwD0ClKvh+D4DgDCoAwAaC94xqR+Q/k4VyA44OFVOOjMeF87lN8TMsZQ7BMj5c/+4MHCQO6Rc63Ksq3+SOwS+dHTO718fAazqnvrCcByXLqxzTnKQgBQRyUk0R8q5qUOd3CFAjmpnPVUNT10WWLt9YXHbkjsESJKEfL5tWSfgnRwUd76fkn0C//7v+BOyqYJMsyyj/wAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/code/wizardsGatherMana.ts":
/*!***************************************!*\
  !*** ./src/code/wizardsGatherMana.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGatherManaSpell: () => (/* binding */ loadGatherManaSpell),
/* harmony export */   loadWizardsGatherMana: () => (/* binding */ loadWizardsGatherMana),
/* harmony export */   preloadWizardsGatherMana: () => (/* binding */ preloadWizardsGatherMana)
/* harmony export */ });
function hideGatherManaAction(MR2) {
  MR2.registerOverridableFunctions;
  const gatherMana = MR2.Actions.getById("gatherMana");
  gatherMana.isVisible = () => {
    return false;
  };
}
function loadGatherManaSpell(MR2) {
  class GatherManaSpell extends MR2.BasicChannelingSpellBase {
    getId() {
      return "gatherManaSpell";
    }
    getSpellName() {
      return "Gather Mana";
    }
    getElement() {
      return "Fire";
    }
    getDisplayDescription(state) {
      return MR2.Actions.getById("gatherMana").getDisplayDescription(state);
    }
    getLevelRequirements() {
      return {};
    }
    getManaCost(state, parentSpell) {
      return -MR2.Actions.getById("gatherMana").getActionEffect(state, "mana");
    }
    getManaCostProportion() {
      return 0;
    }
    getBaseEssenceEfficiency() {
      return 0;
    }
    getDisplayEffect(state) {
      return MR2.Actions.getById("gatherMana").getDisplayEffect(state);
    }
    isEnabled(state, skipAffordabilityChecks) {
      return MR2.getResourceAmount(state, MR2.Resource.Mana) < MR2.getResourceCap(state, MR2.Resource.Mana);
    }
    canAfford(state) {
      return true;
    }
  }
  const gatherManaSpell = new GatherManaSpell();
  MR2.registerSpell(gatherManaSpell);
  MR2.registerChannelingSpellForElement("Fire", gatherManaSpell);
}
function loadWizardsGatherMana(MR2) {
  hideGatherManaAction(MR2);
  loadGatherManaSpell(MR2);
}
function preloadWizardsGatherMana(MR2) {
  const fungusIcon = __webpack_require__(/*! ./fungus.png */ "./src/code/fungus.png");
  MR2.registerGameIcon("none", fungusIcon);
  MR2.registerResource("gatherManaPlaceholder", {
    id: "gatherManaPlaceholder",
    name: "gatherManaPlaceholder",
    resourceInfo: {
      baseCap: 100,
      icon: "none"
    }
  });
  MR2.registerGameIcon("none", fungusIcon);
}

/***/ }),

/***/ "./src/wizardsGatherManaMod.ts":
/*!*************************************!*\
  !*** ./src/wizardsGatherManaMod.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   description: () => (/* binding */ description),
/* harmony export */   id: () => (/* binding */ id),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   preload: () => (/* binding */ preload),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _code_wizardsGatherMana__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/wizardsGatherMana */ "./src/code/wizardsGatherMana.ts");

const PACKAGE = __webpack_require__(/*! ../package.json */ "./package.json");
function load(MR2) {
  (0,_code_wizardsGatherMana__WEBPACK_IMPORTED_MODULE_0__.loadWizardsGatherMana)(MR2);
}
function preload(MR2) {
  (0,_code_wizardsGatherMana__WEBPACK_IMPORTED_MODULE_0__.preloadWizardsGatherMana)(MR2);
}
const id = PACKAGE.name;
const name = PACKAGE.description;
const version = PACKAGE.version;
const description = "A mod that allows wizards to gather mana like they can essence.";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   description: () => (/* binding */ description),
/* harmony export */   id: () => (/* binding */ id),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   minGameVersion: () => (/* binding */ minGameVersion),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   preload: () => (/* binding */ preload),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
const minGameVersion = (__webpack_require__(/*! magic-research-2-modding-sdk */ "./node_modules/magic-research-2-modding-sdk/index.js").minGameVersion);
const {
  load,
  preload,
  id,
  name,
  version,
  description
} = __webpack_require__(/*! ./wizardsGatherManaMod */ "./src/wizardsGatherManaMod.ts");

})();

var __webpack_export_target__ = this;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=mr2-wizardsGatherMana-mod.js.map