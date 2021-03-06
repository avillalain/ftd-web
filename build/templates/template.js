angular.module('youlearn').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/dudes/views/dudes.html',
    "<div class=\"jumbotron\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            <img src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/c38.8.103.103/1779207_10100311295035269_252880975_a.jpg\">\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-8\">\n" +
    "            <h1>{{user.fullName}}</h1>\n" +
    "            <button class=\"btn btn-lg btn-primary\" data-ng-click=\"refresh()\">\n" +
    "                <i class=\"fa fa-refresh\"></i> Refresh Contacts\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div data-upload></div>\n" +
    "\n" +
    "<div data-dudes class=\"containter dudes\"></div>\n"
  );


  $templateCache.put('scripts/dudes/views/search.html',
    "<div class=\"row dude\">\n" +
    "    <div class=\"col-sm-2\">\n" +
    "        <canvas id=\"myCanvas\" width=\"578\" height=\"400\"></canvas>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-8\">\n" +
    "        <h2>{{user.fullName}}</h2>\n" +
    "        <button class=\"btn btn-lg btn-primary\" data-ng-click=\"refresh()\">\n" +
    "            <i class=\"fa fa-refresh\"></i> Refresh Contacts\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<script>\n" +
    "    var drawCanvas = function (htmlId, tagsInformation) {\n" +
    "        var canvas = document.getElementById(htmlId);\n" +
    "        var context = canvas.getContext('2d');\n" +
    "        context.drawImage(photo, 0, 0, 200, 150);\n" +
    "        context.resize\n" +
    "    }\n" +
    "</script>"
  );


  $templateCache.put('scripts/dudes/views/upload.html',
    "<div class=\"jumbotron drop-area\" data-ng-click=\"openFileBrowser()\">\n" +
    "    <input type=\"file\" ng-show=\"false\" name=\"file\" onchange=\"angular.element(this).scope().fileChanged(this)\" multiple=\"multiple\"/>\n" +
    "    <div data-ng-switch=\"showProgress()\">\n" +
    "        <span data-ng-switch-when=\"false\">\n" +
    "            <h2>Find This Dude <br/><small>Drag and drop an image into this space to try and identify the dudes in it.</small></h2>\n" +
    "        </span>\n" +
    "        <span data-ng-switch-default=\"true\">\n" +
    "            <div class=\"progress progress-striped active col-lg-12\">\n" +
    "                <div class=\"progress-bar\" data-ng-style=\"{'width': progress + '%'}\"></div>\n" +
    "            </div>\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"cancel()\">Cancel</button>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('scripts/header/views/nav.html',
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-ng-click=\"collapsed = !collapsed\">\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Find this Dude</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" data-collapse=\"collapsed\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li data-ng-class=\"{'active': isActive('/dudes')}\">\n" +
    "                    <a href=\"/dudes\">\n" +
    "                        <i class=\"fa fa-home\"></i> Home!\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav pull-right\">\n" +
    "                <li>\n" +
    "                    <a href=\"#\" data-ng-click=\"logout()\">Log Out</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('scripts/login/views/login.html',
    "<div class=\"jumbotron\">\n" +
    "    <div class=\"container\">\n" +
    "        <h1>Find This Dude!</h1>\n" +
    "        <p>Have you ever greeted someone you don't have a clue who they are?\n" +
    "            If that's the case, this is the right service for you!</p>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-primary\" data-ng-click=\"login()\">\n" +
    "            <i class=\"fa fa-facebook-square\"></i> Login with Facebook\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- Example row of columns -->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"white-bg-padding\">\n" +
    "            <h2>1. Log In\n" +
    "                <small>with Facebook</small>\n" +
    "            </h2>\n" +
    "            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n" +
    "                condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis\n" +
    "                euismod. Donec sed odio dui. </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"white-bg-padding\">\n" +
    "            <h2>2. Upload\n" +
    "                <small>a Picture</small>\n" +
    "            </h2>\n" +
    "            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n" +
    "                condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis\n" +
    "                euismod. Donec sed odio dui. </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"white-bg-padding\">\n" +
    "            <h2>3. Recognize\n" +
    "                <small>your friends</small>\n" +
    "            </h2>\n" +
    "            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula\n" +
    "                porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut\n" +
    "                fermentum massa justo sit amet risus.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
