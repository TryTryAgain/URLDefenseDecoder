// URLDefenseDecoder - Chrome Extension right-click URLDefense decoder
// Copyright (C) 2017  FractalSystems.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public LICENSE
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
// https://www.gnu.org/licenses/gpl-3.0.en.html

// A generic onclick callback function.
function genericOnClick(info) {}

function copyToClipboard(text) {
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.innerHTML = text;
  copyDiv.unselectable = "off";
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.body.removeChild(copyDiv);
}

var contexts = ["link", "selection"];
var title = "Copy URLDefense-Decoded-Link";
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  console.log(context);
  if (context === "link") {
    chrome.contextMenus.onClicked.addListener(onClickHandler);

    function onClickHandler(info) {
      var lText = info.linkUrl;
      if (/https:\/\/urldefense.proofpoint.com\/v1/.test(lText)) {
        //alert("v1 lText = " + lText)
        var reg = /u=(.+?)&k=/;
        var specialencodedurl = lText.match(reg);
        var transurl = specialencodedurl[1];
        var decodedurl = decodeURIComponent(transurl);
        var url = decodedurl;
        copyToClipboard(decodedurl)
      } else if (/https:\/\/urldefense.proofpoint.com\/v2/.test(lText)) {
        //alert("v2 lText = " + lText)
        var reg = /u=(.+?)&[dc]=/;
        var specialencodedurl = lText.match(reg);
        var transurl = specialencodedurl[1]
        var urlencodedurl = transurl.replace(/-/g, '%');
        var htmlencodedurl = urlencodedurl.replace(/_/g, '/');
        var decodedurl = decodeURIComponent(htmlencodedurl);
        var url = decodedurl;
        copyToClipboard(decodedurl)
      }
    };
        chrome.contextMenus.removeAll(function() {
        chrome.contextMenus.create({
          "title": title,
          "id": "linkid",
          "contexts": ["link"],
          "onclick": genericOnClick,
          "targetUrlPatterns": ["https://urldefense.proofpoint.com/*"]
          });
        });
  } else if (context === "selection") {
    chrome.contextMenus.onClicked.addListener(onClickHandler);

    function onClickHandler(info) {
      var sText = info.selectionText;
      if (/https:\/\/urldefense.proofpoint.com\/v1/.test(sText)) {
        //alert("v1 sText = " + sText)
        var reg = /u=(.+?)&k=/;
        var specialencodedurl = sText.match(reg);
        var transurl = specialencodedurl[1];
        var decodedurl = decodeURIComponent(transurl);
        var url = decodedurl;
        copyToClipboard(decodedurl)
      } else if (/https:\/\/urldefense.proofpoint.com\/v2/.test(sText)) {
        //alert("v2 sText = " + sText)
        var reg = /u=(.+?)&[dc]=/;
        var specialencodedurl = sText.match(reg);
        var transurl = specialencodedurl[1]
        var urlencodedurl = transurl.replace(/-/g, '%');
        var htmlencodedurl = urlencodedurl.replace(/_/g, '/');
        var decodedurl = decodeURIComponent(htmlencodedurl);
        var url = decodedurl;
        copyToClipboard(decodedurl)
      }
    };
      chrome.contextMenus.removeAll(function() {
      chrome.contextMenus.create({
        "title": title,
        "id": "selectid",
        "contexts": ["selection"],
        "onclick": genericOnClick,
        "targetUrlPatterns": ["https://urldefense.proofpoint.com/*"]
      });
    });

  }
}
