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
    "url": "webpack-runtime-608505da0a7f2ef8ecd3.js"
  },
  {
    "url": "app-4605173190a8241f4f74.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c5cb64bc0edabf3c9d7d.js"
  },
  {
    "url": "index.html",
    "revision": "11b460d1e9b771cc21016decb5d2c26b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f26c29a5900f23a6ec26d22a44b9fb63"
  },
  {
    "url": "2.eac03220ef9302b061c7.css"
  },
  {
    "url": "component---src-pages-index-jsx.187053647c7ff3421bcf.css"
  },
  {
    "url": "component---src-pages-index-jsx-d23e3577838ae44e8363.js"
  },
  {
    "url": "1-c920d263a4011fb6b820.js"
  },
  {
    "url": "0-67c09113654780576fac.js"
  },
  {
    "url": "3-0f39f1418f3745c0ba35.js"
  },
  {
    "url": "2-bd22eb69eb884a3cd294.js"
  },
  {
    "url": "static/d/538/path---index-6a9-ZlpVoSSeZih7Zx7bgAca9knpt4.json",
    "revision": "edfeb92b9646722502d2fd8e54f66065"
  },
  {
    "url": "component---src-pages-404-jsx-83308165d59354431237.js"
  },
  {
    "url": "static/d/541/path---404-html-516-62a-cDaTRH5IbADFrlxz5aBGqUG268.json",
    "revision": "0ea5e8174dbda597ee1bb47541ec7d58"
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