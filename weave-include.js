/*
 * Copyright 2014 Gerry Healy <nickel_chrome@mac.com>
 *
 *  Weave helper objects
 *
 *  LICENSE:
 *  This program is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU General Public License as
 *  published by the Free Software Foundation; either version 2 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA
 *  02111-1307 USA
 */

/*
 * This must be the first file to be included
 * because it defines the global objects.
 */
var weave = {};

weave.WeaveError = function(e) {
    if ( e instanceof Error ) {
        this.message = e.message;
    } else {
        this.message = e;
    }
}

weave.WeaveError.prototype = new Error();

weave.Log = (function() {
  var log = function(level, msg) {
    console.log(level + ": " + msg);
  };

  return {
    debug: function(msg) { log("debug", msg); },
    info: function(msg) { log("info", msg); },
    warn: function(msg) { log("warn", msg); },
    error: function(msg) { log("error", msg); }
  };
})();

module.exports = weave;