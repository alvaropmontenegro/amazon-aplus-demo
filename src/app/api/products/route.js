export async function GET(request) {

  const mockData = {
    "ItemsResult": {
      "Items": [{
        "ASIN": asin,
        "DetailPageURL": `https://www.amazon.com/dp/${asin}`,
        "ItemInfo": {
          "ByLineInfo": {
            "Brand": {
              "DisplayValue": "TechCorp",
              "Label": "Brand",
              "Locale": "en_US"
            },
            "Manufacturer": {
              "DisplayValue": "TechCorp Manufacturing",
              "Label": "Manufacturer",
              "Locale": "en_US"
            }
          },
          "Classifications": {
            "Binding": {
              "DisplayValue": "Electronics",
              "Label": "Binding",
              "Locale": "en_US"
            },
            "ProductGroup": {
              "DisplayValue": "Consumer Electronics",
              "Label": "ProductGroup",
              "Locale": "en_US"
            }
          },
          "Features": {
            "DisplayValues": [
              "Premium quality materials for durability",
              "Advanced technology integration",
              "Easy installation and setup",
              "Compatible with multiple devices",
              "Energy efficient design"
            ],
            "Label": "Features",
            "Locale": "en_US"
          },
          "Title": {
            "DisplayValue": `Premium Product ${asin} - Advanced Technology Device`,
            "Label": "Title",
            "Locale": "en_US"
          },
          "ProductInfo": {
            "Color": {
              "DisplayValue": "Black",
              "Label": "Color",
              "Locale": "en_US"
            },
            "ItemDimensions": {
              "Height": {
                "DisplayValue": 10.5,
                "Label": "Height",
                "Locale": "en_US",
                "Unit": "Inches"
              },
              "Length": {
                "DisplayValue": 15.2,
                "Label": "Length", 
                "Locale": "en_US",
                "Unit": "Inches"
              },
              "Weight": {
                "DisplayValue": 2.3,
                "Label": "Weight",
                "Locale": "en_US",
                "Unit": "Pounds"
              },
              "Width": {
                "DisplayValue": 8.7,
                "Label": "Width",
                "Locale": "en_US",
                "Unit": "Inches"
              }
            },
            "Size": {
              "DisplayValue": "Medium",
              "Label": "Size",
              "Locale": "en_US"
            }
          }
        },
        "Images": {
          "Primary": {
            "Large": {
              "Height": 500,
              "URL": `https://picsum.photos/500/500?random=${asin}`,
              "Width": 500
            },
            "Medium": {
              "Height": 160,
              "URL": `https://picsum.photos/160/160?random=${asin}`,
              "Width": 160
            },
            "Small": {
              "Height": 75,
              "URL": `https://picsum.photos/75/75?random=${asin}`,
              "Width": 75
            }
          },
          "Variants": [
            {
              "Large": {
                "Height": 500,
                "URL": `https://picsum.photos/500/500?random=${asin}1`,
                "Width": 500
              },
              "Medium": {
                "Height": 160,
                "URL": `https://picsum.photos/160/160?random=${asin}1`,
                "Width": 160
              }
            },
            {
              "Large": {
                "Height": 500,
                "URL": `https://picsum.photos/500/500?random=${asin}2`,
                "Width": 500
              },
              "Medium": {
                "Height": 160,
                "URL": `https://picsum.photos/160/160?random=${asin}2`,
                "Width": 160
              }
            }
          ]
        },
        "Offers": {
          "Listings": [{
            "Availability": {
              "MaxOrderQuantity": 5,
              "Message": "In Stock",
              "MinOrderQuantity": 1,
              "Type": "Now"
            },
            "Condition": {
              "Value": "New"
            },
            "DeliveryInfo": {
              "IsAmazonFulfilled": true,
              "IsFreeShippingEligible": true,
              "IsPrimeEligible": true
            },
            "Price": {
              "Amount": Math.floor(Math.random() * 200) + 50, // Random price 50-250
              "Currency": "USD",
              "DisplayAmount": `$${Math.floor(Math.random() * 200) + 50}.99`
            },
            "Promotions": [{
              "Amount": 10.00,
              "Currency": "USD",
              "DiscountPercent": 10,
              "DisplayAmount": "Save $10.00",
              "Type": "Percentage"
            }]
          }]
        },
        "CustomerReviews": {
          "Count": Math.floor(Math.random() * 2000) + 100,
          "StarRating": {
            "Value": (Math.random() * 2 + 3).toFixed(1) // 3.0 to 5.0
          }
        },
        "BrowseNodeInfo": {
          "BrowseNodes": [{
            "ContextFreeName": "Electronics",
            "DisplayName": "Electronics",
            "Id": "172282",
            "SalesRank": Math.floor(Math.random() * 1000) + 1
          }]
        }
      }]
    },
    "Errors": [],
    "SearchResult": {
      "TotalResultCount": 1,
      "SearchIndex": "All"
    }
  };

    return new Response(
      JSON.stringify({ mockData }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }