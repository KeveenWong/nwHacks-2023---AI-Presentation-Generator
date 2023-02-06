"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190,446];
exports.modules = {

/***/ 118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateText": () => (/* binding */ generateText)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openai_token_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);


const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
    apiKey: _openai_token_json__WEBPACK_IMPORTED_MODULE_1__/* .token */ .r
});
const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
async function generateText(prompt) {
    try {
        console.log(prompt);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            max_tokens: 1500,
            temperature: 0.7,
            top_p: 1,
            prompt
        });
        // check if the request was successful
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        // console.log(response.data);
        return response.data.choices[0].text;
    } catch (err) {
        console.log(err);
        return "";
    }
}


/***/ }),

/***/ 31:
/***/ ((module) => {

module.exports = JSON.parse('{"r":"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"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(215));
module.exports = __webpack_exports__;

})();