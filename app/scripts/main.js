// Picture element HTML5 shiv
document.createElement('picture');

/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
// (function () {
//   'use strict';
//
//   var querySelector = document.querySelector.bind(document);
//
//   var navdrawerContainer = querySelector('.navdrawer-container');
//   var body = document.body;
//   var appbarElement = querySelector('.app-bar');
//   var menuBtn = querySelector('.menu');
//   var main = querySelector('main');
//
//   function closeMenu() {
//     body.classList.remove('open');
//     appbarElement.classList.remove('open');
//     navdrawerContainer.classList.remove('open');
//   }
//
//   function toggleMenu() {
//     body.classList.toggle('open');
//     appbarElement.classList.toggle('open');
//     navdrawerContainer.classList.toggle('open');
//   }
//
//   main.addEventListener('click', closeMenu);
//   menuBtn.addEventListener('click', toggleMenu);
//   navdrawerContainer.addEventListener('click', function (event) {
//     if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
//       closeMenu();
//     }
//   });
// })();

// (function() {
//
// var win = $(window);
//
// win.resize(function() {
//
//     var win_w = win.width(),
//         win_h = win.height(),
//         $bg    = $("#bg");
//
//     // Load narrowest background image based on
//     // viewport width, but never load anything narrower
//     // that what's already loaded if anything.
//     var available = [
//       1024, 1280, 1366,
//       1400, 1680, 1920,
//       2560, 3840, 4860
//     ];
//
//     var current = $bg.attr('src').match(/([0-9]+)/) ? RegExp.$1 : null;
//
//     if (!current || ((current < win_w) && (current < available[available.length - 1]))) {
//
//       var chosen = available[available.length - 1];
//
//       for (var i=0; i<available.length; i++) {
//         if (available[i] >= win_w) {
//           chosen = available[i];
//           break;
//         }
//       }
//
//       // Set the new image
//       $bg.attr('src', '/img/bg/' + chosen + '.jpg');
//
//       // for testing...
//       // console.log('Chosen background: ' + chosen);
//
//     }
//
//     // Determine whether width or height should be 100%
//     if ((win_w / win_h) < ($bg.width() / $bg.height())) {
//       $bg.css({height: '100%', width: 'auto'});
//     } else {
//       $bg.css({width: '100%', height: 'auto'});
//     }
//
//   }).resize();
//
// })(jQuery);
