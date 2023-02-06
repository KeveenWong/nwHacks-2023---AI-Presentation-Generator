"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565,446,924];
exports.modules = {

/***/ 118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "googleapis"
const external_googleapis_namespaceObject = require("googleapis");
;// CONCATENATED MODULE: ./service_account.json
const service_account_namespaceObject = JSON.parse('{"Bq":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCxVTXZ0hC4n6/m\\nadyvO59olw2p0bDAGTAhcjorZWmIr8SXcP18uziel0eOx2M2nhMchEhRW23NdDiz\\nz+bsFclpp3BnNaYgDRdiwC3ojS1Sk2+jLPPGoxPEXwicsgqILrBdX5BmYbymSvKs\\nA9Lm8T0LC1VqUn4lx2ksF4nRMrJoa8BCrDrtEKANSBsVZWnhooDGmxoc9f951809\\nlR/Dnmh6Z7ZPLC8tMX08pZybAOh70SeBwBz948W/AxE0MQw+p2S1ymYTwd1l6j5B\\nMPVdGgMtiGPP2E1Bz8bJu2dEsmdM0b/nZjw7jSnYUHRStgEqSDUZStb1YIL8wRuH\\nB4GE/KujAgMBAAECggEAUizT5wvWrs9lAkelOdjNvnhdHwgqOWKSsLUPqqN0e6BD\\n4A++j6nsi2U8Bjh0S8+FuK2+G2FcaRxF2GFrt5RDAQBT8KfmQyz93MeEnqKpUX47\\n+egvUSmp09JcGczRX5kPJj3OGvuIoaDSgo7FETrSGEeYvcvbZCNbo9CGj1hIX2Vj\\nQBSCqRVCUzHokTtkAjAPkSoYDMA4TOZhPJn9OFZKonzfE41EgavF/Fhaa3ICFzyZ\\naIs+9uP24jabP2xhC9HROiTV4nR1bFChtW6AIlZLzByvggzjzBZRCgyeMRFX2ZIh\\nK9F0JiKQxanuFA5lKwzkGuzZJIT8fdVEGL0v/nmtUQKBgQD5m2ogFNOxrLQ7YUpM\\nkSwCMcwKmbTjQxrdGKCwDt+cSMRHqtUGGaR0vj1ZAT1/0ZR1QcB4Vft98ar0uVkt\\nHUzY4BIva7q0IgWNB8yZw/3kVoYMd652Frp5vieNL/5Ro0qQIFk2ufjYTg5osJLW\\nMlKSgIBMzj4RDbY/gTDgE8dm8QKBgQC13+tQBpJNQpzrs6as+Cec+NPsMK5I2e14\\nRc1/a4wsqKrQ3yZ3hq/uFlvmY4lxaapaxHADQC25hNilDfVMnYRunCzNQ5Mnwhug\\nkA7qbdd9kCR0U8fssox2slIC22hkfL8Y970Y7mTkAmGKTtQpDjiqUMuM9gTYQK8s\\nGmVExE4D0wKBgEHEhW32juDd1I9gzybliWb6n/ybC2JmKAnhl1VMVfbj5XPMu1xk\\nHUT1a0ysWvv2yNsse/45CY7hwl3BCJIuijUKtT/xbrxPyo6iY3KQhbFIawGV903+\\nJxw00k8NOkFgeSEIpPkaf0rfJkTHYak2kTMw0J1sKkZsCn0pGSuxinTBAoGAEqHf\\n/5DMyDF81gDPoITDuicbvuS11izNUTcFeHpSH/kflsplrHUV7PRJce7ck8vZcfcR\\n6qNWi9z6PN6TNMgmWxaQ2G6F0trl7asUfBvIqcpskaZLowofrcFS+Yv0w+arxSkM\\nLFOv7lP4Hi05OwOD9p7UW5qQoH7v8zq5CTR7MZUCgYASt4DZWJ9AtkArpbkrAzRv\\ncbIclXM87DjZd9ql1jWO8WRodmmbaZgzW/gMunhwGR0grQzVeanM6a5BE/9nW/g6\\nT1FwcaglSLFm4H/6MhVFd7PVgN9ZhylQ/1Kx+hNSTPVwjYWHmNJppsgKZVOqsjZq\\nA3TtHLGZzimwITBEYVamRw==\\n-----END PRIVATE KEY-----\\n","yR":"bot-546@aislides-375422.iam.gserviceaccount.com"}');
;// CONCATENATED MODULE: ./util/googleslides.ts


// If modifying these scopes, delete token.json.
const SCOPES = (/* unused pure expression or super */ null && ([
    "https://www.googleapis.com/auth/presentations.readonly"
]));
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const auth = new external_googleapis_namespaceObject.google.auth.JWT({
    email: service_account_namespaceObject.yR,
    key: service_account_namespaceObject.Bq,
    scopes: [
        "https://www.googleapis.com/auth/presentations",
        "https://www.googleapis.com/auth/drive"
    ]
});
const slides_service = external_googleapis_namespaceObject.google.slides({
    version: "v1",
    auth
});
const drive_service = external_googleapis_namespaceObject.google.drive({
    version: "v3",
    auth
});
async function createPresentation(title, pages) {
    try {
        const presentation = await slides_service.presentations.create({
            title,
            slides: []
        });
        // console.log((presentation.data as any).slides[0].objectId)
        let requests = [
            // {
            //     createSlide: {
            //         slideLayoutReference: {
            //             predefinedLayout: 'TITLE_ONLY'
            //         },
            //         "placeholderIdMappings": [
            //             {
            //                 "layoutPlaceholder": {
            //                     "type": "TITLE",
            //                     "index": 0
            //                 },
            //                 "objectId": "MAIN_TITLE",
            //             },
            //             {
            //                 "layoutPlaceholder": {
            //                     "type": "SUBTITLE",
            //                     "index": 0
            //                 },
            //                 "objectId": "MAIN_CAPTION",
            //             }
            //         ],
            //     }
            // },
            // {
            //     insertText: {
            //         objectId: "MAIN_TITLE",
            //         text: "A Presentation by us :)"
            //     }
            // },
            // {
            //     insertText: {
            //         objectId: "MAIN_CAPTION",
            //         text: "This is a test presentation"
            //     }
            // },
            {
                deleteObject: {
                    objectId: presentation.data.slides[0].objectId
                }
            }
        ];
        for (const [title, text, imageUrl] of pages){
            // Random uuid
            const pageId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const titleId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const textId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const notesId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            // create a title page
            requests = [
                ...requests,
                //     {
                //     createSlide: {
                //         slideLayoutReference: { predefinedLayout: 'TITLE' }, placeholderIdMappings: [{ placeholder: { type: 'TITLE', }, objectId: 'title', },],
                //     },
                // },
                // create a two-column slide
                {
                    createSlide: {
                        objectId: pageId,
                        slideLayoutReference: {
                            predefinedLayout: "ONE_COLUMN_TEXT"
                        },
                        "placeholderIdMappings": [
                            {
                                "layoutPlaceholder": {
                                    "type": "TITLE",
                                    "index": 0
                                },
                                "objectId": titleId
                            },
                            {
                                "layoutPlaceholder": {
                                    "type": "BODY",
                                    "index": 0
                                },
                                "objectId": textId
                            }
                        ]
                    }
                },
                // Insert the title
                {
                    insertText: {
                        objectId: titleId,
                        text: title
                    }
                },
                // Insert the text
                {
                    insertText: {
                        objectId: textId,
                        insertionIndex: 0,
                        text: text
                    }
                },
                {
                    updatePageProperties: {
                        objectId: pageId,
                        pageProperties: {
                            pageBackgroundFill: {
                                solidFill: {
                                    color: {
                                        rgbColor: {
                                            red: 245 / 255,
                                            green: 245 / 255,
                                            blue: 245 / 255
                                        }
                                    }
                                }
                            }
                        },
                        fields: "pageBackgroundFill.solidFill.color"
                    }
                }
            ];
            if (imageUrl != "") {
                requests.push({
                    createImage: {
                        elementProperties: {
                            pageObjectId: pageId,
                            size: {
                                width: {
                                    magnitude: 300,
                                    unit: "PT"
                                },
                                height: {
                                    magnitude: 300,
                                    unit: "PT"
                                }
                            },
                            // Put on right side of slide
                            transform: {
                                scaleX: 1,
                                scaleY: 1,
                                translateX: 300,
                                translateY: 0,
                                unit: "PT"
                            }
                        },
                        url: imageUrl
                    }
                });
            }
        // execute the requests
        }
        const body = {
            requests
        };
        const response = await slides_service.presentations.batchUpdate({
            presentationId: presentation.data.presentationId,
            resource: body
        });
        // share presentation with anyone with link
        await drive_service.permissions.create({
            fileId: presentation.data.presentationId,
            requestBody: {
                role: "reader",
                type: "anyone",
                allowFileDiscovery: false
            }
        });
        // return presentation link
        return [
            `https://docs.google.com/presentation/d/${presentation.data.presentationId}/edit`,
            presentation.data.presentationId
        ];
    } catch (err) {
        // TODO (developer) - Handle exception
        throw err;
    }
}
async function createTwoColumnSlide(presentationId, text, imageUrl) {
    // Create a new slide
    const requests = [
        {
            createSlide: {
                slideLayoutReference: {
                    predefinedLayout: "TITLE_AND_TWO_COLUMNS"
                }
            }
        }
    ];
    const body = {
        requests
    };
    const response = await slides_service.presentations.batchUpdate({
        presentationId,
        resource: body
    });
    // Get the slide ID
    const slideId = response.data.replies[0].createSlide.objectId;
    // Add text to the first column
    requests.push({
        insertText: {
            objectId: slideId,
            text: text
        }
    });
    // Add an image to the second column
    requests.push({
        createImage: {
            objectId: slideId,
            url: imageUrl,
            elementProperties: {
                pageObjectId: slideId,
                size: {
                    width: {
                        magnitude: 400,
                        unit: "PT"
                    },
                    height: {
                        magnitude: 300,
                        unit: "PT"
                    }
                },
                transform: {
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 400,
                    translateY: 0,
                    unit: "PT"
                }
            }
        }
    });
    await slides_service.presentations.batchUpdate({
        presentationId,
        resource: {
            requests
        }
    });
}

// EXTERNAL MODULE: ./pages/api/images/generate.ts
var generate = __webpack_require__(720);
// EXTERNAL MODULE: ./pages/api/text/generateText.ts
var generateText = __webpack_require__(215);
// EXTERNAL MODULE: ./pages/api/text/parser.ts
var parser = __webpack_require__(872);
;// CONCATENATED MODULE: ./pages/api/generate.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




async function handler(req, res) {
    const data = req.query;
    const prompt = `I want to make a slideshow presentation titled ${data.title}. The slideshow should be about the following: ${data.topics}. Keywords that should be included are: ${data.keywords}. Can you please generate ${data.nslides} slides worth of presentable content, each slide containing the following parameters:

- A title 
- A body paragraph for the current slide
- A description of a good image to use for the current slide

Can you format these parameters to be in the format of the following so I can automate the creation of the slides:
$Title: __
$Body: __
$Image: __

There should be an intro slide and a conclusion slide.`;
    const text = await (0,generateText.generateText)(prompt);
    const data2 = (0,parser["default"])(text);
    const [link, id] = await createPresentation(data.title, await Promise.all(data2.map(async (d)=>[
            d.title,
            d.body,
            await generate.DalleAPI.generateImage(d.image)
        ])));
    return res.json({
        link
    });
}


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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [720], () => (__webpack_exec__(846)));
module.exports = __webpack_exports__;

})();