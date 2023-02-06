"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DalleAPI": () => (/* binding */ DalleAPI)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openai_token_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);


const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
    apiKey: _openai_token_json__WEBPACK_IMPORTED_MODULE_1__/* .token */ .r
});
const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
const DalleAPI = {
    generateImage: async (prompt)=>{
        try {
            const response = await openai.createImage({
                prompt: prompt + ". No Text.",
                n: 1,
                size: "512x512"
            });
            // console.log(response.data.data)
            const urlData = response.data.data[0].url;
            // console.log(urlData);
            // check if the request was successful
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return urlData;
        } catch (err) {
            // console.log(err);
            return "";
        }
    }
};


/***/ }),

/***/ 31:
/***/ ((module) => {

module.exports = JSON.parse('{"r":"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"}');

/***/ })

};
;