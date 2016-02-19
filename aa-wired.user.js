// ==UserScript==
// @name         aa-wired
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  replace javascript load of ad blocker
// @author       akadrac
// @match        http://*.wired.com/*
// @updateURL    https://github.com/akadrac/aa-wired/raw/master/aa-wired.user.js
// @downloadURL  https://github.com/akadrac/aa-wired/raw/master/aa-wired.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

var adScript = document.evaluate("//script", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 

var bad  = "http://www.wired.com/assets/load?scripts=true&c=1&load%5B%5D=jquery-sonar,wpcom-lazy-load-images,outbrain,tracking,ads,wired&ver=1455828505";
var ffBad = "http://www.wired.com/assets/load?scripts=true&amp;c=1&amp;load%5B%5D=jquery-sonar,wpcom-lazy-load-images,outbrain,tracking,ads,wired&amp;ver=1455828505";

var good = "http://www.wired.com/assets/load?scripts=true&c=1&load%5B%5D=jquery-sonar,wpcom-lazy-load-images,wired&ver=1455828505";

for (var i=0; i < adScript.snapshotLength; i++) { 
    var src = adScript.snapshotItem(i).src;
    if (src == bad) {
        src = good;
        break;
    }
    if (src == ffBad) {
        src = good;
        break;
    }
}

