$ = require 'jquery
'
do fill = (item = 'Demo a coffee script insertion. - MeasyLite.') -> 
	$('.tagline').append "#{item}"
fill