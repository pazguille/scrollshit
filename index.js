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
