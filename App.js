import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
Food Delivery add

-> Header
  - Logo on left
  - Navbar on right(Home,AboutUs)

-> Body
  - Search filed
  - RestaurantContainer
    - RestaurantCards with Name,Image,Address

-> Footer
  - Contact Us
  - T&C
  - Locations

*/

const resList = [
  {
    "info": {
      "id": "804529",
      "name": "Dfc Bakery And Food Court",
      "cloudinaryImageId": "60a8b98fc9d14de1acff6cad0731923b",
      "locality": "Jangaon",
      "areaName": "Jangaon",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Cakes and Pastries",
        "Desserts",
        "Pizzas",
        "Chinese",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "parentId": "480590",
      "avgRatingString": "4.1",
      "totalRatingsString": "130",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/dfc-bakery-and-food-court-jangaon-rest804529",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "805521",
      "name": "Master Bucket Biryani",
      "cloudinaryImageId": "c529d35a5a3f3ae7a556b770cd8658ff",
      "locality": "Mahadevpura",
      "areaName": "Jangaon",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Indian",
        "Biryani",
        "Chinese"
      ],
      "avgRating": 3.6,
      "parentId": "399018",
      "avgRatingString": "3.6",
      "totalRatingsString": "16",
      "sla": {
        "deliveryTime": 12,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/master-bucket-biryani-mahadevpura-jangaon-rest805521",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "805335",
      "name": "Suruchi Restaurant",
      "cloudinaryImageId": "90012597629321295211c3881c8bb0af",
      "locality": "Pembarthy",
      "areaName": "Jangaon",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani",
        "Indian"
      ],
      "avgRating": 4.3,
      "parentId": "197946",
      "avgRatingString": "4.3",
      "totalRatingsString": "140",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/suruchi-restaurant-pembarthy-jangaon-rest805335",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "804527",
      "name": "Qtq Restaurant",
      "cloudinaryImageId": "7aa8023e1e371b769ba79f979685c456",
      "locality": "Sohna Road Gurugram",
      "areaName": "Jangaon",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Tandoor",
        "Seafood",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "488475",
      "avgRatingString": "4.3",
      "totalRatingsString": "219",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 21:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/qtq-restaurant-sohna-road-gurugram-jangaon-rest804527",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "1006418",
      "name": "Cake Shoppie",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/11/590cb670-6a1a-443d-96f3-0558755c81e3_1006418.jpg",
      "locality": "Jangaon",
      "areaName": "Jangaon",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Pizzas",
        "Burgers"
      ],
      "avgRating": 4.6,
      "parentId": "586456",
      "avgRatingString": "4.6",
      "totalRatingsString": "21",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/cake-shoppie-jangaon-rest1006418",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "991738",
      "name": "ROYAL DINE'IN",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/16/9f7d2980-268a-4b27-b0c1-c55a1c28e002_991738.jpg",
      "locality": "Jangaon",
      "areaName": "Jangaon",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.2,
      "parentId": "578871",
      "avgRatingString": "4.2",
      "totalRatingsString": "28",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/royal-dinein-jangaon-rest991738",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "935710",
      "name": "SWADISHT BHOJANAM",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/ee2dd8c0-aa11-448f-876d-1f4ca8d19f45_935710.jpg",
      "locality": "Jangaon",
      "areaName": "Jangaon",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "Biryani",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "548823",
      "avgRatingString": "4.1",
      "totalRatingsString": "32",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/swadisht-bhojanam-jangaon-rest935710",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "832160",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/dba31d75-8bef-495a-a80b-b51ad81a0893_832160.JPG",
      "locality": "Ganesh Street",
      "areaName": "Jangaon",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "86",
      "sla": {
        "deliveryTime": 12,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-24 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
            "description": "bolt!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-adbfe8a5-d156-4509-831b-60b39351d913"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/jangaon/kwality-walls-ice-cream-and-more-ganesh-street-jangaon-rest832160",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("./assests/bird-logo.jpg")} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { resData} = props;
  const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
  //console.log(sla)
  //const { deliveryTime} = sla.deliveryTime;

  //console.log(props);
  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}  </h4>
      <h4>{avgRating} ⭐ </h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} mins </h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        {
          resList.map((restaurant) =>   (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


root.render(<AppLayout />);