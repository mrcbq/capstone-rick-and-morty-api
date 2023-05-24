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
/* harmony import */ var _modules_randomNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/randomNumber.js */ "./src/modules/randomNumber.js");
/* harmony import */ var _modules_counterCards_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/counterCards.js */ "./src/modules/counterCards.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_createCard_js__WEBPACK_IMPORTED_MODULE_2__]);
_modules_createCard_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const containerPopup = document.querySelector('.popup');
const container = document.getElementById('cards-container');
const counterCards = document.getElementById('counter-cards');

// const charactersData = await getCharacters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
const charactersData = await (0,_modules_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_modules_randomNumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.random() * 10 + 1));

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

const cardsNumber = (0,_modules_counterCards_js__WEBPACK_IMPORTED_MODULE_6__["default"])(container);
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

/***/ "./src/modules/randomNumber.js":
/*!*************************************!*\
  !*** ./src/modules/randomNumber.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRandomInt = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const getRandomArray = (numOfRandoms) => {
  const randomArray = [];
  for (let random = 0; random < numOfRandoms; random += 1) {
    randomArray.push(getRandomInt(1, 826));
  }
  return randomArray;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomArray);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzUG9wdXAuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL21vZHVsZXMvY291bnRlckNhcmRzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpLy4vc3JjL21vZHVsZXMvZmV0Y2hDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9yYW5kb21OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcmljay1hbmQtbW9ydHktYXBpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnZXRDaGFyYWN0ZXJzIGZyb20gJy4vbW9kdWxlcy9jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVDYXJkLmpzJztcbmltcG9ydCBwb3B1cENvbW1lbnRzIGZyb20gJy4vbW9kdWxlcy9jb21tZW50c1BvcHVwLmpzJztcbmltcG9ydCB7IHBvc3RMaWtlLCBnZXRMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgZ2V0UmFuZG9tQXJyYXkgZnJvbSAnLi9tb2R1bGVzL3JhbmRvbU51bWJlci5qcyc7XG5pbXBvcnQgZ2V0Q291bnRlckNhcmRzIGZyb20gJy4vbW9kdWxlcy9jb3VudGVyQ2FyZHMuanMnO1xuXG5jb25zdCBjb250YWluZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRzLWNvbnRhaW5lcicpO1xuY29uc3QgY291bnRlckNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZXItY2FyZHMnKTtcblxuLy8gY29uc3QgY2hhcmFjdGVyc0RhdGEgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1XSk7XG5jb25zdCBjaGFyYWN0ZXJzRGF0YSA9IGF3YWl0IGdldENoYXJhY3RlcnMoZ2V0UmFuZG9tQXJyYXkoTWF0aC5yYW5kb20oKSAqIDEwICsgMSkpO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50cy1idXR0b24nKSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBjaGFyYWN0ZXJEZXRhaWwgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKGlkKTtcbiAgICBwb3B1cENvbW1lbnRzKGNoYXJhY3RlckRldGFpbCwgY29udGFpbmVyUG9wdXApO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlrZS1pbWcnKSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBhd2FpdCBwb3N0TGlrZShpZCk7XG4gICAgY29uc3QgbGlrZXNEYXRhID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgICBjb25zdCBpZElzRXF1YWxzVG8gPSAobGlrZU9iaiwgaWR4KSA9PiBsaWtlT2JqLml0ZW1faWQgPT09IGlkeDtcbiAgICBjb25zdCByZXN1bHQgPSBsaWtlc0RhdGEuZmluZCgob2JqKSA9PiBpZElzRXF1YWxzVG8ob2JqLCBpZCkpID8/IDA7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lmxpa2VzID8/IDB9IExpa2VzYDtcbiAgfVxufSk7XG5cbmNoYXJhY3RlcnNEYXRhLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChjaGFyYWN0ZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG59KTtcblxuY29uc3QgY2FyZHNOdW1iZXIgPSBnZXRDb3VudGVyQ2FyZHMoY29udGFpbmVyKTtcbmNvdW50ZXJDYXJkcy50ZXh0Q29udGVudCA9IGBDaGFyYWN0ZXJzICgke2NhcmRzTnVtYmVyfSlgO1xuIiwiY29uc3QgZ2V0Q2hhcmFjdGVycyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2lkfWAsXG4gICk7XG4gIGNvbnN0IGNoYXJhY3RlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjaGFyYWN0ZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhcmFjdGVycztcbiIsImltcG9ydCBxdWl0SWNvbiBmcm9tICcuLi9pbWcvaWNvbnM4LXgtNTAgKDEpLnBuZyc7XG5pbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9wb3N0Q29tbWVudC5qcyc7XG5pbXBvcnQgZmV0Y2hDb21tZW50cyBmcm9tICcuL2ZldGNoQ29tbWVudHMuanMnO1xuXG5jb25zdCBwb3B1cENvbW1lbnRzID0gKGRhdGEsIGNvbnRhaW5lcikgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1lbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1kaXZcIj5cbiAgICAgICAgICAgIDxidXR0b24gYWx0PVwicXVpdCBidXR0b25cIiBpZD1cInF1aXRcIiBjbGFzcz1cInF1aXQtYnV0dG9uXCI+PGltZyBzcmM9XCIke3F1aXRJY29ufVwiPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZX1cIj5cbiAgICAgICAgICAgIDxoMT4ke2RhdGEubmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWRlc2NyaXB0aW9uLWVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPHA+U3RhdHVzOiAke2RhdGEuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5TcGVjaWVzOiAke2RhdGEuc3BlY2llc308L3A+XG4gICAgICAgICAgICAgICAgPHA+R2VuZGVyOiAke2RhdGEuZ2VuZGVyfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5PcmlnaW46ICR7ZGF0YS5vcmlnaW4ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+TG9jYXRpb246ICR7ZGF0YS5sb2NhdGlvbi5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDI+Q29tbWVudHM8L2gyPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWZvcm0tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGgyPkFkZCBhIENvbW1lbnQ8L2gyPlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZD4gPGJyPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHQtYXJlYVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIG1heGxlbmd0aD1cIjMwMFwiIG5hbWU9XCJtZXNzYWdlXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT4gPGJyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uLWNvbW1lbnRcIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICBjb25zdCBxdWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXQnKTtcbiAgcXVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1BZGRDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtZm9ybScpO1xuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtYXJlYScpO1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1lbGVtZW50cycpO1xuXG4gIGNvbnN0IGNvbW1lbnRzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb21tZW50c0NvbnRlbnQgPSBhd2FpdCBmZXRjaENvbW1lbnRzKGRhdGEuaWQpO1xuICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChjb21tZW50c0NvbnRlbnRbMF0uY3JlYXRpb25fZGF0ZSkge1xuICAgICAgY29tbWVudHNDb250ZW50LmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgY29tbWVudHNDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICA8bGk+PHA+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvcD48L2xpPlxuICAgICAgYDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGxpPjxwPiR7Y29tbWVudHNDb250ZW50WzBdfTwvcD48L2xpPmA7XG4gICAgfVxuICB9O1xuXG4gIGNvbW1lbnRzRGF0YSgpO1xuXG4gIGZvcm1BZGRDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZS52YWx1ZTtcbiAgICBjb25zdCB0ZXh0ID0gY29tbWVudC52YWx1ZTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudChkYXRhLmlkLCBuYW1lLCB0ZXh0KTtcbiAgICBjb21tZW50c0RhdGEoKTtcbiAgICB1c2VybmFtZS52YWx1ZSA9ICcnO1xuICAgIGNvbW1lbnQudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3B1cENvbW1lbnRzO1xuIiwiY29uc3QgZ2V0Q291bnRlckNhcmRzID0gKGNvbnRhaW5lcikgPT4gY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb3VudGVyQ2FyZHM7IiwiaW1wb3J0IGxpa2VJbWcgZnJvbSAnLi4vaW1nL2ljb25zOC1oZWFydC0zMi5wbmcnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcblxuY29uc3QgbGlrZXNEYXRhID0gYXdhaXQgZ2V0TGlrZXMoKTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChjaGFyYWN0ZXIpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgY2FyZC5pZCA9IGNoYXJhY3Rlci5pZDtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTmFtZSA9ICdjYXJkLWltYWdlJztcbiAgaW1nLnNyYyA9IGNoYXJhY3Rlci5pbWFnZTtcbiAgaW1nLmFsdCA9IGNoYXJhY3Rlci5uYW1lO1xuICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcblxuICBjb25zdCBjb250YWluZXJDYXJkVGl0bGVMaWtlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4uY2xhc3NOYW1lID0gJ2NvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4nO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBuYW1lLnRleHRDb250ZW50ID0gY2hhcmFjdGVyLm5hbWU7XG4gIGNvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4uYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgY29uc3QgY29udGFpbmVyTGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyTGlrZXMuY2xhc3NOYW1lID0gJ2NvbnRhaW5lckxpa2VzJztcblxuICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxpa2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnbGlrZS1idXR0b24nKTtcblxuICBjb25zdCBsaWtlQnV0dG9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxpa2VCdXR0b25JbWcuc3JjID0gbGlrZUltZztcbiAgbGlrZUJ1dHRvbkltZy5jbGFzc0xpc3QuYWRkKCdsaWtlLWltZycpO1xuXG4gIGxpa2VCdXR0b24uYXBwZW5kQ2hpbGQobGlrZUJ1dHRvbkltZyk7XG4gIGNvbnRhaW5lckxpa2VzLmFwcGVuZENoaWxkKGxpa2VCdXR0b24pO1xuXG4gIGNvbnN0IGlkSXNFcXVhbHNUbyA9IChsaWtlT2JqLCBpZHgpID0+IGxpa2VPYmouaXRlbV9pZCA9PT0gaWR4O1xuICBjb25zdCByZXN1bHQgPSBsaWtlc0RhdGEuZmluZCgob2JqKSA9PiBpZElzRXF1YWxzVG8ob2JqLCBjYXJkLmlkKSkgPz8gMDtcblxuICBjb25zdCBsaWtlc051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGlrZXNOdW1iZXIudGV4dENvbnRlbnQgPSBgJHtyZXN1bHQubGlrZXMgPz8gMH0gTGlrZXNgO1xuICAvLyBsaWtlc051bWJlci50ZXh0Q29udGVudCA9ICc1IExpa2VzJztcbiAgY29udGFpbmVyTGlrZXMuYXBwZW5kQ2hpbGQobGlrZXNOdW1iZXIpO1xuICBjb250YWluZXJDYXJkVGl0bGVMaWtlQnRuLmFwcGVuZENoaWxkKGNvbnRhaW5lckxpa2VzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4pO1xuXG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbW1lbnRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzLWJ1dHRvbicpO1xuICBjb21tZW50c0J1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50c0J1dHRvbik7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2VydmF0aW9uc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbnMtYnV0dG9uJyk7XG4gIHJlc2VydmF0aW9uc0J1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbnMnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zQnV0dG9uKTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuIiwiY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY29uc3Qgbm9Db21tZW50cyA9IFsnTm8gY29tbWVudHMgeWV0J107XG4gICAgcmV0dXJuIG5vQ29tbWVudHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaENvbW1lbnRzO1xuIiwiZXhwb3J0IGNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGhlYWRlcnNMaXN0ID0ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH07XG4gIGNvbnN0IGJvZHlDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIGl0ZW1faWQ6IGlkLFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveHFIbDk1dml2M0Q2RlJFZFFkM3AvbGlrZXMvJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGJvZHlDb250ZW50LFxuICAgICAgaGVhZGVyczogaGVhZGVyc0xpc3QsXG4gICAgfSxcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy94cUhsOTV2aXYzRDZGUkVkUWQzcC9saWtlcycsXG4gICk7XG4gIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGxpa2VzRGF0YTtcbn07XG4iLCJjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnRlKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2NvbW1lbnRzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRlLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50O1xuIiwiY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiB7XG4gIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIHJldHVybiByYW5kb21OdW1iZXI7XG59O1xuXG5jb25zdCBnZXRSYW5kb21BcnJheSA9IChudW1PZlJhbmRvbXMpID0+IHtcbiAgY29uc3QgcmFuZG9tQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgcmFuZG9tID0gMDsgcmFuZG9tIDwgbnVtT2ZSYW5kb21zOyByYW5kb20gKz0gMSkge1xuICAgIHJhbmRvbUFycmF5LnB1c2goZ2V0UmFuZG9tSW50KDEsIDgyNikpO1xuICB9XG4gIHJldHVybiByYW5kb21BcnJheTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbUFycmF5O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgIXF1ZXVlLmQpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=