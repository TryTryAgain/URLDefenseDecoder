var bgp = chrome.extension.getBackgroundPage()
var arr = []; // the array

document.addEventListener('DOMContentLoaded', function() {

      var tbinput = document.getElementById("tbinput");
      var btadd = document.getElementById("btadd");
      btadd.addEventListener('click', addItems());
    };

    function addItems() {
      arr.push(input.value); // add textbox value to array
      input.value = ''; // clear textbox value
    };
