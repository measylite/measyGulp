var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Demo a coffee script insertion. - MeasyLite.');

fill;
