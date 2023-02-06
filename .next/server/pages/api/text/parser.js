"use strict";
(() => {
var exports = {};
exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseText)
/* harmony export */ });
function parseText(query) {
    const text = query;
    const slides = [];
    let slide = {
        title: "",
        body: "",
        image: ""
    };
    const lines = text.split("\n");
    for (let line of lines){
        if (line.startsWith("Slide")) {
            if (slide.title !== "") {
                slides.push(slide);
            }
            slide = {
                title: "",
                body: "",
                image: ""
            };
        } else if (line.startsWith("$Title")) {
            slide.title = line.slice(8);
        } else if (line.startsWith("$Body")) {
            slide.body = line.slice(7);
        } else if (line.startsWith("$Image")) {
            slide.image = line.slice(8);
        }
    }
    slides.push(slide);
    return slides;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(872));
module.exports = __webpack_exports__;

})();