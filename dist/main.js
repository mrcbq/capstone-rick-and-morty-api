/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_characters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/characters.js */ "./src/modules/characters.js");
/* harmony import */ var _modules_createCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createCard.js */ "./src/modules/createCard.js");
/* harmony import */ var _modules_commentsPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commentsPopup.js */ "./src/modules/commentsPopup.js");
/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/involvementAPI.js */ "./src/modules/involvementAPI.js");
/* harmony import */ var _modules_counterCards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/counterCards.js */ "./src/modules/counterCards.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_createCard_js__WEBPACK_IMPORTED_MODULE_2__]);
_modules_createCard_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import getRandomArray from './modules/randomNumber.js';

const containerPopup = document.querySelector('.popup');
const container = document.getElementById('cards-container');
const counterCards = document.getElementById('counter-cards');

const charactersData = await (0,_modules_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"])([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// const charactersData = await getCharacters(getRandomArray(Math.random() * 10 + 1));

container.addEventListener('click', async (e) => {
  if (e.target.classList.contains('comments-button')) {
    const { id } = e.target.parentElement.parentElement;
    const characterDetail = await (0,_modules_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
    (0,_modules_commentsPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"])(characterDetail, containerPopup);
  } else if (e.target.classList.contains('like-button')) {
    const { id } = e.target.parentElement.parentElement.parentElement.parentElement;
    await (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__.postLike)(id);
    const likesData = await (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__.getLikes)();
    const idIsEqualsTo = (likeObj, idx) => likeObj.item_id === idx;
    const result = likesData.find((obj) => idIsEqualsTo(obj, id)) ?? 0;
    e.target.nextSibling.textContent = `${result.likes ?? 0} Likes`;
  }
});

charactersData.forEach((character) => {
  const card = (0,_modules_createCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(character);
  container.appendChild(card);
});

const cardsNumber = (0,_modules_counterCards_js__WEBPACK_IMPORTED_MODULE_5__["default"])(container);
counterCards.textContent = `Characters (${cardsNumber})`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/characters.js":
/*!***********************************!*\
  !*** ./src/modules/characters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getCharacters = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const characterData = await response.json();
  return characterData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCharacters);


/***/ }),

/***/ "./src/modules/commentsPopup.js":
/*!**************************************!*\
  !*** ./src/modules/commentsPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icons8_x_50_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons8-x-50 (1).png */ "./src/img/icons8-x-50 (1).png");
/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComment.js */ "./src/modules/postComment.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");
/* harmony import */ var _counterComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterComments.js */ "./src/modules/counterComments.js");





const popupComments = (data, container) => {
  document.body.classList.add('overflow-h');
  container.classList.add('background-gradient');
  container.innerHTML = `
    <div class="popup-ele">
        <div class="button-div">
            <button alt="quit button" id="quit" class="quit-button"><img src="${_img_icons8_x_50_1_png__WEBPACK_IMPORTED_MODULE_0__}"></button>
        </div>
        <div class="popup-description">
            <img src="${data.image}">
            <h1>${data.name}</h1>
            <div class="popup-description-elements">
                <p>Status: ${data.status}</p>
                <p>Species: ${data.species}</p>
                <p>Gender: ${data.gender}</p>
                <p>Origin: ${data.origin.name}</p>
                <p>Location: ${data.location.name}</p>
            </div>
            <div class="comments-section">
                <h2 class="heading-comment">Comments</h2>
                <ul class="comments-elements">
                </ul>
            </div>
        </div>
        <div class="popup-form-section">
            <h2>Add a Comment</h2>
            <form id="comment-form">
                <input type="text" id="username" name="username" placeholder="Your Name" required> <br>
                <textarea type="text" id="text-area" placeholder="Your insights" maxlength="300" name="message" required></textarea> <br>
                <button type="submit" class="button-comment">Comment</button>
            </form>
        </div>
    </div>
    `;
  const quitButton = document.querySelector('#quit');
  quitButton.addEventListener('click', () => {
    document.body.classList.remove('overflow-h');
    container.classList.remove('background-gradient');
    container.innerHTML = '';
  });

  const formAddComment = document.getElementById('comment-form');
  const username = document.getElementById('username');
  const comment = document.getElementById('text-area');
  const commentsContainer = document.querySelector('.comments-elements');
  const headingComments = document.querySelector('.heading-comment');

  headingComments.textContent = `Comment(${(0,_counterComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentsContainer)})`;

  const commentsData = async () => {
    const commentsContent = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.id);
    commentsContainer.innerHTML = '';
    if (commentsContent !== 0) {
      commentsContent.forEach((comment) => {
        commentsContainer.innerHTML += `
          <li class="individual-comment"><p>${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
      `;
      });
    } else {
      commentsContainer.innerHTML = 'No Comments Yet';
    }

    headingComments.textContent = `Comment(${(0,_counterComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentsContainer)})`;
  };

  commentsData();

  formAddComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = username.value;
    const text = comment.value;
    await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.id, name, text);
    commentsData();
    username.value = '';
    comment.value = '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupComments);


/***/ }),

/***/ "./src/modules/counterCards.js":
/*!*************************************!*\
  !*** ./src/modules/counterCards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getCounterCards = (container) => {
  if (container) {
    return container.childElementCount;
  }
  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCounterCards);

/***/ }),

/***/ "./src/modules/counterComments.js":
/*!****************************************!*\
  !*** ./src/modules/counterComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counterComments = (commentsContainer) => {
  let counter = 0;

  if (commentsContainer) {
    counter = commentsContainer.childElementCount;
  }
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterComments);

/***/ }),

/***/ "./src/modules/createCard.js":
/*!***********************************!*\
  !*** ./src/modules/createCard.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/modules/involvementAPI.js");

// import likeImg from '../img/icons8-heart-32.png';

const likesData = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();

const createCard = (character) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = character.id;

  const img = document.createElement('img');
  img.className = 'card-image';
  img.src = character.image;
  img.alt = character.name;
  card.appendChild(img);

  const container = document.createElement('div');
  container.className = 'container';

  const containerCardTitleLikeBtn = document.createElement('div');
  containerCardTitleLikeBtn.className = 'containerCardTitleLikeBtn';

  const name = document.createElement('h4');
  name.textContent = character.name;
  containerCardTitleLikeBtn.appendChild(name);

  const containerLikes = document.createElement('div');
  containerLikes.className = 'containerLikes';

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');

  const likeButtonImg = document.createElement('div');
  // likeButtonImg.src = likeImg;
  likeButtonImg.classList.add('like-img');

  likeButton.appendChild(likeButtonImg);
  containerLikes.appendChild(likeButton);

  const idIsEqualsTo = (likeObj, idx) => likeObj.item_id === idx;
  const result = likesData.find((obj) => idIsEqualsTo(obj, card.id)) ?? 0;

  const likesNumber = document.createElement('p');
  likesNumber.textContent = `${result.likes ?? 0} Likes`;
  containerLikes.appendChild(likesNumber);
  containerCardTitleLikeBtn.appendChild(containerLikes);
  container.appendChild(containerCardTitleLikeBtn);

  const commentsButton = document.createElement('button');
  commentsButton.classList.add('comments-button');
  commentsButton.textContent = 'Comments';
  container.appendChild(commentsButton);

  const reservationsButton = document.createElement('button');
  reservationsButton.classList.add('reservations-button');
  reservationsButton.textContent = 'Reservations';
  container.appendChild(reservationsButton);

  card.appendChild(container);

  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments?item_id=${id}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   postLike: () => (/* binding */ postLike)
/* harmony export */ });
const postLike = async (id) => {
  const headersList = {
    'Content-Type': 'application/json',
  };
  const bodyContent = JSON.stringify({
    item_id: id,
  });
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/likes/',
    {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    },
  );
  const data = await response.text();
  // console.log(data);
  return data;
};

const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/likes',
  );
  const likesData = await response.json();
  return likesData;
};


/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postComment = async (id, username, commente) => {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment: commente,
      }),
    });
  } catch (error) {
    console.log(error.message);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);


/***/ }),

/***/ "./src/img/icons8-x-50 (1).png":
/*!*************************************!*\
  !*** ./src/img/icons8-x-50 (1).png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons8-x-50 (1).png";

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL21vZHVsZXMvY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jb21tZW50c1BvcHVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NvdW50ZXJDYXJkcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jb3VudGVyQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL21vZHVsZXMvY3JlYXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9nZXRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgZ2V0Q2hhcmFjdGVycyBmcm9tICcuL21vZHVsZXMvY2hhcmFjdGVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVDYXJkLmpzJztcclxuaW1wb3J0IHBvcHVwQ29tbWVudHMgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzUG9wdXAuanMnO1xyXG5pbXBvcnQgeyBwb3N0TGlrZSwgZ2V0TGlrZXMgfSBmcm9tICcuL21vZHVsZXMvaW52b2x2ZW1lbnRBUEkuanMnO1xyXG5pbXBvcnQgZ2V0Q291bnRlckNhcmRzIGZyb20gJy4vbW9kdWxlcy9jb3VudGVyQ2FyZHMuanMnO1xyXG4vLyBpbXBvcnQgZ2V0UmFuZG9tQXJyYXkgZnJvbSAnLi9tb2R1bGVzL3JhbmRvbU51bWJlci5qcyc7XHJcblxyXG5jb25zdCBjb250YWluZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZHMtY29udGFpbmVyJyk7XHJcbmNvbnN0IGNvdW50ZXJDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyLWNhcmRzJyk7XHJcblxyXG5jb25zdCBjaGFyYWN0ZXJzRGF0YSA9IGF3YWl0IGdldENoYXJhY3RlcnMoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdKTtcclxuLy8gY29uc3QgY2hhcmFjdGVyc0RhdGEgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKGdldFJhbmRvbUFycmF5KE1hdGgucmFuZG9tKCkgKiAxMCArIDEpKTtcclxuXHJcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tbWVudHMtYnV0dG9uJykpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGNoYXJhY3RlckRldGFpbCA9IGF3YWl0IGdldENoYXJhY3RlcnMoaWQpO1xyXG4gICAgcG9wdXBDb21tZW50cyhjaGFyYWN0ZXJEZXRhaWwsIGNvbnRhaW5lclBvcHVwKTtcclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlrZS1idXR0b24nKSkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGF3YWl0IHBvc3RMaWtlKGlkKTtcclxuICAgIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgICBjb25zdCBpZElzRXF1YWxzVG8gPSAobGlrZU9iaiwgaWR4KSA9PiBsaWtlT2JqLml0ZW1faWQgPT09IGlkeDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxpa2VzRGF0YS5maW5kKChvYmopID0+IGlkSXNFcXVhbHNUbyhvYmosIGlkKSkgPz8gMDtcclxuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lmxpa2VzID8/IDB9IExpa2VzYDtcclxuICB9XHJcbn0pO1xyXG5cclxuY2hhcmFjdGVyc0RhdGEuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoY2hhcmFjdGVyKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY2FyZHNOdW1iZXIgPSBnZXRDb3VudGVyQ2FyZHMoY29udGFpbmVyKTtcclxuY291bnRlckNhcmRzLnRleHRDb250ZW50ID0gYENoYXJhY3RlcnMgKCR7Y2FyZHNOdW1iZXJ9KWA7XHJcbiIsImNvbnN0IGdldENoYXJhY3RlcnMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gLFxuICApO1xuICBjb25zdCBjaGFyYWN0ZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gY2hhcmFjdGVyRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYXJhY3RlcnM7XG4iLCJpbXBvcnQgcXVpdEljb24gZnJvbSAnLi4vaW1nL2ljb25zOC14LTUwICgxKS5wbmcnO1xyXG5pbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9wb3N0Q29tbWVudC5qcyc7XHJcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldENvbW1lbnRzLmpzJztcclxuaW1wb3J0IGNvdW50ZXJDb21tZW50cyBmcm9tICcuL2NvdW50ZXJDb21tZW50cy5qcyc7XHJcblxyXG5jb25zdCBwb3B1cENvbW1lbnRzID0gKGRhdGEsIGNvbnRhaW5lcikgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaCcpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWdyYWRpZW50Jyk7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1lbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWRpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGFsdD1cInF1aXQgYnV0dG9uXCIgaWQ9XCJxdWl0XCIgY2xhc3M9XCJxdWl0LWJ1dHRvblwiPjxpbWcgc3JjPVwiJHtxdWl0SWNvbn1cIj48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2V9XCI+XHJcbiAgICAgICAgICAgIDxoMT4ke2RhdGEubmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGVzY3JpcHRpb24tZWxlbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDxwPlN0YXR1czogJHtkYXRhLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5TcGVjaWVzOiAke2RhdGEuc3BlY2llc308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5HZW5kZXI6ICR7ZGF0YS5nZW5kZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+T3JpZ2luOiAke2RhdGEub3JpZ2luLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9jYXRpb246ICR7ZGF0YS5sb2NhdGlvbi5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nLWNvbW1lbnRcIj5Db21tZW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1lbGVtZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDI+QWRkIGEgQ29tbWVudDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiY29tbWVudC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZD4gPGJyPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZXh0LWFyZWFcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiBtYXhsZW5ndGg9XCIzMDBcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+IDxicj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uLWNvbW1lbnRcIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb25zdCBxdWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXQnKTtcclxuICBxdWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oJyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZC1ncmFkaWVudCcpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmb3JtQWRkQ29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWZvcm0nKTtcclxuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1hcmVhJyk7XHJcbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtZWxlbWVudHMnKTtcclxuICBjb25zdCBoZWFkaW5nQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZy1jb21tZW50Jyk7XHJcblxyXG4gIGhlYWRpbmdDb21tZW50cy50ZXh0Q29udGVudCA9IGBDb21tZW50KCR7Y291bnRlckNvbW1lbnRzKGNvbW1lbnRzQ29udGFpbmVyKX0pYDtcclxuXHJcbiAgY29uc3QgY29tbWVudHNEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudHNDb250ZW50ID0gYXdhaXQgZ2V0Q29tbWVudHMoZGF0YS5pZCk7XHJcbiAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChjb21tZW50c0NvbnRlbnQgIT09IDApIHtcclxuICAgICAgY29tbWVudHNDb250ZW50LmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwiaW5kaXZpZHVhbC1jb21tZW50XCI+PHA+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvcD48L2xpPlxyXG4gICAgICBgO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdObyBDb21tZW50cyBZZXQnO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRpbmdDb21tZW50cy50ZXh0Q29udGVudCA9IGBDb21tZW50KCR7Y291bnRlckNvbW1lbnRzKGNvbW1lbnRzQ29udGFpbmVyKX0pYDtcclxuICB9O1xyXG5cclxuICBjb21tZW50c0RhdGEoKTtcclxuXHJcbiAgZm9ybUFkZENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZS52YWx1ZTtcclxuICAgIGNvbnN0IHRleHQgPSBjb21tZW50LnZhbHVlO1xyXG4gICAgYXdhaXQgcG9zdENvbW1lbnQoZGF0YS5pZCwgbmFtZSwgdGV4dCk7XHJcbiAgICBjb21tZW50c0RhdGEoKTtcclxuICAgIHVzZXJuYW1lLnZhbHVlID0gJyc7XHJcbiAgICBjb21tZW50LnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3B1cENvbW1lbnRzO1xyXG4iLCJjb25zdCBnZXRDb3VudGVyQ2FyZHMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGlmIChjb250YWluZXIpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q291bnRlckNhcmRzOyIsImNvbnN0IGNvdW50ZXJDb21tZW50cyA9IChjb21tZW50c0NvbnRhaW5lcikgPT4ge1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgaWYgKGNvbW1lbnRzQ29udGFpbmVyKSB7XG4gICAgY291bnRlciA9IGNvbW1lbnRzQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICB9XG4gIHJldHVybiBjb3VudGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlckNvbW1lbnRzOyIsImltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XHJcbi8vIGltcG9ydCBsaWtlSW1nIGZyb20gJy4uL2ltZy9pY29uczgtaGVhcnQtMzIucG5nJztcclxuXHJcbmNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XHJcblxyXG5jb25zdCBjcmVhdGVDYXJkID0gKGNoYXJhY3RlcikgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcclxuICBjYXJkLmlkID0gY2hhcmFjdGVyLmlkO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuY2xhc3NOYW1lID0gJ2NhcmQtaW1hZ2UnO1xyXG4gIGltZy5zcmMgPSBjaGFyYWN0ZXIuaW1hZ2U7XHJcbiAgaW1nLmFsdCA9IGNoYXJhY3Rlci5uYW1lO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG5cclxuICBjb25zdCBjb250YWluZXJDYXJkVGl0bGVMaWtlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bi5jbGFzc05hbWUgPSAnY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bic7XHJcblxyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIG5hbWUudGV4dENvbnRlbnQgPSBjaGFyYWN0ZXIubmFtZTtcclxuICBjb250YWluZXJDYXJkVGl0bGVMaWtlQnRuLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICBjb25zdCBjb250YWluZXJMaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lckxpa2VzLmNsYXNzTmFtZSA9ICdjb250YWluZXJMaWtlcyc7XHJcblxyXG4gIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2UtYnV0dG9uJyk7XHJcblxyXG4gIGNvbnN0IGxpa2VCdXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAvLyBsaWtlQnV0dG9uSW1nLnNyYyA9IGxpa2VJbWc7XHJcbiAgbGlrZUJ1dHRvbkltZy5jbGFzc0xpc3QuYWRkKCdsaWtlLWltZycpO1xyXG5cclxuICBsaWtlQnV0dG9uLmFwcGVuZENoaWxkKGxpa2VCdXR0b25JbWcpO1xyXG4gIGNvbnRhaW5lckxpa2VzLmFwcGVuZENoaWxkKGxpa2VCdXR0b24pO1xyXG5cclxuICBjb25zdCBpZElzRXF1YWxzVG8gPSAobGlrZU9iaiwgaWR4KSA9PiBsaWtlT2JqLml0ZW1faWQgPT09IGlkeDtcclxuICBjb25zdCByZXN1bHQgPSBsaWtlc0RhdGEuZmluZCgob2JqKSA9PiBpZElzRXF1YWxzVG8ob2JqLCBjYXJkLmlkKSkgPz8gMDtcclxuXHJcbiAgY29uc3QgbGlrZXNOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbGlrZXNOdW1iZXIudGV4dENvbnRlbnQgPSBgJHtyZXN1bHQubGlrZXMgPz8gMH0gTGlrZXNgO1xyXG4gIGNvbnRhaW5lckxpa2VzLmFwcGVuZENoaWxkKGxpa2VzTnVtYmVyKTtcclxuICBjb250YWluZXJDYXJkVGl0bGVMaWtlQnRuLmFwcGVuZENoaWxkKGNvbnRhaW5lckxpa2VzKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bik7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29tbWVudHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtYnV0dG9uJyk7XHJcbiAgY29tbWVudHNCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50c0J1dHRvbik7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2VydmF0aW9uc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbnMtYnV0dG9uJyk7XHJcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uc0J1dHRvbik7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xyXG4iLCJjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50cztcbiIsImV4cG9ydCBjb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBoZWFkZXJzTGlzdCA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9O1xuICBjb25zdCBib2R5Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2xpa2VzLycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBib2R5Q29udGVudCxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNMaXN0LFxuICAgIH0sXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveHFIbDk1dml2M0Q2RlJFZFFkM3AvbGlrZXMnLFxuICApO1xuICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsaWtlc0RhdGE7XG59O1xuIiwiY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50ZSkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy94cUhsOTV2aXYzRDZGUkVkUWQzcC9jb21tZW50cycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBjb21tZW50OiBjb21tZW50ZSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmICFxdWV1ZS5kKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IDEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9