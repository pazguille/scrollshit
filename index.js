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
  setTimeout(function () { self.scrollTop += eve.deltaY; }, 800);
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
