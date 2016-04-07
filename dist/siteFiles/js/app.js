"use strict";

(function ($) {

	// Expression bodies
	var odds = evens.map(function (v) {
		return v + 1;
	});
	var nums = evens.map(function (v, i) {
		return v + i;
	});
	var pairs = evens.map(function (v) {
		return { even: v, odd: v + 1 };
	});

	// Statement bodies
	nums.forEach(function (v) {
		if (v % 5 === 0) fives.push(v);
	});

	// Lexical this
	var bob = {
		_name: "Fred",
		_friends: [],
		printFriends: function printFriends() {
			var _this = this;

			this._friends.forEach(function (f) {
				return console.log(_this._name + " knows " + f);
			});
		}
	};
})(jQuery);