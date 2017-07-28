var bgp = chrome.extension.getBackgroundPage()
var arr = []; // the array

document.addEventListener('DOMContentLoaded', documentEvents, false);

function myAction(input) {
  if (/https:\/\/urldefense.proofpoint.com\/v1/.test(input.value)) {
    var reg = /u=(.+?)&k=/;
    var specialencodedurl = input.value.match(reg);
    var transurl = specialencodedurl[1];
    var decodedurl = decodeURIComponent(transurl);
    var url = decodedurl;
    bgp.copyToClipboard(decodedurl);
  } else if (/https:\/\/urldefense.proofpoint.com\/v2/.test(input.value)) {
    let mlink = (input.value);
    var reg = /u=(.+?)&[dc]=/;
    var specialencodedurl = mlink.match(reg);
    var transurl = specialencodedurl[1]
    var urlencodedurl = transurl.replace(/-/g, '%');
    var htmlencodedurl = urlencodedurl.replace(/_/g, '/');
    var decodedurl = decodeURIComponent(htmlencodedurl);
    var url = decodedurl;
    bgp.copyToClipboard(decodedurl);
  }
};

function documentEvents() {
  document.getElementById('btcopy').addEventListener('click',
    function() {
      myAction(document.getElementById('tbinput'));
    });
}
