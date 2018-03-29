// ==UserScript==
// @name         Fast Box
// @namespace    http://tampermonkey.net/
// @version      4.5
// @description  Boxes... only FASTER!
// @author       Justin O'Reilly
// @match        https://crm.welcomewagon.com/index.php?module=Invoice&view=Edit*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/joreilly25/fastbox/master/fastbox.js
// @downloadURL  https://github.com/joreilly25/fastbox/raw/master/Fast%20Box.user.js
// ==/UserScript==

(function() {
  'use strict';
     $("#lineItemTab :checkbox").click(function() {
         var startitem = $(this).prop('id');
         var numselect = parseInt(prompt("How many would you like to check?"));
         var counter = 0;
         var startnum = startitem.replace(/\D/g,'');
         var orignum = startitem.replace(/\D/g,'');
         if (numselect < 0) numselect = 0;
         if (numselect > 1000) numselect = 1000;
      if (isNaN(numselect)) {
        $("#lineFiles :checkbox").prop("checked", !$("#lineFiles :checkbox").prop("checked"));
      }
      else {
          $("#lineFiles" + orignum).prop('checked', false);
          $("#lineItemTab :checkbox").prop('checked', false);
        while (counter <= numselect) {
          $("#lineFiles" + startnum).prop('checked', true);
              startnum++;
              counter++;
              //console.log($("#lineFiles" + startnum));
              //console.log(startnum);
          }
          $("#lineFiles" + orignum).prop('checked', false);
      }
});
})();
