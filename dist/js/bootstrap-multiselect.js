/**
* bootstrap-multiselect.js v1.0.0 by @morrissinger
* Copyright 2014 Morris Singer
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap MultiSelect requires jQuery"); }

/* ==========================================================
 * bootstrap-multiselect.js
 * https://github.com/morrissinger/BootstrapMultiSelect
 * ==========================================================
 * Copyright 2012 Morris Singer
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';

  $.fn.multiSelect = function(params) {

    var defaults = {},
    		$el = $(this),
    		params = $.extend(defaults, params);
    
    $el.wrap("<div class=\"multiselect-wrapper\"></div>")

	  var wrapper = $el.parent(),
  		  $wrapper = $(wrapper);

	  wrapper.append("<div class=\"multiselect-selector\"></div>");

	  var selector = $wrapper.find(".multiselect-selector"),
	      $selector = $(selector),
	      options = $el.children("option");

	  options.each(function(optionIndex, option) {
	    if (option.value !== "") {
	      var optionHtml = document.createElement("a");
	      optionHtml.href="#";
	      optionHtml.className = "multiselect-selector-option";
	      optionHtml.data = {id: option.value};
	      optionHtml.innerHTML = option.text;

	      if ($(option).attr('selected') === "selected") {
	      	optionHtml.className = optionHtml.className + " selected";
	      }

	      $selector.append(optionHtml);

	      $(optionHtml).on('click', function(e) {
	      	e.preventDefault();
	      	if ($(this).hasClass("selected")) {
	      		$(this).removeClass("selected");
	      		option.selected = "";
	      	} else {
	      		$(this).addClass("selected");
	      		option.selected = "selected";
	      	}
	      });
	    }
	  });
	  
	  $el.hide();
  };

  $('select[data-toggle=multiselect]').each(function(){
    var $select;
    $select = $(this);
    $select.multiSelect($select.data());
  });
    
}(window.jQuery);