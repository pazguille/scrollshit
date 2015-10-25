(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.scrollshit = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * isParentNode
 */
function isParentNode(el, parent) {
  var isParent = false;
  var currentParent = el.parentElement;
  while (!isParent) {
    if (currentParent !== parent) {
      currentParent = currentParent.parentElement;
    } else {
      isParent = true;
    }
  };
  return isParent;
}

/**
 * handleScroll
 */
function handleScroll(eve) {
  if (eve.target !== this && !isParentNode(eve.target, this)) { return; }
  eve.preventDefault();
  var self = this;
  setTimeout(function () { self.scrollTop += (eve.deltaY * (Math.floor(Math.random() * 2) == 1 ? 1 : -1)); }, 500);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGlzUGFyZW50Tm9kZVxuICovXG5mdW5jdGlvbiBpc1BhcmVudE5vZGUoZWwsIHBhcmVudCkge1xuICB2YXIgaXNQYXJlbnQgPSBmYWxzZTtcbiAgdmFyIGN1cnJlbnRQYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoIWlzUGFyZW50KSB7XG4gICAgaWYgKGN1cnJlbnRQYXJlbnQgIT09IHBhcmVudCkge1xuICAgICAgY3VycmVudFBhcmVudCA9IGN1cnJlbnRQYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNQYXJlbnQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGlzUGFyZW50O1xufVxuXG4vKipcbiAqIGhhbmRsZVNjcm9sbFxuICovXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlKSB7XG4gIGlmIChldmUudGFyZ2V0ICE9PSB0aGlzICYmICFpc1BhcmVudE5vZGUoZXZlLnRhcmdldCwgdGhpcykpIHsgcmV0dXJuOyB9XG4gIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLnNjcm9sbFRvcCArPSAoZXZlLmRlbHRhWSAqIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PSAxID8gMSA6IC0xKSk7IH0sIDUwMCk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBzY3JvbGxzaGl0XG4gKi9cbmZ1bmN0aW9uIHNjcm9sbHNoaXQobm9kZSkge1xuICAobm9kZSB8fCBkb2N1bWVudC5ib2R5KS5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzY3JvbGxzaGl0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsc2hpdDtcbiJdfQ==
