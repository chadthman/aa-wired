// ==UserScript==
// @name         aa-wired
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  replace javascript load of ad blocker
// @author       akadrac
// @match        http://*.wired.com/*
// @updateURL    https://github.com/akadrac/aa-wired/raw/master/aa-wired.user.js
// @downloadURL  https://github.com/akadrac/aa-wired/raw/master/aa-wired.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var adScript = document.evaluate("//script", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i=0; i < adScript.snapshotLength; i++) {
	var src = adScript.snapshotItem(i).src;
	if (src.indexOf(',outbrain,tracking,ads') > -1) {
		src = src.replace(',outbrain,tracking,ads', '').replace('&amp;', '&');
		//alert(src);
		break;
	}
}

