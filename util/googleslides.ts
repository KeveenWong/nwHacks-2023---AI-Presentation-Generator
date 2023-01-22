import { promises as fs } from 'fs';
import path from 'path';
import process from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google, slides_v1 } from 'googleapis';
import { GoogleAuth, OAuth2Client } from 'google-auth-library';
import service_account from '../service_account.json';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/presentations.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.

const auth = new google.auth.JWT({
    email: service_account.client_email,
    key: service_account.private_key,
    scopes: ["https://www.googleapis.com/auth/presentations", "https://www.googleapis.com/auth/drive"]
});
const slides_service = google.slides({ version: 'v1', auth });
const drive_service = google.drive({ version: 'v3', auth });

export async function createPresentation(title: string, pages: [string, string, string][]) {

    try {
        const presentation = await slides_service.presentations.create({
            title,
            slides: [
                // Page with the title "TITLE"
                
            ],
        } as any);
        // console.log((presentation.data as any).slides[0].objectId)
        let requests: any[] = [
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
                    objectId: (presentation.data as any).slides[0].objectId
                },
            }
        ];
        for (const [title, text, imageUrl] of pages) {
            // Random uuid
            const pageId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const titleId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const textId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const notesId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            // create a title page
            requests = [...requests,
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
                        predefinedLayout: 'ONE_COLUMN_TEXT'
                    },
                    "placeholderIdMappings": [
                        {
                            "layoutPlaceholder": {
                                "type": "TITLE",
                                "index": 0
                            },
                            "objectId": titleId,
                        },
                        {
                            "layoutPlaceholder": {
                                "type": "BODY",
                                "index": 0
                            },
                            "objectId": textId,
                        }
                    ],

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
            }
            // Insert the image
            ];
            if(imageUrl != "") {
                requests.push({
                    createImage: {
                        elementProperties: {
                            pageObjectId: pageId,
                            size: {
                                width: {
                                    magnitude: 300,
                                    unit: 'PT'
                                },
                                height: {
                                    magnitude: 300,
                                    unit: 'PT'
                                }
                            },
                            // Put on right side of slide
                            transform: {
                                scaleX: 1,
                                scaleY: 1,
                                translateX: 300,
                                translateY: 0,
                                unit: 'PT'
                            }
                        },
                        url: imageUrl
                    }
                })
            }

            // execute the requests
        }
        const body = { requests };
        const response = await slides_service.presentations.batchUpdate({ presentationId: presentation.data.presentationId, resource: body } as any);
        // share presentation with anyone with link
        await drive_service.permissions.create({
            fileId: presentation.data.presentationId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
                allowFileDiscovery: false
            }
        } as any);
        // return presentation link
        return [`https://docs.google.com/presentation/d/${presentation.data.presentationId}/edit`, presentation.data.presentationId];
    } catch (err) {
        // TODO (developer) - Handle exception
        throw err;
    }
}

export async function createTwoColumnSlide(presentationId: string, text: string, imageUrl: string) {
    // Create a new slide
    const requests = [
        {
            createSlide: {
                slideLayoutReference: {
                    predefinedLayout: 'TITLE_AND_TWO_COLUMNS'
                }
            }
        }
    ];
    const body = { requests };
    const response = await slides_service.presentations.batchUpdate({ presentationId, resource: body } as any);

    // Get the slide ID
    const slideId = (response.data as any).replies[0].createSlide.objectId;

    // Add text to the first column
    requests.push({
        insertText: {
            objectId: slideId,
            text: text
        }
    } as any);

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
                        unit: 'PT'
                    },
                    height: {
                        magnitude: 300,
                        unit: 'PT'
                    }
                },
                transform: {
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 400,
                    translateY: 0,
                    unit: 'PT'
                }
            }
        }
    } as any);
    await slides_service.presentations.batchUpdate({ presentationId, resource: { requests } } as any);
}