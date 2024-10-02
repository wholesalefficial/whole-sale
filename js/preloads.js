
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.BqD-ScDQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.x3eFkvSv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact.DVE1Awei.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.Cya4hTAu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.BsjgSavf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.gjVa8Rmw.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.-Rq0Al7u.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.BqGuYMxu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.C5kao_a2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.BbVqkXr4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShippingMethodSelector.CnKUJE2E.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.Di3ueD0A.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.nM2YZnwZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.mxGJ0IvR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Option.CFImcKSF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.6l_Nx-Sz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.DujubPBT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.CNr_NpZG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.CsLBI2Nv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.DztbaMYd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.DxfUtQTA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.BP9YTcu2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.DppRkTZv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.CQCy2jNI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.C-eN3Lji.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.BX2gj-C2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CupxUzN4.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.de0eqShh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedContact.BL1uXB7_.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.Got04t9H.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShippingMethodSelector.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.-UsM8FFz.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Option.BgrbqXV7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/archivo_narrow/archivonarrow_n4.d4b9d2f1da097aa0a5086dbe5b5d10d347f871b5.woff2?h1=dGVhbXJlZGRpdGNoLmNvbQ&hmac=42d4c20b6848c1f0dedd5dfbe9697f678ae16f0b26e035e69a30ab044456324e","https://fonts.shopifycdn.com/archivo_narrow/archivonarrow_n7.5a454828f1b15eb7f722cdb2f2e1b3909f34b3c8.woff2?h1=dGVhbXJlZGRpdGNoLmNvbQ&hmac=174292382e1778deaed03aa06f33f315d4c58e304ed2c45a91d22d21002e29f6","https://fonts.shopifycdn.com/amiri/amiri_n4.33f03ad85977dcd0f607792cd27b2143d63a6552.woff2?h1=dGVhbXJlZGRpdGNoLmNvbQ&hmac=fbd81f9af5f5afa9927526a48628d5880c95c71e876ade98d4d53a1b13f788c9","https://fonts.shopifycdn.com/amiri/amiri_n7.3c33a95a0f2ec579fe307211f4076d23082fd631.woff2?h1=dGVhbXJlZGRpdGNoLmNvbQ&hmac=0cf10686eb752357c81b9fed1c24f63913f0f525edbb9d5a9f1290dc46eab1b7"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0605/0526/0168/files/IMG_2388_1_x320.png?v=1719820059"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  