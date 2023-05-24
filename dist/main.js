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
  } else if (e.target.classList.contains('like-img')) {
    const { id } = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    await (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__.postLike)(id);
    const likesData = await (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__.getLikes)();
    const idIsEqualsTo = (likeObj, idx) => likeObj.item_id === idx;
    const result = likesData.find((obj) => idIsEqualsTo(obj, id)) ?? 0;
    e.target.parentElement.parentElement.children[1].textContent = `${result.likes ?? 0} Likes`;
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
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");




const popupComments = (data, container) => {
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
                <h2>Comments</h2>
                <ul class="comments-elements">
                </ul>
            </div>
        </div>
        <div class="popup-form-section">
            <h2>Add a Comment</h2>
            <form id="comment-form">
                <input type="text" id="username" name="username" placeholder="Your Name" required> <br>
                <textarea id="text-area" placeholder="Your insights" maxlength="300" name="message" required></textarea> <br>
                <button type="submit" class="button-comment">Comments</button>
            </form>
        </div>
    </div>
    `;
  const quitButton = document.querySelector('#quit');
  quitButton.addEventListener('click', () => {
    container.innerHTML = '';
  });

  const formAddComment = document.getElementById('comment-form');
  const username = document.getElementById('username');
  const comment = document.getElementById('text-area');
  const commentsContainer = document.querySelector('.comments-elements');

  const commentsData = async () => {
    const commentsContent = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.id);
    commentsContainer.innerHTML = '';
    if (commentsContent[0].creation_date) {
      commentsContent.forEach((comment) => {
        commentsContainer.innerHTML += `
          <li><p>${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
      `;
      });
    } else {
      commentsContainer.innerHTML = `<li><p>${commentsContent[0]}</p></li>`;
    }
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
const getCounterCards = (container) => container.childElementCount;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCounterCards);

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
/* harmony import */ var _img_icons8_heart_32_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons8-heart-32.png */ "./src/img/icons8-heart-32.png");
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/modules/involvementAPI.js");



const likesData = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();

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

  const likeButtonImg = document.createElement('img');
  likeButtonImg.src = _img_icons8_heart_32_png__WEBPACK_IMPORTED_MODULE_0__;
  likeButtonImg.classList.add('like-img');

  likeButton.appendChild(likeButtonImg);
  containerLikes.appendChild(likeButton);

  const idIsEqualsTo = (likeObj, idx) => likeObj.item_id === idx;
  const result = likesData.find((obj) => idIsEqualsTo(obj, card.id)) ?? 0;

  const likesNumber = document.createElement('p');
  likesNumber.textContent = `${result.likes ?? 0} Likes`;
  // likesNumber.textContent = '5 Likes';
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

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments?item_id=${id}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    }
    const noComments = ['No comments yet'];
    return noComments;
  } catch (error) {
    alert(error.message);
  }
  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);


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

/***/ "./src/img/icons8-heart-32.png":
/*!*************************************!*\
  !*** ./src/img/icons8-heart-32.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons8-heart-32.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzUG9wdXAuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL21vZHVsZXMvY291bnRlckNhcmRzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL21vZHVsZXMvZmV0Y2hDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdldENoYXJhY3RlcnMgZnJvbSAnLi9tb2R1bGVzL2NoYXJhY3RlcnMuanMnO1xuaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZUNhcmQuanMnO1xuaW1wb3J0IHBvcHVwQ29tbWVudHMgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzUG9wdXAuanMnO1xuaW1wb3J0IHsgcG9zdExpa2UsIGdldExpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCBnZXRDb3VudGVyQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL2NvdW50ZXJDYXJkcy5qcyc7XG4vLyBpbXBvcnQgZ2V0UmFuZG9tQXJyYXkgZnJvbSAnLi9tb2R1bGVzL3JhbmRvbU51bWJlci5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZHMtY29udGFpbmVyJyk7XG5jb25zdCBjb3VudGVyQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlci1jYXJkcycpO1xuXG5jb25zdCBjaGFyYWN0ZXJzRGF0YSA9IGF3YWl0IGdldENoYXJhY3RlcnMoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdKTtcbi8vIGNvbnN0IGNoYXJhY3RlcnNEYXRhID0gYXdhaXQgZ2V0Q2hhcmFjdGVycyhnZXRSYW5kb21BcnJheShNYXRoLnJhbmRvbSgpICogMTAgKyAxKSk7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnRzLWJ1dHRvbicpKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGNoYXJhY3RlckRldGFpbCA9IGF3YWl0IGdldENoYXJhY3RlcnMoaWQpO1xuICAgIHBvcHVwQ29tbWVudHMoY2hhcmFjdGVyRGV0YWlsLCBjb250YWluZXJQb3B1cCk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWtlLWltZycpKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGF3YWl0IHBvc3RMaWtlKGlkKTtcbiAgICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgIGNvbnN0IGlkSXNFcXVhbHNUbyA9IChsaWtlT2JqLCBpZHgpID0+IGxpa2VPYmouaXRlbV9pZCA9PT0gaWR4O1xuICAgIGNvbnN0IHJlc3VsdCA9IGxpa2VzRGF0YS5maW5kKChvYmopID0+IGlkSXNFcXVhbHNUbyhvYmosIGlkKSkgPz8gMDtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBgJHtyZXN1bHQubGlrZXMgPz8gMH0gTGlrZXNgO1xuICB9XG59KTtcblxuY2hhcmFjdGVyc0RhdGEuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGNoYXJhY3Rlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbn0pO1xuXG5jb25zdCBjYXJkc051bWJlciA9IGdldENvdW50ZXJDYXJkcyhjb250YWluZXIpO1xuY291bnRlckNhcmRzLnRleHRDb250ZW50ID0gYENoYXJhY3RlcnMgKCR7Y2FyZHNOdW1iZXJ9KWA7XG4iLCJjb25zdCBnZXRDaGFyYWN0ZXJzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7aWR9YCxcbiAgKTtcbiAgY29uc3QgY2hhcmFjdGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNoYXJhY3RlckRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFyYWN0ZXJzO1xuIiwiaW1wb3J0IHF1aXRJY29uIGZyb20gJy4uL2ltZy9pY29uczgteC01MCAoMSkucG5nJztcbmltcG9ydCBwb3N0Q29tbWVudCBmcm9tICcuL3Bvc3RDb21tZW50LmpzJztcbmltcG9ydCBmZXRjaENvbW1lbnRzIGZyb20gJy4vZmV0Y2hDb21tZW50cy5qcyc7XG5cbmNvbnN0IHBvcHVwQ29tbWVudHMgPSAoZGF0YSwgY29udGFpbmVyKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBvcHVwLWVsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWRpdlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBhbHQ9XCJxdWl0IGJ1dHRvblwiIGlkPVwicXVpdFwiIGNsYXNzPVwicXVpdC1idXR0b25cIj48aW1nIHNyYz1cIiR7cXVpdEljb259XCI+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlfVwiPlxuICAgICAgICAgICAgPGgxPiR7ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGVzY3JpcHRpb24tZWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICA8cD5TdGF0dXM6ICR7ZGF0YS5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlNwZWNpZXM6ICR7ZGF0YS5zcGVjaWVzfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5HZW5kZXI6ICR7ZGF0YS5nZW5kZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDxwPk9yaWdpbjogJHtkYXRhLm9yaWdpbi5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Mb2NhdGlvbjogJHtkYXRhLmxvY2F0aW9uLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMj5Db21tZW50czwvaDI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHMtZWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZm9ybS1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDI+QWRkIGEgQ29tbWVudDwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkPiA8YnI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dC1hcmVhXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbWF4bGVuZ3RoPVwiMzAwXCIgbmFtZT1cIm1lc3NhZ2VcIiByZXF1aXJlZD48L3RleHRhcmVhPiA8YnI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24tY29tbWVudFwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIGNvbnN0IHF1aXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpdCcpO1xuICBxdWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG5cbiAgY29uc3QgZm9ybUFkZENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1mb3JtJyk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1hcmVhJyk7XG4gIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWVsZW1lbnRzJyk7XG5cbiAgY29uc3QgY29tbWVudHNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRzQ29udGVudCA9IGF3YWl0IGZldGNoQ29tbWVudHMoZGF0YS5pZCk7XG4gICAgY29tbWVudHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKGNvbW1lbnRzQ29udGVudFswXS5jcmVhdGlvbl9kYXRlKSB7XG4gICAgICBjb21tZW50c0NvbnRlbnQuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgIDxsaT48cD4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9wPjwvbGk+XG4gICAgICBgO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8bGk+PHA+JHtjb21tZW50c0NvbnRlbnRbMF19PC9wPjwvbGk+YDtcbiAgICB9XG4gIH07XG5cbiAgY29tbWVudHNEYXRhKCk7XG5cbiAgZm9ybUFkZENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlO1xuICAgIGNvbnN0IHRleHQgPSBjb21tZW50LnZhbHVlO1xuICAgIGF3YWl0IHBvc3RDb21tZW50KGRhdGEuaWQsIG5hbWUsIHRleHQpO1xuICAgIGNvbW1lbnRzRGF0YSgpO1xuICAgIHVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVwQ29tbWVudHM7XG4iLCJjb25zdCBnZXRDb3VudGVyQ2FyZHMgPSAoY29udGFpbmVyKSA9PiBjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvdW50ZXJDYXJkczsiLCJpbXBvcnQgbGlrZUltZyBmcm9tICcuLi9pbWcvaWNvbnM4LWhlYXJ0LTMyLnBuZyc7XG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNoYXJhY3RlcikgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICBjYXJkLmlkID0gY2hhcmFjdGVyLmlkO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gJ2NhcmQtaW1hZ2UnO1xuICBpbWcuc3JjID0gY2hhcmFjdGVyLmltYWdlO1xuICBpbWcuYWx0ID0gY2hhcmFjdGVyLm5hbWU7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuXG4gIGNvbnN0IGNvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bi5jbGFzc05hbWUgPSAnY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bic7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBjaGFyYWN0ZXIubmFtZTtcbiAgY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bi5hcHBlbmRDaGlsZChuYW1lKTtcblxuICBjb25zdCBjb250YWluZXJMaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXJMaWtlcy5jbGFzc05hbWUgPSAnY29udGFpbmVyTGlrZXMnO1xuXG4gIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlLWJ1dHRvbicpO1xuXG4gIGNvbnN0IGxpa2VCdXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbGlrZUJ1dHRvbkltZy5zcmMgPSBsaWtlSW1nO1xuICBsaWtlQnV0dG9uSW1nLmNsYXNzTGlzdC5hZGQoJ2xpa2UtaW1nJyk7XG5cbiAgbGlrZUJ1dHRvbi5hcHBlbmRDaGlsZChsaWtlQnV0dG9uSW1nKTtcbiAgY29udGFpbmVyTGlrZXMuYXBwZW5kQ2hpbGQobGlrZUJ1dHRvbik7XG5cbiAgY29uc3QgaWRJc0VxdWFsc1RvID0gKGxpa2VPYmosIGlkeCkgPT4gbGlrZU9iai5pdGVtX2lkID09PSBpZHg7XG4gIGNvbnN0IHJlc3VsdCA9IGxpa2VzRGF0YS5maW5kKChvYmopID0+IGlkSXNFcXVhbHNUbyhvYmosIGNhcmQuaWQpKSA/PyAwO1xuXG4gIGNvbnN0IGxpa2VzTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsaWtlc051bWJlci50ZXh0Q29udGVudCA9IGAke3Jlc3VsdC5saWtlcyA/PyAwfSBMaWtlc2A7XG4gIC8vIGxpa2VzTnVtYmVyLnRleHRDb250ZW50ID0gJzUgTGlrZXMnO1xuICBjb250YWluZXJMaWtlcy5hcHBlbmRDaGlsZChsaWtlc051bWJlcik7XG4gIGNvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4uYXBwZW5kQ2hpbGQoY29udGFpbmVyTGlrZXMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bik7XG5cbiAgY29uc3QgY29tbWVudHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29tbWVudHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtYnV0dG9uJyk7XG4gIGNvbW1lbnRzQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRzQnV0dG9uKTtcblxuICBjb25zdCByZXNlcnZhdGlvbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9ucy1idXR0b24nKTtcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnNCdXR0b24pO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7XG4iLCJjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveHFIbDk1dml2M0Q2RlJFZFFkM3AvY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdCBub0NvbW1lbnRzID0gWydObyBjb21tZW50cyB5ZXQnXTtcbiAgICByZXR1cm4gbm9Db21tZW50cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ29tbWVudHM7XG4iLCJleHBvcnQgY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgaGVhZGVyc0xpc3QgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfTtcbiAgY29uc3QgYm9keUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgaXRlbV9pZDogaWQsXG4gIH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy94cUhsOTV2aXYzRDZGUkVkUWQzcC9saWtlcy8nLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogYm9keUNvbnRlbnQsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzTGlzdCxcbiAgICB9LFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2xpa2VzJyxcbiAgKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbGlrZXNEYXRhO1xufTtcbiIsImNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGlkLCB1c2VybmFtZSwgY29tbWVudGUpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveHFIbDk1dml2M0Q2RlJFZFFkM3AvY29tbWVudHMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY29tbWVudDogY29tbWVudGUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdENvbW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiAhcXVldWUuZCkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAxKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==