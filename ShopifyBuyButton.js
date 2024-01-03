/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'trinkettreasure.com',
      storefrontAccessToken: 'b4bc680916206191c9de96082c18f94c',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7168663257142',
        node: document.getElementById('product-component-1704310987112'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "center"
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#25c2e6"
        },
        "background-color": "#29d8ff",
        ":focus": {
          "background-color": "#25c2e6"
        },
        "border-radius": "40px",
        "padding-left": "50px",
        "padding-right": "50px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#25c2e6"
        },
        "background-color": "#29d8ff",
        ":focus": {
          "background-color": "#25c2e6"
        },
        "border-radius": "40px",
        "padding-left": "50px",
        "padding-right": "50px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#25c2e6"
        },
        "background-color": "#29d8ff",
        ":focus": {
          "background-color": "#25c2e6"
        },
        "border-radius": "40px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#29d8ff",
        ":hover": {
          "background-color": "#25c2e6"
        },
        ":focus": {
          "background-color": "#25c2e6"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/