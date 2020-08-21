/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3dac28068260ee01c0ff.js"
  },
  {
    "url": "app-dd2fbaaa156eb387a657.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c5cb64bc0edabf3c9d7d.js"
  },
  {
    "url": "index.html",
    "revision": "0dc60ff2e0d6ee8082657b55fb4b569a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c5f9db73f7ed310af0c174326936ea12"
  },
  {
    "url": "2.eac03220ef9302b061c7.css"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "component---src-pages-index-jsx-5bb969efe89bb20ea571.js"
  },
  {
    "url": "1-deeb871e12479340903a.js"
  },
  {
    "url": "0-67c09113654780576fac.js"
  },
  {
    "url": "3-449755f3954bae9e5e9a.js"
  },
  {
    "url": "2-9e65c99efe86ce97821f.js"
  },
  {
    "url": "static/d/150/path---index-6a9-4Idr5DkHecGpkSQPYlyNG9q9Ro.json",
    "revision": "36353fd30fe5ca348b3c7152d04f8c53"
  },
  {
    "url": "component---src-pages-404-jsx-68f8d44b6c86c24cae96.js"
  },
  {
    "url": "static/d/9/path---404-html-516-62a-pC7JsYyl2DIWrkjd5QJAUKTf3E.json",
    "revision": "0e8d99904a43528678053790cb3db1f6"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});