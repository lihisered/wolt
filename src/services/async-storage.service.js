export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || restaurants
    return Promise.resolve(entities)
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity._id === entityId) || null
}

async function post(entityType, newEntity) {
    newEntity._id = _makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function postMany(entityType, newEntities) {
    const entities = await query(entityType)
    newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
    entities.push(...newEntities)
    _save(entityType, entities)
    return entities
}

async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
}

async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
    return entities
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

const restaurants = [
    {
        "results": [
            {
                "active_menu": {
                    "$oid": "5bf263eac84cb9000b25a385"
                },
                "address": "Rav Aluf David Elazar St 16",
                "alive": 1,
                "allowed_payment_methods": [
                    "card"
                ],
                "always_available": false,
                "b2b_recommended": true,
                "bank_account_type": "IBAN",
                "cart_view_enabled": false,
                "categories": [
                    {
                        "link_slug": "category-dessert:tel aviv",
                        "name": "קינוח",
                        "primary": true,
                        "slug": "dessert"
                    },
                    {
                        "link_slug": "category-ice_cream:tel aviv",
                        "name": "גלידות",
                        "primary": false,
                        "slug": "ice_cream"
                    }
                ],
                "city": "Tel Aviv",
                "city_id": "5bc0905a63cca509a71168ee",
                "comment_disabled": false,
                "completion_estimates": {
                    "delivery": "20-40",
                    "delivery_rush": "20-40",
                    "normal": "10-30",
                    "order_estimates_in_use": true,
                    "rush": "10-30"
                },
                "country": "ISR",
                "currency": "ILS",
                "customer_support_phone": "",
                "delivery_methods": [
                    "homedelivery",
                    "takeaway"
                ],
                "delivery_specs": {
                    "courier_restrictions": 2,
                    "custom_geo_range": null,
                    "delivery_enabled": true,
                    "delivery_pricing": {
                        "base_price": 1000,
                        "distance_ranges": [
                            {
                                "a": 0,
                                "b": 0,
                                "max": 1000,
                                "min": 0
                            },
                            {
                                "a": 200,
                                "b": 0,
                                "max": 2000,
                                "min": 1000
                            },
                            {
                                "a": 400,
                                "b": 0,
                                "max": 3000,
                                "min": 2000
                            },
                            {
                                "a": 600,
                                "b": 0,
                                "max": 4000,
                                "min": 3000
                            },
                            {
                                "a": 800,
                                "b": 0,
                                "max": 0,
                                "min": 4000
                            }
                        ],
                        "meta": {},
                        "price_multiplier": 1,
                        "price_ranges": [
                            {
                                "a": 5000,
                                "b": -1,
                                "max": 5000,
                                "min": 0
                            },
                            {
                                "a": 0,
                                "b": 0,
                                "max": 0,
                                "min": 5000
                            }
                        ],
                        "tax": 0.17
                    },
                    "delivery_times": {
                        "friday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 3600000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            }
                        ],
                        "monday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ],
                        "saturday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 3600000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            }
                        ],
                        "sunday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 3600000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ],
                        "thursday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            }
                        ],
                        "tuesday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ],
                        "wednesday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 32400000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ]
                    },
                    "forbidden_capabilities": [
                        "COURIER_ID_113093"
                    ],
                    "geo_range": {
                        "coordinates": [
                            [
                                [
                                    34.77741612574977,
                                    32.116281057230076
                                ],
                                [
                                    34.777641353546144,
                                    32.11633895446672
                                ],
                                [
                                    34.78799879550934,
                                    32.11720338628594
                                ],
                                [
                                    34.79835623747251,
                                    32.11633895446672
                                ],
                                [
                                    34.80831507929357,
                                    32.11377892665985
                                ],
                                [
                                    34.81749212572013,
                                    32.109621820026334
                                ],
                                [
                                    34.825534385973974,
                                    32.10402759440008
                                ],
                                [
                                    34.83213268803688,
                                    32.097211473898916
                                ],
                                [
                                    34.837033576973326,
                                    32.089435639196225
                                ],
                                [
                                    34.840049037490736,
                                    32.080999115339054
                                ],
                                [
                                    34.84106366984576,
                                    32.072226249321915
                                ],
                                [
                                    34.84066360399441,
                                    32.06880118333163
                                ],
                                [
                                    34.83738899230957,
                                    32.06468296913311
                                ],
                                [
                                    34.8361873626709,
                                    32.06177343653572
                                ],
                                [
                                    34.83515757052328,
                                    32.05789920149451
                                ],
                                [
                                    34.83491378827151,
                                    32.05564679452172
                                ],
                                [
                                    34.836434653398456,
                                    32.054100599091065
                                ],
                                [
                                    34.83632373117251,
                                    32.05392489197784
                                ],
                                [
                                    34.83483610440007,
                                    32.05540163118499
                                ],
                                [
                                    34.834041595458984,
                                    32.05457194538034
                                ],
                                [
                                    34.83365535736084,
                                    32.0543173368335
                                ],
                                [
                                    34.83314037322997,
                                    32.053735371780334
                                ],
                                [
                                    34.8315954208374,
                                    32.051116483236456
                                ],
                                [
                                    34.83146959817191,
                                    32.050645067235465
                                ],
                                [
                                    34.831267002057785,
                                    32.050243773060636
                                ],
                                [
                                    34.830858336969605,
                                    32.049330020825394
                                ],
                                [
                                    34.830531060395685,
                                    32.04861222436787
                                ],
                                [
                                    34.830632307901254,
                                    32.04828890339263
                                ],
                                [
                                    34.832347190674135,
                                    32.047625825711904
                                ],
                                [
                                    34.8323347971424,
                                    32.04760619365292
                                ],
                                [
                                    34.83062971251374,
                                    32.04827891007426
                                ],
                                [
                                    34.83020378382014,
                                    32.04789442228018
                                ],
                                [
                                    34.82970225588295,
                                    32.046580317679535
                                ],
                                [
                                    34.829488320537116,
                                    32.04454358871322
                                ],
                                [
                                    34.8255082898201,
                                    32.0404359609076
                                ],
                                [
                                    34.824410967292614,
                                    32.03967304823142
                                ],
                                [
                                    34.82236302925833,
                                    32.040878824364235
                                ],
                                [
                                    34.820821353417074,
                                    32.042013179111905
                                ],
                                [
                                    34.81792030318797,
                                    32.04183483272797
                                ],
                                [
                                    34.8159671469746,
                                    32.04280733147113
                                ],
                                [
                                    34.81310416625044,
                                    32.040832723592345
                                ],
                                [
                                    34.81074201129687,
                                    32.04053374901214
                                ],
                                [
                                    34.80927412016325,
                                    32.04021599004518
                                ],
                                [
                                    34.80861875336575,
                                    32.04056932682502
                                ],
                                [
                                    34.80668627445354,
                                    32.041890536408026
                                ],
                                [
                                    34.80634682042768,
                                    32.04204644644444
                                ],
                                [
                                    34.806397421474685,
                                    32.04152487668459
                                ],
                                [
                                    34.806355402286556,
                                    32.04125539291802
                                ],
                                [
                                    34.806528554172644,
                                    32.039682410878655
                                ],
                                [
                                    34.80837125669558,
                                    32.03861260709951
                                ],
                                [
                                    34.80697302675537,
                                    32.034555444663226
                                ],
                                [
                                    34.803175357053476,
                                    32.03576675676463
                                ],
                                [
                                    34.80144351990131,
                                    32.03697976662457
                                ],
                                [
                                    34.80006517057885,
                                    32.03802126787902
                                ],
                                [
                                    34.798378264079616,
                                    32.03948788646552
                                ],
                                [
                                    34.7963239293652,
                                    32.041246041466195
                                ],
                                [
                                    34.795343891251775,
                                    32.04017366705628
                                ],
                                [
                                    34.79126003288769,
                                    32.04074583926161
                                ],
                                [
                                    34.78966313575796,
                                    32.043167918622125
                                ],
                                [
                                    34.7878411790596,
                                    32.046813389480455
                                ],
                                [
                                    34.786429307824505,
                                    32.04681706781702
                                ],
                                [
                                    34.78574656775265,
                                    32.04587744360947
                                ],
                                [
                                    34.78522534473984,
                                    32.0452342411188
                                ],
                                [
                                    34.78493752980856,
                                    32.045118285646126
                                ],
                                [
                                    34.78425585401299,
                                    32.04427131827924
                                ],
                                [
                                    34.78364082124286,
                                    32.043673024657984
                                ],
                                [
                                    34.782843589782715,
                                    32.04351400722718
                                ],
                                [
                                    34.781856536865234,
                                    32.04184065020709
                                ],
                                [
                                    34.78116989135742,
                                    32.04082207008816
                                ],
                                [
                                    34.78044033050537,
                                    32.039876235544256
                                ],
                                [
                                    34.77941036224365,
                                    32.03889401240586
                                ],
                                [
                                    34.77855205535888,
                                    32.03827557020884
                                ],
                                [
                                    34.77761173583721,
                                    32.03796496243802
                                ],
                                [
                                    34.77637009213316,
                                    32.037293640786295
                                ],
                                [
                                    34.774883143936734,
                                    32.03653614196504
                                ],
                                [
                                    34.77351021963105,
                                    32.036136274498396
                                ],
                                [
                                    34.77235223875664,
                                    32.036067217420054
                                ],
                                [
                                    34.77131958496679,
                                    32.036234461028485
                                ],
                                [
                                    34.767908440643225,
                                    32.037587990271206
                                ],
                                [
                                    34.76574152042852,
                                    32.03823823341612
                                ],
                                [
                                    34.76447821277907,
                                    32.038470554351136
                                ],
                                [
                                    34.7624564176584,
                                    32.03851727726365
                                ],
                                [
                                    34.761755325040895,
                                    32.03818107506801
                                ],
                                [
                                    34.76062416220347,
                                    32.03779847185115
                                ],
                                [
                                    34.759111404418945,
                                    32.03667487688872
                                ],
                                [
                                    34.75856125988952,
                                    32.03702973160109
                                ],
                                [
                                    34.75676259516888,
                                    32.037653542269624
                                ],
                                [
                                    34.75636376006943,
                                    32.0378585030132
                                ],
                                [
                                    34.75610913551225,
                                    32.03800359338864
                                ],
                                [
                                    34.75580281522565,
                                    32.038106477471395
                                ],
                                [
                                    34.7555392374162,
                                    32.038131291270886
                                ],
                                [
                                    34.755355157699455,
                                    32.03811866609567
                                ],
                                [
                                    34.75501004941905,
                                    32.03729291404869
                                ],
                                [
                                    34.75048930119858,
                                    32.0404359609076
                                ],
                                [
                                    34.74444446474023,
                                    32.04667459072784
                                ],
                                [
                                    34.744575885931,
                                    32.047254311730114
                                ],
                                [
                                    34.74525164207509,
                                    32.04798796823269
                                ],
                                [
                                    34.74659687032471,
                                    32.04835002287988
                                ],
                                [
                                    34.74609545401764,
                                    32.04861368989127
                                ],
                                [
                                    34.74571166522986,
                                    32.04907812698213
                                ],
                                [
                                    34.746327007593095,
                                    32.04972555378897
                                ],
                                [
                                    34.74654213128355,
                                    32.05039667814022
                                ],
                                [
                                    34.74670199996498,
                                    32.05073043445701
                                ],
                                [
                                    34.747021677168675,
                                    32.050952800213835
                                ],
                                [
                                    34.74709510803223,
                                    32.051298352918195
                                ],
                                [
                                    34.74752426147461,
                                    32.052971537030864
                                ],
                                [
                                    34.74898338317871,
                                    32.05464469054932
                                ],
                                [
                                    34.75001335144043,
                                    32.056972505418514
                                ],
                                [
                                    34.751858711242676,
                                    32.05577223327246
                                ],
                                [
                                    34.752631187438965,
                                    32.05602683777075
                                ],
                                [
                                    34.75327491760254,
                                    32.055917721643944
                                ],
                                [
                                    34.75396156311035,
                                    32.05602683777075
                                ],
                                [
                                    34.75447654724121,
                                    32.05595409370069
                                ],
                                [
                                    34.754390716552734,
                                    32.05613595376744
                                ],
                                [
                                    34.75477695465088,
                                    32.05653604464182
                                ],
                                [
                                    34.755120277404785,
                                    32.05659060235278
                                ],
                                [
                                    34.75518465042114,
                                    32.05668153179874
                                ],
                                [
                                    34.755377769470215,
                                    32.057045248678854
                                ],
                                [
                                    34.75576400756836,
                                    32.057463521303454
                                ],
                                [
                                    34.756386280059814,
                                    32.05840917410126
                                ],
                                [
                                    34.75748062133789,
                                    32.061118778946806
                                ],
                                [
                                    34.75851058959961,
                                    32.066574115690266
                                ],
                                [
                                    34.75954055786133,
                                    32.07101088295881
                                ],
                                [
                                    34.760141372680664,
                                    32.07450195832265
                                ],
                                [
                                    34.761600494384766,
                                    32.076901995312426
                                ],
                                [
                                    34.76280212402344,
                                    32.079374694796144
                                ],
                                [
                                    34.76529121398926,
                                    32.086065193329354
                                ],
                                [
                                    34.76889610290527,
                                    32.09602731058061
                                ],
                                [
                                    34.77200746536255,
                                    32.099044817872
                                ],
                                [
                                    34.77346658706665,
                                    32.09989915423916
                                ],
                                [
                                    34.77559089660644,
                                    32.10253482246267
                                ],
                                [
                                    34.775848388671875,
                                    32.10417071620696
                                ],
                                [
                                    34.77499008178711,
                                    32.10446153869364
                                ],
                                [
                                    34.7746467590332,
                                    32.1051885908585
                                ],
                                [
                                    34.77378845214844,
                                    32.10577022842266
                                ],
                                [
                                    34.773445129394524,
                                    32.106133750018955
                                ],
                                [
                                    34.773543359607345,
                                    32.10687427929026
                                ],
                                [
                                    34.775319297896715,
                                    32.10958600015689
                                ],
                                [
                                    34.77583160892678,
                                    32.1109995487883
                                ],
                                [
                                    34.776062965393066,
                                    32.11202259825589
                                ],
                                [
                                    34.77705001831055,
                                    32.11543941013382
                                ],
                                [
                                    34.77741612574977,
                                    32.116281057230076
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "postcode_range": [],
                    "price": {
                        "tax": 0.17
                    },
                    "require_street_address": true,
                    "required_capabilities": [
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN",
                        "AUTO_ASSIGN"
                    ],
                    "road_range": 0,
                    "road_range_mode": "driving",
                    "service_time": {
                        "bike": 360,
                        "car": 300
                    },
                    "use_default_autogenerated_geo_range": true,
                    "use_default_delivery_pricing": true
                },
                "description": [
                    {
                        "lang": "en",
                        "value": "Anita’s world-famous boutique ice cream had modest beginnings in a small Mediterranean kitchen, almost 20 years ago. Mama Anita, with the help of her youngest son Nir, would whip up tasty frozen treats for friends and neighbours. He’d prepare the ice cream base, while she made the addictive jams they mixed in, to give Anita’s ice cream its delicious home-made flavor. In time, Nir began to sell their ice cream from a cart at a weekly, local market and it was a huge success, which eventually led to the opening of the first store. Soon word spread, older brother Adi came aboard, and, since then, the little ice cream parlor that could has become a successful international chain with branches from Australia to New York."
                    },
                    {
                        "lang": "he",
                        "value": "‫לגלידת הבוטיק המפורסמת של אניטה היתה התחלה צנועה במטבח ים תיכוני קטן, לפני כמעט 20 שנה. מאמא אניטה, בעזרת בנה הצעיר ניר, היתה מכינה פינוקים קפואים וטעימים לחברים ולשכנים. ניר הכין את בסיס הגלידה, בעוד אניטה היתה מכינה את הריבות הממכרות המעורבבות בתוך הגלידה, כדי לתת לגלידה של אניטה את הטעם הביתי הטעים שלה. עד מהרה התפשטה המילה, הגיע אחיו הבכור עדי, ומאז חנות הגלידה הקטנה הפכה לרשת בינלאומית מוצלחת עם סניפים מאוסטרליה לניו יורק."
                    }
                ],
                "discounts": [],
                "dropoff_note_prefix": "",
                "estimates": {
                    "delivery": {
                        "mean": 12
                    },
                    "pickup": {
                        "mean": 6
                    },
                    "preparation": {
                        "max": 30,
                        "mean": 20,
                        "min": 10
                    },
                    "total": {
                        "max": 40,
                        "mean": 30,
                        "min": 20
                    }
                },
                "favourite": false,
                "food_tags": [
                    "קינוח",
                    "גלידה"
                ],
                "group_order_enabled": true,
                "high_volume_venue": false,
                "id": {
                    "$oid": "5bf25e00e9fb35000a449bc7"
                },
                "ipad_free": false,
                "is_marketplace_v2": false,
                "is_wolt_plus": false,
                "item_cards_enabled": false,
                "itemid": {
                    "$oid": "5bf25e00e9fb35000a449bc7"
                },
                "listimage": "https://prod-wolt-venue-images-cdn.wolt.com/5bf25e00e9fb35000a449bc7/8f1d5280-4ad4-11ec-9d64-8e42dd2774eb___22.jpg",
                "listimage_blurhash": "j3LXyUc1PL00QwXKkP;;54;;8g8P",
                "location": {
                    "coordinates": [
                        34.78799879550933,
                        32.07223730599
                    ],
                    "type": "Point"
                },
                "mainimage": "https://prod-wolt-venue-images-cdn.wolt.com/5bf25e00e9fb35000a449bc7/99e88ec8-4ad4-11ec-bbb9-8e42dd2774eb_untitled_capture27443.jpg",
                "mainimage_blurhash": "j6J9Sz;LTvRzLJd4hjNDXLTdPc4y",
                "menu_layout": "regular",
                "merchant": {
                    "$oid": "5fb4e73604beb5a20dbec11c"
                },
                "name": [
                    {
                        "lang": "en",
                        "value": "Anita | Sarona"
                    },
                    {
                        "lang": "he",
                        "value": "Anita | שרונה"
                    }
                ],
                "ncd_allowed": true,
                "online": true,
                "opening_times": {
                    "friday": [
                        {
                            "type": "close",
                            "value": {
                                "$date": 3600000
                            }
                        },
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        }
                    ],
                    "monday": [
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        },
                        {
                            "type": "close",
                            "value": {
                                "$date": 86400000
                            }
                        }
                    ],
                    "saturday": [
                        {
                            "type": "close",
                            "value": {
                                "$date": 3600000
                            }
                        },
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        }
                    ],
                    "sunday": [
                        {
                            "type": "close",
                            "value": {
                                "$date": 3600000
                            }
                        },
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        },
                        {
                            "type": "close",
                            "value": {
                                "$date": 86400000
                            }
                        }
                    ],
                    "thursday": [
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        }
                    ],
                    "tuesday": [
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        },
                        {
                            "type": "close",
                            "value": {
                                "$date": 86400000
                            }
                        }
                    ],
                    "wednesday": [
                        {
                            "type": "open",
                            "value": {
                                "$date": 32400000
                            }
                        },
                        {
                            "type": "close",
                            "value": {
                                "$date": 86400000
                            }
                        }
                    ]
                },
                "phone": "+97236542544",
                "post_code": "6107412",
                "preorder_enabled": true,
                "preorder_only": false,
                "preorder_times": {
                    "delivery": {
                        "friday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 3600000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            }
                        ],
                        "monday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ],
                        "saturday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 3600000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            }
                        ],
                        "sunday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 3600000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ],
                        "thursday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            }
                        ],
                        "tuesday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ],
                        "wednesday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 35100000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 86400000
                                }
                            }
                        ]
                    },
                    "maximum_days": 7,
                    "minimum_time_limit": 7200,
                    "minimum_time_limits": {
                        "delivery": 3600,
                        "eatin": 2400,
                        "takeaway": 2400
                    },
                    "takeaway": {
                        "friday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 2700000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            }
                        ],
                        "monday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 85500000
                                }
                            }
                        ],
                        "saturday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 2700000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            }
                        ],
                        "sunday": [
                            {
                                "type": "close",
                                "value": {
                                    "$date": 2700000
                                }
                            },
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 85500000
                                }
                            }
                        ],
                        "thursday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            }
                        ],
                        "tuesday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 85500000
                                }
                            }
                        ],
                        "wednesday": [
                            {
                                "type": "open",
                                "value": {
                                    "$date": 34200000
                                }
                            },
                            {
                                "type": "close",
                                "value": {
                                    "$date": 85500000
                                }
                            }
                        ]
                    },
                    "time_step": 300
                },
                "presence": "brick_and_mortar",
                "price_range": 2,
                "product_line": "restaurant",
                "public_url": "https://wolt.com/he/isr/tel-aviv/restaurant/anita",
                "public_visible": true,
                "rating": {
                    "negative_percentage": 2,
                    "neutral_percentage": 6,
                    "positive_percentage": 91,
                    "rating": 4,
                    "score": 9.2,
                    "text": "מצויין",
                    "volume": 500
                },
                "ratings_and_reviews_enabled": false,
                "relevancy": 11.210542887025504,
                "relevancy_from_purchases": 3.026357217563758,
                "rush": {
                    "queue_minutes": false,
                    "status": false
                },
                "service_fee_description": "דמי השירות עוזרים לנו לספק שירות מעולה, בעזרתם אנו מכסים מגוון עלויות הקשורות לתפעול האופרטיבי שלנו.",
                "short_description": [
                    {
                        "lang": "en",
                        "value": "La Mamma del Gelato "
                    },
                    {
                        "lang": "he",
                        "value": "La Mamma del Gelato"
                    }
                ],
                "show_allergy_disclaimer_on_menu": false,
                "show_delivery_info_on_merchant": false,
                "show_delivery_price_on_merchant": false,
                "show_item_bottom_sheet": false,
                "show_phone_number_on_merchant": true,
                "slug": "anita",
                "status": "VENUE_PUBLISHED",
                "tags": [
                    {},
                    {}
                ],
                "timezone": "Asia/Jerusalem",
                "timezone_name": "Asia/Jerusalem",
                "tipping": {
                    "currency": "ILS",
                    "max_amount": 10000,
                    "min_amount": 500,
                    "tip_amounts": [
                        500,
                        1000,
                        1500
                    ],
                    "type": "pre_tipping_amount"
                },
                "type": "purchase",
                "website": "https://www.anita-gelato.com/",
                "wolt_delivery": true
            }
        ],
        "status": "OK"
    }
]