!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.scrollshit=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * handleScroll
 */
function handleScroll(eve) {
  if (eve.target !== this) { return; }
  eve.preventDefault();
  this.scrollTop += (eve.deltaY * (Math.floor(Math.random() * 2) % 2 === 0 ? 1 : -1));
  return false;
}

/**
 * scrollshit
 */
function scrollshit(node) {
  (node || document.body).addEventListener('wheel', handleScroll, false);
}

/**
 * Expose scrollshit
 */
module.exports = scrollshit;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogaGFuZGxlU2Nyb2xsXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbChldmUpIHtcbiAgaWYgKGV2ZS50YXJnZXQgIT09IHRoaXMpIHsgcmV0dXJuOyB9XG4gIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGlzLnNjcm9sbFRvcCArPSAoZXZlLmRlbHRhWSAqIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSAlIDIgPT09IDAgPyAxIDogLTEpKTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIHNjcm9sbHNoaXRcbiAqL1xuZnVuY3Rpb24gc2Nyb2xsc2hpdChub2RlKSB7XG4gIChub2RlIHx8IGRvY3VtZW50LmJvZHkpLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSk7XG59XG5cbi8qKlxuICogRXhwb3NlIHNjcm9sbHNoaXRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxzaGl0O1xuIl19
